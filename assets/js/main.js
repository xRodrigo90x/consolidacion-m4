
// Sección Uno (Personajes del 1 al 5)
let seccionUno = document.getElementById("seccionUno");
let primer = document.getElementById("primer");

function* personaje1() {
  let i = 1;
  while (i <= 6) {
    yield i;
    i++;
  }
}

let perso1 = personaje1();
let personajesMostrados1 = 0; 

seccionUno.addEventListener("mouseenter", manejarMouse1);
seccionUno.addEventListener("mouseleave", manejarMouse1);

function manejarMouse1(event) {
  if (event.type === "mouseenter" && personajesMostrados1 < 5) {
    let value = perso1.next().value;
    let url = `https://swapi.dev/api/people/${value}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {        

        primer.innerHTML += `
          <div class="col-12 col-md-6 col-lg-4">
            <div class="single-timeline-content d-flex wow fadeInLeft 2021" data-wow-delay="0.3s"
                style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                <div class="timeline-icon" style="background-color: salmon;">
                  <i class="fa fa-address-card" aria-hidden="true"></i>
                </div>
                <div class="timeline-text">
                    <h6>${data.name}</h6>
                    <p>Estatura: ${data.height}cm. Peso: ${data.mass}Kg.</p>
                </div>
            </div>
          </div>
        `;

        personajesMostrados1++;

        if (personajesMostrados1 === 5) {
          seccionUno.removeEventListener("mouseenter", manejarMouse1);
        }
      })
      .catch((error) => console.error("Error al capturar datos"));
  } 
}

// Sección Dos (Personajes del 6 al 11)
let seccionDos = document.getElementById("seccionDos");
let segundo = document.getElementById("segundo");

function* personaje2() {
  let i = 6;
  while (i <= 10) {
    yield i;
    i++;
  }
}

let perso2 = personaje2();
let personajesMostrados2 = 0; 

seccionDos.addEventListener("mouseenter", manejarMouse2);
seccionDos.addEventListener("mouseleave", manejarMouse2);

function manejarMouse2(event) {
  if (event.type === "mouseenter" && personajesMostrados2 < 5) {
    let value = perso2.next().value;
    let url = `https://swapi.dev/api/people/${value}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {      

        segundo.innerHTML += `
          <div class="col-12 col-md-6 col-lg-4">
            <div class="single-timeline-content d-flex wow fadeInLeft 2021" data-wow-delay="0.3s"
                style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                <div class="timeline-icon" style="background-color: lightgreen;">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>
                <div class="timeline-text">
                    <h6>${data.name}</h6>
                    <p>Estatura: ${data.height}cm. Peso: ${data.mass}Kg.</p>
                </div>
            </div>
          </div>
        `;

        personajesMostrados2++;

        if (personajesMostrados2 === 5) {
          seccionDos.removeEventListener("mouseenter", manejarMouse2);
        }
      })
      .catch((error) => console.error("Error al capturar datos"));
  } 
}

// Sección Tres (Personajes del 12 al 17)
let seccionTres = document.getElementById("seccionTres");
let tercer = document.getElementById("tercer");

function* personaje3() {
  let i = 12;
  while (i <= 16) {
    yield i;
    i++;
  }
}

let perso3 = personaje3();
let personajesMostrados3 = 0; 

seccionTres.addEventListener("mouseenter", manejarMouse3);
seccionTres.addEventListener("mouseleave", manejarMouse3);

function manejarMouse3(event) {
  if (event.type === "mouseenter" && personajesMostrados3 < 5) {
    let value = perso3.next().value;
    let url = `https://swapi.dev/api/people/${value}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {       

        tercer.innerHTML += `
          <div class="col-12 col-md-6 col-lg-4">
            <div class="single-timeline-content d-flex wow fadeInLeft 2021" data-wow-delay="0.3s"
                style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                <div class="timeline-icon" style="background-color: lightskyblue;">
                  <i class="fa fa-id-card" aria-hidden="true"></i>
                </div>
                <div class="timeline-text">
                    <h6>${data.name}</h6>
                    <p>Estatura: ${data.height}cm. Peso: ${data.mass}Kg.</p>
                </div>
            </div>
          </div>
        `;

        personajesMostrados3++;

        if (personajesMostrados3 === 5) {
          seccionTres.removeEventListener("mouseenter", manejarMouse3);
        }
      })
      .catch((error) => console.error("Error al capturar datos"));
  } 
}