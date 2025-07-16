import './styles/estilos.css';
import Navbar from './components/Navbar.js';
import { Home } from './pages/Home.js';
import renderMedicos from './pages/Medicos.js';
import renderCitas from './pages/Citas.js';
import renderLogin from './pages/Login.js';
import renderRegister from './pages/Register.js';

// Puedes agregar más páginas si lo necesitas:
// import { AdminPage } from './pages/Admin.js';

async function render() {
  let page;
  switch (window.location.hash) {
    case '#medicos':
      await renderMedicos();
      return;
    case '#citas':
      await renderCitas();
      return;
    case '#login':
      renderLogin();
      return;
    case '#register':
      renderRegister();
      return;
    // case '#admin':
    //   page = await AdminPage();
    //   break;
    default:
      page = await Home();
  }
  document.getElementById('root').innerHTML = Navbar() + (page || '');
}

document.body.innerHTML = `<div id="root"></div>`;

window.addEventListener('DOMContentLoaded', render);
window.addEventListener('hashchange', render);