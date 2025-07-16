import { getMedicos } from '../services/api.js';
import MedicoCard from '../components/MedicoCard.js';

export default async function renderMedicos() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="container">
      <div class="medicos-section mx-auto text-center">
        <h2 class="mb-4 fw-bold"><i class="bi bi-person-badge text-primary"></i> Médicos disponibles</h2>
        <button id="toggle-btn" class="btn btn-outline-primary mb-4">Mostrar/Ocultar lista</button>
        <div id="medicos-container" style="display: none;">
          <div class="row" id="cards-medicos"></div>
        </div>
      </div>
    </div>
    <footer class="text-center mt-5 mb-3 text-muted">
      <hr />
      <p>2025 Consulta Médica Online®</p>
    </footer>
  `;

  document.getElementById('toggle-btn').onclick = () => {
    const container = document.getElementById('medicos-container');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
  };

  const cards = document.getElementById('cards-medicos');
  const medicos = await getMedicos();
  medicos.forEach(medico => {
    cards.innerHTML += MedicoCard(medico);
  });
}