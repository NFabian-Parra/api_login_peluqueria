function showTab(tabName) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.form-container').forEach(form => form.style.display = 'none');
  document.querySelector(`.tab:nth-child(${tabName === 'login' ? '1' : '2'})`).classList.add('active');
  document.getElementById(tabName).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  // Función para manejar el registro de usuario
  async function handleRegister(e) {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const apellidos = document.getElementById('apellidos').value;
      const genero = document.getElementById('genero').value;
      const fechaNacimiento = document.getElementById('fechaNacimiento').value;
      const ciudad = document.getElementById('ciudad').value;
      const direccion = document.getElementById('direccion').value;
      const telefono = document.getElementById('telefono').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
          const res = await fetch('http://localhost:5000/api/auth/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  nombre, apellidos, genero, fechaNacimiento, ciudad, direccion, telefono, email, password
              })
          });

          const data = await res.json();
          if (res.status === 200) {
              alert('Registro exitoso');
          } else {
              alert(`Error: ${data.msg}`);
          }
      } catch (error) {
          console.error('Error:', error);
          alert('Error de registro de usuario');
      }
  }

  // Función para manejar el inicio de sesión
  async function handleLogin(e) {
      e.preventDefault();

      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      try {
          const res = await fetch('http://localhost:5000/api/auth/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password })
          });

          const data = await res.json();
          if (res.status === 200) {
              alert('Login exitoso');
          } else {
              alert(`Error: ${data.msg}`);
          }
      } catch (error) {
          console.error('Error:', error);
          alert('Error de inicio de sesión');
      }
  }

  // Asignar los manejadores de eventos a los formularios
  document.getElementById('registerForm').addEventListener('submit', handleRegister);
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
});