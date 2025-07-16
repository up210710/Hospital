import { getCitas, crearCita, eliminarCita } from '../services/api.js';

export default async function renderCitas() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="container">
            <div class="citas-section mx-auto text-center">
                <h4 class="fw-bold mb-4"><i class="bi bi-calendar-check text-success"></i> Agendar nueva cita</h4>
                <form id="form-cita" class="row g-3 mb-4 justify-content-center">
                    <div class="col-md-3">
                        <input type="text" class="form-control" placeholder="Nombre del médico" name="medico" required>
                    </div>
                    <div class="col-md-3">
                        <input type="text" class="form-control" placeholder="Especialidad" name="especialidad" required>
                    </div>
                    <div class="col-md-3">
                        <input type="date" class="form-control" name="fecha" required>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-success w-100" type="submit"><i class="bi bi-plus-circle"></i> Agendar</button>
                    </div>
                </form>
                <h4 class="fw-bold mb-3"><i class="bi bi-list-check text-primary"></i> Mis Citas</h4>
                <div class="table-responsive">
                    <table class="table table-striped align-middle">
                        <thead>
                            <tr>
                                <th>Médico</th>
                                <th>Especialidad</th>
                                <th>Fecha</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="citas-body"></tbody>
                    </table>
                </div>
            </div>
        </div>
        <footer class="text-center mt-5 mb-3 text-muted">
            <hr />
            <p>2025 Consulta Médica Online®</p>
        </footer>
    `;

    async function cargarCitas() {
        const citas = await getCitas();
        const tbody = document.getElementById('citas-body');
        tbody.innerHTML = '';
        if (citas.length === 0) {
            tbody.innerHTML = `<tr><td colspan="4" class="text-secondary">No tienes citas agendadas.</td></tr>`;
        } else {
            citas.forEach(cita => {
                tbody.innerHTML += `
                    <tr>
                        <td>${cita.medico}</td>
                        <td>${cita.especialidad}</td>
                        <td>${cita.fecha}</td>
                        <td>
                            <button class="btn btn-danger btn-sm" data-id="${cita._id}">
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

    document.getElementById('form-cita').onsubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = {
            medico: form.medico.value,
            especialidad: form.especialidad.value,
            fecha: form.fecha.value,
            paciente: "Paciente demo" // Puedes cambiar esto por el paciente logueado
        };
        await crearCita(data);
        form.reset();
        cargarCitas();
    };

    cargarCitas();
}