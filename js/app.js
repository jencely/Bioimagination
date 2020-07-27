
  // Funciones
  function trivia(){
        let output = [];

    preguntas.forEach(
      (pregunta, numeroPregunta) => {
        let respuestas = [];        
        for(letra in pregunta.respuestas){       
          respuestas.push(
            `<label>
              <input type="radio" name="question${numeroPregunta}" value="${letra}">
              ${letra} :
              ${pregunta.respuestas[letra]}
            </label>`
          );
        }
        output.push(
          `<div class="slide">
            <div class="pregunta"> ${pregunta.respuestas.pregunta} </div>
            <div class="respuestas"> ${respuestas.join("")} </div>
          </div>`
        );
      }
    );
    triviaContainer.innerHTML = output.join('');
  }

  function mostrar_resultados(){

    let respuestasContainers = triviaContainer.querySelectorAll('.respuestas');
    let num_correcto = 0;
    preguntas.forEach( (pregunta, numeroPregunta) => {

      let respuestasContainer = respuestasContainers[numero_pregunta];
      let seleccion = `input[name=question${numero_pregunta}]:checked`;
      let respuesta_usar = (respuestasContainer.querySelector(seleccion) || {}).value;

      // if answer is correct
      if(respuesta_usar === pregunta.respuesta_correcta){
        // add to the number of correct answers
        num_correcto++;

        // color the answers green
        respuestasContainers[numeroPregunta].style.color = 'verde';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        respuestasContainers[numeroPregunta].style.color = 'rojo';
      }
    });

    // show number of correct answers out of total
    resultadosContainer.innerHTML = `${num_correcto} out of ${preguntas.length}`;
  }

  function mostrar_s(n) {
    pag[pag_act].classList.remove('activar');
    slides[n].classList.add('activar');
    pag_act = n;
    if(pag_act === 0){
      anteiorButton.style.display = 'none';
    }
    else{
      anteriorButton.style.display = 'inline-block';
    }
    if(pag_act === slides.length-1){
      siguienteButton.style.display = 'none';
      enviarButton.style.display = 'inline-block';
    }
    else{
      siguienteButton.style.display = 'inline-block';
      enviarButton.style.display = 'none';
    }
  }

  function mostrar_siguiente() {
    mostrar_s(pag_act + 1);
  }

  function mostrar_anterior() {
    mostrar_s(pag_act - 1);
  }

  var triviaContainer = document.getElementById('trivia');
  var resultadosContainer = document.getElementById('resultado');
  var enviarButton = document.getElementById('comprobar');
  var preguntas = [
    {
      pregunta: "¿Quienes deben cuidar el medio ambiente?",
      respuestas: {
        a: "Yo",
        b: "Los demas",
        c: "Todo el mundo"
      },
      respuesta_correcta: "c"
    },
    {
        pregunta: "Cuales son las 3 R's",
        respuestas: {
          a: "Reciclar, Reducir,Reutilizar",
          b: "Rehuir, Rehusar, Rechazar",
          c: "Reutilizar, Rehusar, Rechazar"
        },
        respuesta_correcta: "a"
    },
    {
        pregunta: "Cuales son las 3 R's",
        respuestas: {
          a: "Reciclar, Reducir,Reutilizar",
          b: "Rehuir, Rehusar, Rechazar",
          c: "Reutilizar, Rehusar, Rechazar"
        },
        respuesta_correcta: "a"
    },
    {
        pregunta: "Cuales son las 3 R's",
        respuestas: {
          a: "Reciclar, Reducir,Reutilizar",
          b: "Rehuir, Rehusar, Rechazar",
          c: "Reutilizar, Rehusar, Rechazar"
        },
        respuesta_correcta: "a"
    },
    {
        pregunta: "Cuando es el dia mundial del medio ambiente",
        respuestas: {
          a: "5 de junio",
          b: "22 de abril",
          c: "17 de mayo"
        },
        respuesta_correcta: "a"
    },
    {
        pregunta: "Como puedo cuidar el medio ambiente",
        respuestas: {
          a: "Reciclando",
          b: "Botando basura en cualquier lugar",
          c: "No separar la basura"
        },
        respuesta_correcta: "a"
    },
    {
        pregunta: "Qué cosas se puede reciclar",
        respuestas: {
          a: "Espejos",
          b: "servilletas sucias",
          c: "revistas"
        },
        respuesta_correcta: "c"
    },
    {
        pregunta: "¿Qué es el reciclaje?",
        respuestas: {
          a: "Convertir desechos en cosas nuevas",
          b: "Botar todo",
          c: "Hacer nada"
        },
        respuesta_correcta: "a"
    },
    {
        pregunta: "Que opcion contaminan el ambiente",
        respuestas: {
          a: "Utilizar fundas biodegradables",
          b: "Utilizar aerosoles",
          c: "Reciclar"
        },
        respuesta_correcta: "b"
    }
  ];

  trivia();

  var anteriorButton = document.getElementById("anterior");
  var siguienteButton = document.getElementById("siguiente");
  var slides = document.querySelectorAll(".slide");
  let pag_act = 0;

  mostrar_s(pag_act);

  enviarButton.addEventListener('click', mostrar_resultados);
  anteriorButton.addEventListener("click", mostrar_anterior);
  siguienteButton.addEventListener("click", mostrar_siguiente);

<div class="trivia-container">
      <div id="trivia"></div>
    </div>
    <button id="anterior">Pregunta anterior</button>
    <button id="siguiente">Siguiente pregunta</button>
    <button id="enviar">Comprobar</button>
    <div id="resultado"></div>
    <script src="js/app.js"></script>