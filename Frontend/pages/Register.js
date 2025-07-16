import RegisterForm from '../components/RegisterForm.js';
import { registerPaciente } from '../services/api.js';

export default function renderRegister() {
  const app = document.getElementById('app');
  app.innerHTML = RegisterForm();

  document.getElementById('register-form').onsubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      nombre: form.nombre.value,
      correo: form.correo.value,
      password: form.password.value
    };
    const res = await registerPaciente(data);
    if (res.error) {
      alert(res.error);
    } else {
      alert('Registro exitoso');
      // Puedes redirigir al login
    }
  };
}