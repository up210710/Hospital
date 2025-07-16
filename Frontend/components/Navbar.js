export default function Navbar() {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div class="container">
        <a href="/" class="navbar-brand fw-bold d-flex align-items-center">
          <img src="assets/img/logo.png" alt="Logo" width="40" height="40" class="me-2 rounded-circle border border-light bg-white" />
          Consulta Médica
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="/">Inicio</a></li>
            <li class="nav-item"><a class="nav-link" href="/medicos.html">Médicos</a></li>
            <li class="nav-item"><a class="nav-link" href="/citas.html">Mis Citas</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}