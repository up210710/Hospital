import LoginForm from '../components/LoginForm.js';
import { loginPaciente } from '../services/api.js';

export default function renderLogin() {
  const app = document.getElementById('app');
  app.innerHTML = LoginForm();

  document.getElementById('login-form').onsubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      correo: form.correo.value,
      password: form.password.value
    };
    const res = await loginPaciente(data);
    if (res.error) {
      alert(res.error);
    } else {
      alert('Bienvenido ' + res.nombre);
      // Aquí puedes guardar el usuario en localStorage y redirigir
    }
  };
}