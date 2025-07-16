import { getMedicos } from '../services/api.js';
import MedicoCard from '../components/MedicoCard.js';
import { Navbar } from '../components/Navbar.js';

export async function Home() {
  const medicos = await getMedicos();
  const destacados = medicos.slice(0, 3);
  const otros = medicos.slice(3);

  let html = `
    <section style="margin: 40px auto 0 auto; max-width: 900px; text-align: center;">
      <img src="assets/img/logo.png" alt="Logo" width="80" height="80" class="mb-3 rounded-circle border border-2 border-primary bg-white shadow-sm" />
      <h1 style="font-size:2.5rem; color:#bfa14a; font-weight:bold; letter-spacing:2px; margin-bottom:10px; font-family:'Playfair Display',serif;">
        ¡Bienvenido a Consulta Médica Online!
      </h1>
      <p style="font-size:1.2rem; color:#444; margin-bottom:30px; font-family:'Playfair Display',serif;">
        Agenda tus citas, consulta con médicos certificados y lleva un control de tu salud de manera sencilla y segura.
      </p>
      <div class="d-flex justify-content-center gap-3 mb-4">
        <a href="#medicos" class="btn btn-gold btn-lg px-4">Ver Médicos</a>
        <a href="#citas" class="btn btn-outline-primary btn-lg px-4">Mis Citas</a>
        <a href="#login" class="btn btn-outline-secondary btn-lg px-4">Iniciar sesión</a>
        <a href="#register" class="btn btn-outline-secondary btn-lg px-4">Registrarse</a>
      </div>
    </section>
    <div style="display:flex;justify-content:center;align-items:center;width:100%;margin:0 auto 32px auto;">
      <div id="medicosDestacados" class="row" style="width:100%;max-width:950px;">
        ${destacados.map(m => MedicoCard(m)).join('')}
      </div>
    </div>
    <section style="max-width:1100px; margin:40px auto 0 auto;">
      <h2 style="color:#bfa14a; text-align:left; font-size:2rem; font-weight:bold; margin-bottom:18px; font-family:'Playfair Display',serif;">
        Otros Médicos
      </h2>
      <div id="otrosMedicos" class="row">
        ${otros.map(m => MedicoCard(m)).join('')}
      </div>
    </section>
    <footer class="text-center mt-5 mb-3 text-muted" style="font-family: 'Playfair Display', serif;">
      <hr />
      <p>2025 Consulta Médica Online®</p>
    </footer>
  `;

  return html;
}

page = await Home();
document.getElementById('root').innerHTML = Navbar() + page;