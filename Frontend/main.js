import renderMedicos from './pages/Medicos.js';
import renderCitas from './pages/Citas.js';
import Navbar from './components/Navbar.js';

document.getElementById('navbar').innerHTML = Navbar();

if (window.location.pathname.endsWith('medicos.html')) {
    renderMedicos();
}
if (window.location.pathname.endsWith('citas.html')) {
    renderCitas();
}