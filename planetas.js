/*
JavaScript es un lenguaje de programación de alto nivel, dinámico e interpretado. Es ampliamente utilizado para agregar interactividad a las páginas web y es un componente esencial del desarrollo web moderno.

Características clave de JavaScript:
- Lenguaje interpretado: No necesita ser compilado, los navegadores ejecutan el código directamente.
- Multiparadigma: Soporta programación funcional, orientada a objetos e imperativa.
- Dinámico y débilmente tipado: Las variables pueden cambiar de tipo durante la ejecución.

// Declaración de variables
var nombre = "Juan"; // var: Ámbito global o de función
let edad = 25;        // let: Ámbito de bloque
const pi = 3.1416;    // const: Constante

// Funciones en JavaScript
function saludar(nombre) { return "Hola " + nombre; } // Declarativa
const despedirse = function(nombre) { return "Adiós " + nombre; }; // Expresión
const sumar = (a, b) => a + b; // Flecha

// Manejo de arrays y objetos
let numeros = [1, 2, 3, 4, 5];
numeros.push(6);
console.log(numeros.length);
let persona = {
    nombre: "Juan",
    edad: 25,
    saludar: function() { return "Hola, soy " + this.nombre; }
};
console.log(persona.saludar());

// Asincronía en JavaScript
setTimeout(() => { console.log("Este mensaje aparece después de 2 segundos"); }, 2000);
let promesa = new Promise((resolve, reject) => { let exito = true; if (exito) { resolve("Promesa cumplida"); } else { reject("Promesa fallida"); } });
promesa.then(result => console.log(result)).catch(error => console.log(error));
async function obtenerDatos() { try { let resultado = await promesa; console.log(resultado); } catch (error) { console.log(error); } }
obtenerDatos();

// DOM (Document Object Model)
let elemento = document.getElementById("miElemento");
let elementos = document.getElementsByClassName("miClase");
let etiquetas = document.getElementsByTagName("p");
let primerElemento = document.querySelector(".miClase");
let todosLosElementos = document.querySelectorAll("div");
document.getElementById("miElemento").textContent = "Nuevo contenido";
document.getElementById("miElemento").style.color = "blue";
let nuevoElemento = document.createElement("p");
nuevoElemento.textContent = "Este es un párrafo nuevo";
document.body.appendChild(nuevoElemento);

// Eventos en JavaScript
document.getElementById("miBoton").addEventListener("click", function() { alert("¡Botón clicado!"); });
document.addEventListener("keydown", function(event) { console.log("Tecla presionada: " + event.key); });
document.getElementById("miElemento").addEventListener("mouseover", function() { this.style.backgroundColor = "yellow"; });

// Frameworks JavaScript
// React
// import React from "react";
// function Saludo() { return <h1>¡Hola, mundo!</h1>; }
// export default Saludo;
// Vue.js
// new Vue({ el: '#app', data: { mensaje: '¡Hola, Vue!' } });
*/

// planetas.js
// Efectos realistas para planetas y cometas

(function() {
  // --- PLANETAS REALISTAS ---
  const planetas = document.querySelectorAll('.planeta');
  planetas.forEach(planeta => {
    // Sombra y brillo dinámico
    planeta.style.boxShadow = '0 0 30px 10px rgba(0,0,0,0.4), 0 0 24px 8px #fff2, 0 0 60px 20px #fff1';
    planeta.animate([
      { filter: 'brightness(1) saturate(1.2) drop-shadow(0 0 8px #fff2)' },
      { filter: 'brightness(1.2) saturate(1.5) drop-shadow(0 0 24px #fff)' },
      { filter: 'brightness(1) saturate(1.2) drop-shadow(0 0 8px #fff2)' }
    ], {
      duration: 4200 + Math.random() * 1200,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out'
    });
    // Simulación de atmósfera
    planeta.style.position = 'relative';
    const atmosfera = document.createElement('div');
    atmosfera.style.position = 'absolute';
    atmosfera.style.left = '-10%';
    atmosfera.style.top = '-10%';
    atmosfera.style.width = '120%';
    atmosfera.style.height = '120%';
    atmosfera.style.borderRadius = '50%';
    atmosfera.style.background = 'radial-gradient(circle, rgba(255,255,255,0.12) 40%, transparent 80%)';
    atmosfera.style.pointerEvents = 'none';
    planeta.appendChild(atmosfera);
  });

  // --- COMETAS ANIMADOS ---
  function crearCometa() {
    const cometa = document.createElement('div');
    cometa.style.position = 'fixed';
    cometa.style.width = '2.5vw';
    cometa.style.height = '0.5vw';
    cometa.style.background = 'linear-gradient(90deg, #fff, #aefcff, transparent)';
    cometa.style.borderRadius = '50%';
    cometa.style.opacity = 0.8;
    cometa.style.zIndex = 3;
    cometa.style.pointerEvents = 'none';
    // Posición y trayectoria aleatoria
    const startY = Math.random() * 80 + 5;
    const startX = Math.random() < 0.5 ? -10 : 110;
    const endX = startX < 0 ? 110 : -10;
    cometa.style.top = startY + 'vh';
    cometa.style.left = startX + 'vw';
    document.body.appendChild(cometa);
    cometa.animate([
      { left: startX + 'vw', opacity: 0.8 },
      { left: endX + 'vw', opacity: 0 }
    ], {
      duration: 3200 + Math.random() * 1200,
      easing: 'ease-in',
      fill: 'forwards'
    });
    setTimeout(() => cometa.remove(), 4000);
  }
  setInterval(() => {
    if (Math.random() < 0.5) crearCometa();
  }, 3500);

  // --- SOL MÁS REALISTA ---
  const sol = document.querySelector('.sol');
  if (sol) {
    // Tamaño más pequeño para el sol
    sol.style.width = '120px';
    sol.style.height = '120px';
    sol.style.left = '50%';
    sol.style.top = '50%';
    sol.style.marginLeft = '-60px';
    sol.style.marginTop = '-60px';
    // Fondo solar realista (sin corona animada)
    sol.style.background = 'radial-gradient(circle at 55% 45%, #fffde4 0%, #ffe066 40%, #ffb300 70%, #ff9900 100%)';
    sol.style.boxShadow = '0 0 60px 30px #fffde4, 0 0 150px 75px #ffb300, 0 0 300px 150px #ff9900, 0 0 40px 20px #fff8';
    sol.style.border = 'none';
    // Eliminar corona si existe
    let corona = document.getElementById('corona-solar');
    if (corona) corona.remove();
    // Eliminar las esferas del dragón alrededor del sol
    const esferas = document.querySelectorAll('.esfera');
    esferas.forEach(esfera => esfera.remove());
    // Animación de brillo solar
    sol.animate([
      { filter: 'blur(0.2px) brightness(1.1)' },
      { filter: 'blur(2.5px) brightness(1.3)' },
      { filter: 'blur(0.2px) brightness(1.1)' }
    ], {
      duration: 5000,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out'
    });
  }

  // --- GALAXIA MÁS REALISTA ---
  function fondoGalaxia() {
    let fondo = document.getElementById('shenlong-fondo');
    if (fondo) fondo.remove();
    let galaxia = document.getElementById('galaxia-fondo');
    if (!galaxia) {
      galaxia = document.createElement('div');
      galaxia.id = 'galaxia-fondo';
      galaxia.style.position = 'fixed';
      galaxia.style.left = 0;
      galaxia.style.top = 0;
      galaxia.style.width = '100vw';
      galaxia.style.height = '100vh';
      galaxia.style.zIndex = 0;
      galaxia.style.pointerEvents = 'none';
      galaxia.style.background = `radial-gradient(ellipse at 60% 40%, #fff8 0%, #aaf 10%, #223 40%, #111 100%)`;
      document.body.appendChild(galaxia);
      // Nubes galácticas animadas
      for (let i = 0; i < 6; i++) {
        const nube = document.createElement('div');
        nube.style.position = 'absolute';
        nube.style.width = (30 + Math.random() * 60) + 'vw';
        nube.style.height = (12 + Math.random() * 24) + 'vw';
        nube.style.left = (5 + Math.random() * 80) + 'vw';
        nube.style.top = (5 + Math.random() * 80) + 'vh';
        nube.style.background = `radial-gradient(circle, rgba(255,255,255,${0.10 + Math.random() * 0.10}) 0%, rgba(170,200,255,0.08) 60%, transparent 100%)`;
        nube.style.filter = 'blur(48px)';
        nube.style.opacity = 0.7;
        nube.style.zIndex = 0;
        nube.animate([
          { opacity: 0.7, transform: 'scale(1) rotate(0deg)' },
          { opacity: 0.5, transform: 'scale(1.18) rotate(12deg)' },
          { opacity: 0.7, transform: 'scale(1) rotate(0deg)' }
        ], {
          duration: 22000 + Math.random() * 8000,
          iterations: Infinity,
          direction: 'alternate',
          easing: 'ease-in-out'
        });
        galaxia.appendChild(nube);
      }
      // Cinturón galáctico (banda luminosa)
      const banda = document.createElement('div');
      banda.style.position = 'absolute';
      banda.style.left = '0';
      banda.style.top = '50%';
      banda.style.width = '100vw';
      banda.style.height = '18vw';
      banda.style.transform = 'translateY(-50%) rotate(-18deg)';
      banda.style.background = 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.10) 30%, rgba(200,220,255,0.18) 50%, rgba(255,255,255,0.10) 70%, transparent 100%)';
      banda.style.filter = 'blur(32px)';
      banda.style.opacity = 0.7;
      banda.style.zIndex = 0;
      galaxia.appendChild(banda);
      banda.animate([
        { opacity: 0.7 },
        { opacity: 0.5 },
        { opacity: 0.7 }
      ], {
        duration: 18000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
      });
    }
  }
  fondoGalaxia();

  // --- LUNA MÁS REALISTA CERCA DE LA TIERRA ---
  const orbitaLuna = document.querySelector('.orbita.luna');
  const planetaLuna = document.querySelector('.planeta.luna');
  const orbitaTierra = document.querySelector('.orbita.tierra');
  const planetaTierra = document.querySelector('.planeta.tierra');
  if (orbitaLuna && planetaLuna && orbitaTierra && planetaTierra) {
    // Hacer la órbita de la luna más pequeña y cercana a la tierra
    orbitaLuna.style.width = '180px';
    orbitaLuna.style.height = '180px';
    orbitaLuna.style.zIndex = 20;
    orbitaLuna.style.border = '1.5px dashed rgba(255,255,255,0.18)';
    orbitaLuna.style.animationDuration = '4s';
    // Posicionar la órbita de la luna alrededor de la tierra
    orbitaLuna.style.left = 'calc(50% + 90px)';
    orbitaLuna.style.top = '50%';
    // Hacer la luna más pequeña y con textura
    planetaLuna.style.width = '22px';
    planetaLuna.style.height = '22px';
    planetaLuna.style.background = 'radial-gradient(circle at 60% 40%, #f5f3e7 60%, #b0b0b0 100%)';
    planetaLuna.style.boxShadow = '0 0 8px 2px #fff8, 0 0 4px 1px #b0b0b0';
    planetaLuna.style.border = '1.5px solid #fff6';
    planetaLuna.style.color = '#222';
    planetaLuna.style.fontSize = '0.9em';
    planetaLuna.style.fontWeight = 'bold';
    // Simular cráteres con pequeños círculos
    for (let i = 0; i < 4; i++) {
      const crater = document.createElement('div');
      crater.style.position = 'absolute';
      crater.style.width = (3 + Math.random() * 2) + 'px';
      crater.style.height = crater.style.width;
      crater.style.left = (6 + Math.random() * 10) + 'px';
      crater.style.top = (6 + Math.random() * 10) + 'px';
      crater.style.background = 'rgba(180,180,180,0.35)';
      crater.style.borderRadius = '50%';
      crater.style.boxShadow = '0 0 2px #8888';
      planetaLuna.appendChild(crater);
    }
    // Animación de brillo lunar
    planetaLuna.animate([
      { filter: 'brightness(1) drop-shadow(0 0 4px #fff8)' },
      { filter: 'brightness(1.2) drop-shadow(0 0 12px #fff)' },
      { filter: 'brightness(1) drop-shadow(0 0 4px #fff8)' }
    ], {
      duration: 4200,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out'
    });
  }

  // --- EXPLOSIÓN BIG BANG Y RETORNO DE PLANETAS ---
  function crearExplosionBigBang(x, y, radio = 40, particulas = 24) {
    // Explosión central
    crearExplosion(x, y, radio);
    // Partículas que salen disparadas
    for (let i = 0; i < particulas; i++) {
      const ang = (2 * Math.PI * i) / particulas;
      const px = x + Math.cos(ang) * 8;
      const py = y + Math.sin(ang) * 8;
      const part = document.createElement('div');
      part.style.position = 'fixed';
      part.style.left = px + 'px';
      part.style.top = py + 'px';
      part.style.width = '10px';
      part.style.height = '10px';
      part.style.borderRadius = '50%';
      part.style.background = `radial-gradient(circle, #fff 0%, #ff0 40%, #f90 80%, transparent 100%)`;
      part.style.opacity = 0.8;
      part.style.zIndex = 1001;
      part.animate([
        { transform: 'scale(0.7)', opacity: 0.8 },
        { transform: `translate(${Math.cos(ang)*radio*2}px, ${Math.sin(ang)*radio*2}px) scale(1.5)`, opacity: 0.2 }
      ], {
        duration: 1200,
        easing: 'cubic-bezier(.68,-0.55,.27,1.55)',
        fill: 'forwards'
      });
      setTimeout(() => part.remove(), 1300);
      document.body.appendChild(part);
    }
  }

  // Cambiar todas las llamadas a crearExplosion por crearExplosionBigBang y restaurar planetas
  function restaurarPlaneta(planeta, pos) {
    planeta.style.transition = 'all 0.7s cubic-bezier(.68,-0.55,.27,1.55)';
    planeta.style.left = pos.left;
    planeta.style.top = pos.top;
    planeta.style.position = pos.position;
    planeta.style.opacity = 1;
    setTimeout(() => {
      planeta.style.transition = '';
    }, 700);
  }

  // --- DRAG & DROP DE PLANETAS MEJORADO ---
  let planetaArrastrando = null;
  let offsetX = 0, offsetY = 0;
  let posOriginal = { left: 0, top: 0, position: '' };

  planetas.forEach(planeta => {
    planeta.draggable = false;
    planeta.addEventListener('mousedown', function(e) {
      e.preventDefault();
      planetaArrastrando = planeta;
      const rect = planeta.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      // Guardar posición original para volver si no hay colisión
      posOriginal = {
        left: planeta.style.left,
        top: planeta.style.top,
        position: planeta.style.position
      };
      planeta.style.zIndex = 9999;
      planeta.style.transition = 'none';
      document.body.style.userSelect = 'none';
    });
  });

  document.addEventListener('mousemove', function(e) {
    if (planetaArrastrando) {
      const parentRect = planetaArrastrando.parentElement.getBoundingClientRect();
      let x = e.clientX - parentRect.left - offsetX;
      let y = e.clientY - parentRect.top - offsetY;
      planetaArrastrando.style.position = 'absolute';
      planetaArrastrando.style.left = x + 'px';
      planetaArrastrando.style.top = y + 'px';
      planetaArrastrando.style.pointerEvents = 'none'; // Evita que se detecte a sí mismo en colisión
    }
  });

  document.addEventListener('mouseup', function(e) {
    if (planetaArrastrando) {
      planetaArrastrando.style.pointerEvents = '';
      const rect1 = planetaArrastrando.getBoundingClientRect();
      let colisionado = null;
      let posColisionado = null;
      planetas.forEach(p => {
        if (p !== planetaArrastrando) {
          const rect2 = p.getBoundingClientRect();
          const dx = (rect1.left + rect1.width/2) - (rect2.left + rect2.width/2);
          const dy = (rect1.top + rect1.height/2) - (rect2.top + rect2.height/2);
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < (rect1.width+rect2.width)/2) {
            colisionado = p;
            posColisionado = {
              left: p.style.left,
              top: p.style.top,
              position: p.style.position
            };
          }
        }
      });
      if (colisionado) {
        const rect2 = colisionado.getBoundingClientRect();
        const cx = (rect1.left + rect2.left + rect1.width/2 + rect2.width/2)/2;
        const cy = (rect1.top + rect2.top + rect1.height/2 + rect2.height/2)/2;
        crearExplosionBigBang(cx, cy, Math.max(rect1.width, rect2.width)*1.2);
        planetaArrastrando.style.opacity = 0.2;
        colisionado.style.opacity = 0.2;
        setTimeout(() => {
          restaurarPlaneta(planetaArrastrando, posOriginal);
          restaurarPlaneta(colisionado, posColisionado);
        }, 5000);
      } else {
        planetaArrastrando.style.transition = 'all 0.5s cubic-bezier(.68,-0.55,.27,1.55)';
        planetaArrastrando.style.left = posOriginal.left;
        planetaArrastrando.style.top = posOriginal.top;
        planetaArrastrando.style.position = posOriginal.position;
        setTimeout(() => {
          planetaArrastrando.style.transition = '';
        }, 500);
      }
      planetaArrastrando.style.zIndex = 4;
      document.body.style.userSelect = '';
      planetaArrastrando = null;
    }
  });

  // --- CLICK EN PLANETAS ---
  planetas.forEach(planeta => {
    planeta.style.cursor = 'pointer';
    planeta.addEventListener('click', function (e) {
      e.stopPropagation();
      const rect = planeta.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      if (!planetaSeleccionado) {
        // Primer clic: seleccionar planeta
        planetaSeleccionado = planeta;
        planeta.style.outline = '3px solid #ff0';
      } else if (planetaSeleccionado === planeta) {
        // Doble clic en el mismo planeta: explosión
        crearExplosionBigBang(cx, cy, rect.width * 1.2);
        planeta.style.opacity = 0.2;
        let pos = {
          left: planeta.style.left,
          top: planeta.style.top,
          position: planeta.style.position
        };
        setTimeout(() => {
          restaurarPlaneta(planeta, pos);
          planeta.style.outline = '';
        }, 5000);
        planetaSeleccionado = null;
      } else {
        // Segundo clic: colisión entre planetas
        const otro = planeta;
        const rect2 = otro.getBoundingClientRect();
        const c2x = rect2.left + rect2.width / 2;
        const c2y = rect2.top + rect2.height / 2;
        // Animar movimiento del planeta seleccionado hacia el otro
        const dx = c2x - cx;
        const dy = c2y - cy;
        planetaSeleccionado.animate([
          { transform: planetaSeleccionado.style.transform || '', left: '0px', top: '0px' },
          { transform: `translate(${dx}px, ${dy}px) scale(1.2)`, left: dx + 'px', top: dy + 'px' }
        ], {
          duration: 700,
          fill: 'forwards',
          easing: 'ease-in'
        });
        let pos1 = {
          left: planetaSeleccionado.style.left,
          top: planetaSeleccionado.style.top,
          position: planetaSeleccionado.style.position
        };
        let pos2 = {
          left: otro.style.left,
          top: otro.style.top,
          position: otro.style.position
        };
        setTimeout(() => {
          crearExplosionBigBang(c2x, c2y, Math.max(rect.width, rect2.width) * 1.3);
          planetaSeleccionado.style.opacity = 0.2;
          otro.style.opacity = 0.2;
          setTimeout(() => {
            restaurarPlaneta(planetaSeleccionado, pos1);
            restaurarPlaneta(otro, pos2);
            planetaSeleccionado.style.outline = '';
          }, 5000);
        }, 700);
        planetaSeleccionado = null;
      }
    });
  });

  // --- MOVER PLANETA A OTRA ÓRBITA CON EL CURSOR ---
  let orbitaActual = null;
  planetas.forEach(planeta => {
    planeta.addEventListener('mouseenter', function() {
      // Resalta la órbita actual
      orbitaActual = planeta.closest('.orbitador')?.previousElementSibling;
      if (orbitaActual && orbitaActual.classList.contains('orbita')) {
        orbitaActual.style.boxShadow = '0 0 16px 4px #ff0b';
        orbitaActual.style.borderColor = '#ff0b';
      }
    });
    planeta.addEventListener('mouseleave', function() {
      if (orbitaActual && orbitaActual.classList.contains('orbita')) {
        orbitaActual.style.boxShadow = '';
        orbitaActual.style.borderColor = '';
      }
    });
    planeta.addEventListener('wheel', function(e) {
      e.preventDefault();
      // Cambia de órbita con la rueda del mouse
      const orbitas = Array.from(document.querySelectorAll('.orbita'));
      let actual = orbitas.findIndex(o => o === orbitaActual);
      if (actual === -1) {
        // Si no se detecta, buscar la órbita más cercana
        const planetaRect = planeta.getBoundingClientRect();
        actual = orbitas.findIndex(o => {
          const oRect = o.getBoundingClientRect();
          return Math.abs(oRect.width - planetaRect.width) < 50;
        });
      }
      let nueva = actual + (e.deltaY > 0 ? 1 : -1);
      if (nueva < 0) nueva = 0;
      if (nueva >= orbitas.length) nueva = orbitas.length - 1;
      if (nueva !== actual && orbitas[nueva]) {
        // Mover el planeta a la nueva órbita
        const orbitaNueva = orbitas[nueva];
        const orbitaRect = orbitaNueva.getBoundingClientRect();
        const parentRect = planeta.parentElement.getBoundingClientRect();
        const x = orbitaRect.left + orbitaRect.width/2 - parentRect.left - planeta.offsetWidth/2;
        const y = orbitaRect.top + orbitaRect.height/2 - parentRect.top - planeta.offsetHeight/2;
        planeta.style.transition = 'all 0.7s cubic-bezier(.68,-0.55,.27,1.55)';
        planeta.style.position = 'absolute';
        planeta.style.left = x + 'px';
        planeta.style.top = y + 'px';
        setTimeout(() => {
          planeta.style.transition = '';
        }, 700);
      }
    });
  });

  // --- DETECTAR COLISIÓN EN TIEMPO REAL DURANTE ARRASTRE ---
  document.addEventListener('mousemove', function(e) {
    if (planetaArrastrando) {
      const parentRect = planetaArrastrando.parentElement.getBoundingClientRect();
      let x = e.clientX - parentRect.left - offsetX;
      let y = e.clientY - parentRect.top - offsetY;
      planetaArrastrando.style.position = 'absolute';
      planetaArrastrando.style.left = x + 'px';
      planetaArrastrando.style.top = y + 'px';
      planetaArrastrando.style.pointerEvents = 'none';
      // Detectar colisión en tiempo real
      const rect1 = planetaArrastrando.getBoundingClientRect();
      let colisionado = null;
      let posColisionado = null;
      planetas.forEach(p => {
        if (p !== planetaArrastrando) {
          const rect2 = p.getBoundingClientRect();
          const dx = (rect1.left + rect1.width/2) - (rect2.left + rect2.width/2);
          const dy = (rect1.top + rect1.height/2) - (rect2.top + rect2.height/2);
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < (rect1.width+rect2.width)/2) {
            colisionado = p;
            posColisionado = {
              left: p.style.left,
              top: p.style.top,
              position: p.style.position
            };
          }
        }
      });
      if (colisionado) {
        // Explosión Big Bang inmediata
        const rect2 = colisionado.getBoundingClientRect();
        const cx = (rect1.left + rect2.left + rect1.width/2 + rect2.width/2)/2;
        const cy = (rect1.top + rect2.top + rect1.height/2 + rect2.height/2)/2;
        crearExplosionBigBang(cx, cy, Math.max(rect1.width, rect2.width)*1.2);
        planetaArrastrando.style.opacity = 0.2;
        colisionado.style.opacity = 0.2;
        setTimeout(() => {
          restaurarPlaneta(planetaArrastrando, posOriginal);
          restaurarPlaneta(colisionado, posColisionado);
        }, 5000);
        planetaArrastrando.style.pointerEvents = '';
        planetaArrastrando.style.zIndex = 4;
        document.body.style.userSelect = '';
        planetaArrastrando = null;
      }
    }
  });

  // --- INFORMACIÓN DE PLANETA EN RECUADRO INFERIOR IZQUIERDA (Sistema Solar real) ---
  const infoPlanetas = {
    mercurio: {
      nombre: 'Mercurio',
      descripcion: 'El planeta más cercano al Sol. Pequeño, rocoso y sin atmósfera significativa.',
      habitantes: 'Ninguno',
      color: '#b2b2b2'
    },
    venus: {
      nombre: 'Venus',
      descripcion: 'Segundo planeta. Denso, con atmósfera de CO₂ y temperaturas extremas.',
      habitantes: 'Ninguno',
      color: '#e6c97b'
    },
    tierra: {
      nombre: 'Tierra',
      descripcion: 'Nuestro planeta, único con vida conocida y agua líquida.',
      habitantes: 'Humanos y millones de especies',
      color: '#3a7bd5'
    },
    marte: {
      nombre: 'Marte',
      descripcion: 'El planeta rojo. Tiene los volcanes más grandes y evidencia de agua pasada.',
      habitantes: 'Ninguno',
      color: '#c1440e'
    },
    jupiter: {
      nombre: 'Júpiter',
      descripcion: 'El planeta más grande. Gaseoso, con una gran mancha roja y docenas de lunas.',
      habitantes: 'Ninguno',
      color: '#e3b873'
    },
    saturno: {
      nombre: 'Saturno',
      descripcion: 'Famoso por sus anillos espectaculares. Gaseoso y de gran tamaño.',
      habitantes: 'Ninguno',
      color: '#e7c97b'
    },
    urano: {
      nombre: 'Urano',
      descripcion: 'Planeta gigante de hielo, con inclinación extrema y color azul verdoso.',
      habitantes: 'Ninguno',
      color: '#7de2fc'
    },
    neptuno: {
      nombre: 'Neptuno',
      descripcion: 'El más lejano. Azul intenso, vientos muy rápidos y clima extremo.',
      habitantes: 'Ninguno',
      color: '#4062bb'
    }
  };

  // Crear el recuadro de información si no existe
  let infoBox = document.getElementById('info-planeta-box');
  if (!infoBox) {
    infoBox = document.createElement('div');
    infoBox.id = 'info-planeta-box';
    infoBox.style.position = 'fixed';
    infoBox.style.left = '1.5rem';
    infoBox.style.bottom = '1.5rem';
    infoBox.style.minWidth = '220px';
    infoBox.style.maxWidth = '320px';
    infoBox.style.background = 'rgba(20,20,30,0.92)';
    infoBox.style.color = '#fff';
    infoBox.style.borderRadius = '12px';
    infoBox.style.boxShadow = '0 4px 24px #000a';
    infoBox.style.padding = '1rem 1.2rem';
    infoBox.style.fontFamily = 'inherit';
    infoBox.style.fontSize = '1rem';
    infoBox.style.zIndex = 99999;
    infoBox.style.display = 'none';
    infoBox.style.transition = 'opacity 0.3s';
    document.body.appendChild(infoBox);
  }

  // Mostrar información al hacer click en un planeta
  planetas.forEach(planeta => {
    planeta.addEventListener('click', function(e) {
      const clases = Array.from(planeta.classList);
      const clave = clases.find(c => infoPlanetas[c]);
      if (clave) {
        const info = infoPlanetas[clave];
        infoBox.innerHTML = `<strong style="color:${info.color}">${info.nombre}</strong><br><span>${info.descripcion}</span><br><small>Habitantes: ${info.habitantes}</small>`;
        infoBox.style.display = 'block';
        infoBox.style.opacity = 1;
      }
    });
  });
  // Ocultar el recuadro al hacer click fuera de un planeta
  window.addEventListener('click', function(e) {
    if (!e.target.classList.contains('planeta')) {
      infoBox.style.opacity = 0;
      setTimeout(()=>{ infoBox.style.display = 'none'; }, 300);
    }
  });

  // --- ÓRBITAS Y LUNAS REALISTAS ---
  // Animar las órbitas de los planetas y sus lunas
  const orbitas = document.querySelectorAll('.orbita');
  orbitas.forEach((orbita, i) => {
    // Animación de rotación continua para cada órbita
    const duraciones = [6, 8, 10, 12, 16, 20, 24, 28]; // Mercurio a Neptuno
    orbita.style.animation = `orbita${i+1} ${duraciones[i % duraciones.length]}s linear infinite`;
    orbita.style.transformOrigin = '50% 50%';
  });

  // LUNAS REALISTAS: Añadir animación a las lunas de los planetas que las tienen
  function animarLunas() {
    // Tierra
    document.querySelectorAll('.planeta.tierra .luna-realista').forEach(luna => {
      luna.style.animation = 'orbita-luna-tierra 3s linear infinite';
    });
    // Marte
    document.querySelectorAll('.planeta.marte .luna-realista').forEach((luna, idx) => {
      luna.style.animation = `orbita-luna-tierra ${2.2 + idx*0.9}s linear infinite`;
    });
    // Júpiter
    document.querySelectorAll('.planeta.jupiter .luna-realista').forEach((luna, idx) => {
      luna.style.animation = `orbita-luna-tierra ${1.5 + idx}s linear infinite`;
    });
    // Saturno
    document.querySelectorAll('.planeta.saturno .luna-realista').forEach((luna, idx) => {
      luna.style.animation = `orbita-luna-tierra ${2.1 + idx*0.7}s linear infinite`;
    });
  }
  animarLunas();

  // --- ANILLOS DE SATURNO ---
  const saturno = document.querySelector('.planeta.saturno');
  if (saturno && !saturno.querySelector('.anillos-saturno')) {
    const anillos = document.createElement('div');
    anillos.className = 'anillos-saturno';
    anillos.style.position = 'absolute';
    anillos.style.left = '-18px';
    anillos.style.top = '50%';
    anillos.style.width = '56px';
    anillos.style.height = '18px';
    anillos.style.transform = 'translateY(-50%) rotate(-18deg)';
    anillos.style.borderRadius = '50%';
    anillos.style.border = '3px solid rgba(255, 230, 102, 0.7)';
    anillos.style.borderTop = '3px solid rgba(191, 167, 111, 0.5)';
    anillos.style.borderBottom = '2px solid rgba(255,255,255,0.2)';
    anillos.style.background = 'radial-gradient(ellipse at center, rgba(255,255,255,0.08) 60%, transparent 100%)';
    anillos.style.pointerEvents = 'none';
    anillos.style.zIndex = 2;
    saturno.appendChild(anillos);
  }

  // --- BANDAS Y DETALLES EN PLANETAS ---
  // Júpiter: bandas y mancha roja
  const jupiter = document.querySelector('.planeta.jupiter');
  if (jupiter && !jupiter.querySelector('.mancha-roja')) {
    const mancha = document.createElement('div');
    mancha.className = 'mancha-roja';
    mancha.style.position = 'absolute';
    mancha.style.left = '60%';
    mancha.style.top = '60%';
    mancha.style.width = '18px';
    mancha.style.height = '10px';
    mancha.style.background = 'radial-gradient(ellipse at center, #d96c2c 60%, transparent 100%)';
    mancha.style.borderRadius = '50%';
    mancha.style.opacity = 0.8;
    mancha.style.zIndex = 2;
    jupiter.appendChild(mancha);
  }
  // Bandas en Júpiter y Saturno
  function agregarBandas(planetClass, color1, color2, n) {
    const planeta = document.querySelector(planetClass);
    if (planeta) {
      for (let i = 0; i < n; i++) {
        const banda = document.createElement('div');
        banda.style.position = 'absolute';
        banda.style.left = '0';
        banda.style.top = `${10 + i*8}%`;
        banda.style.width = '100%';
        banda.style.height = '6px';
        banda.style.background = `linear-gradient(90deg, ${color1}, ${color2})`;
        banda.style.opacity = 0.18;
        banda.style.borderRadius = '50%';
        banda.style.zIndex = 1;
        planeta.appendChild(banda);
      }
    }
  }
  agregarBandas('.planeta.jupiter', '#fff', '#c68642', 4);
  agregarBandas('.planeta.saturno', '#fff6c1', '#bfa76f', 3);
  // Bandas sutiles en Urano y Neptuno
  agregarBandas('.planeta.urano', '#e0f7fa', '#3ddad7', 2);
  agregarBandas('.planeta.neptuno', '#7ec8e3', '#243b6b', 2);
})();
