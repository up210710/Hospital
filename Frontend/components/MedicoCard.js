export default function MedicoCard(medico) {
    return `
    <div class="col-md-4 mb-4">
        <div class="card medico-card h-100 text-center p-3">
            <div class="card-body">
                <i class="bi bi-person-circle fs-1 text-primary mb-2"></i>
                <h5 class="card-title mb-2">${medico.nombre}</h5>
                <p class="card-text mb-1"><b>Especialidad:</b> ${medico.especialidad}</p>
                <p class="card-text text-secondary"><i class="bi bi-clock"></i> ${medico.horario}</p>
            </div>
        </div>
    </div>`;
}