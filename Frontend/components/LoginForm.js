export default function LoginForm(onSubmit) {
  return `
    <form id="login-form" class="p-4 rounded shadow" style="max-width:400px;margin:auto;background:#fff;">
      <h2 class="mb-4 text-center" style="font-family:'Playfair Display',serif;">Iniciar sesión</h2>
      <div class="mb-3">
        <input type="email" class="form-control" name="correo" placeholder="Correo" required>
      </div>
      <div class="mb-3">
        <input type="password" class="form-control" name="password" placeholder="Contraseña" required>
      </div>
      <button type="submit" class="btn btn-gold w-100">Entrar</button>
    </form>
  `;
}