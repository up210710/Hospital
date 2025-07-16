import { getCitas, crearCita, eliminarCita } from '../services/api.js';

export default async function renderCitas() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="container">
            <div class="citas-section mx-auto text-center shadow-lg" style="max-width: 900px;">
                <h2 class="fw-bold mb-4" style="font-family: 'Playfair Display', serif; color: #2c2c2c;">
                    <i class="bi bi-calendar-check text-gold"></i> Agenda tu cita con estilo
                </h2>
                <form id="form-cita" class="row g-3 mb-4 justify-content-center align-items-end" style="font-family: 'Playfair Display', serif;">
                    <div class="col-md-3">
                        <input type="text" class="form-control form-control-lg border-gold" placeholder="Nombre del médico" name="medico" required>
                    </div>
                    <div class="col-md-3">
                        <input type="text" class="form-control form-control-lg border-gold" placeholder="Especialidad" name="especialidad" required>
                    </div>
                    <div class="col-md-3">
                        <input type="date" class="form-control form-control-lg border-gold" name="fecha" required>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-gold w-100 btn-lg" type="submit">
                            <i class="bi bi-plus-circle"></i> Agendar
                        </button>
                    </div>
                </form>
                <h3 class="fw-bold mb-3 mt-5" style="font-family: 'Playfair Display', serif; color: #2c2c2c;">
                    <i class="bi bi-list-check text-gold"></i> Mis Citas
                </h3>
                <div class="table-responsive">
                    <table class="table table-bordered table-hover align-middle" style="background: #fff; font-family: 'Playfair Display', serif;">
                        <thead class="table-gold">
                            <tr>
                                <th class="text-center">Médico</th>
                                <th class="text-center">Especialidad</th>
                                <th class="text-center">Fecha</th>
                                <th class="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="citas-body"></tbody>
                    </table>
                </div>
            </div>
        </div>
        <footer class="text-center mt-5 mb-3 text-muted" style="font-family: 'Playfair Display', serif;">
            <hr />
            <p>2025 Consulta Médica Online®</p>
        </footer>
    `;

    // Cargar citas y renderizar tabla
    async function cargarCitas() {
        const citas = await getCitas();
        const tbody = document.getElementById('citas-body');
        tbody.innerHTML = '';
        if (citas.length === 0) {
            tbody.innerHTML = `<tr><td colspan="4" class="text-secondary text-center">No tienes citas agendadas.</td></tr>`;
        } else {
            citas.forEach(cita => {
                tbody.innerHTML += `
                    <tr>
                        <td class="text-center">${cita.medico}</td>
                        <td class="text-center">${cita.especialidad}</td>
                        <td class="text-center">${cita.fecha}</td>
                        <td class="text-center">
                            <button class="btn btn-outline-danger btn-sm rounded-pill px-3" data-id="${cita._id}">
                                <i class="bi bi-x-circle"></i> Cancelar
                            </button>
                        </td>
                    </tr>
                `;
            });
            tbody.querySelectorAll('button[data-id]').forEach(btn => {
                btn.onclick = async () => {
                    await eliminarCita(btn.getAttribute('data-id'));
                    cargarCitas();
                };
            });
        }
    }

    // Evento para agendar cita
    document.getElementById('form-cita').onsubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = {
            medico: form.medico.value,
            especialidad: form.especialidad.value,
            fecha: form.fecha.value,
            paciente: "Paciente demo" // Cambia por el paciente logueado si tienes login
        };
        await crearCita(data);
        form.reset();
        cargarCitas();
    };

    cargarCitas();
}