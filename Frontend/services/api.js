const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export async function getMedicos() {
  const res = await fetch(`${API_URL}/medicos`);
  return await res.json();
}

export async function getCitas() {
  const res = await fetch(`${API_URL}/citas`);
  return await res.json();
}

export async function crearCita(data) {
  const res = await fetch(`${API_URL}/citas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
}

export async function eliminarCita(id) {
  const res = await fetch(`${API_URL}/citas/${id}`, { method: 'DELETE' });
  return await res.json();
}

export async function loginPaciente(data) {
  const res = await fetch(`${API_URL}/pacientes/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
}

export async function registerPaciente(data) {
  const res = await fetch(`${API_URL}/pacientes/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
}
