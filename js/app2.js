var preguntas=[
        "¿Quiènes deben cuidar el medio ambiente?",
        "Cuales son las 3 R's",
        "Cuando es el dia mundial del medio ambiente",
        "Como puedo cuidar el medio ambiente",
        "¿Qué es el calentamiento global?",
        "¿Qué es el reciclaje?",
        "¿Qué cosas se puede reciclar?",
        "Que pasaria si no cuido el medio ambiente",
        "Que opciones contaminan el ambiente ",
        "¿Esta bien botar la basura en cualquier parte?",
        "¿Qué puedes hacer con material reciclado de cartón?",
        "¿Cómo puedes ayudas al planeta?",
        "¿Qué debes hacer si una llave de agua  está abierta?",
        "¿Cómo clasificar los desechos reutilizables?",
        "¿Por qué crees que el planeta se está destruyendo?",
        "¿Cómo evitar que se agote el agua?",
        "¿Qué harias para ayudar a que contaminación del planeta termine?",
        "¿Crees que está bien la talar de árboles?",
        "¿Cuánto se demora en descomponer los desechos plásticos?"
];
var respuestas=[
        ["todos","Los demas","Yo"],
        ["Reciclar, Reducir,Reutilizar","Rehuir, Rehusar, Rechazar","Reutilizar, Rehusar, Rechazar"],
        ["5 de junio","22 de abril","17 de mayo"],
        ["Reciclando","Botando basura en cualquier lugar","No separar la basura"],
        ["Aumento de temperatura del sistema climático","Disminución de temperatura del sistema climático","El clima del dia"],
        ["Convertir desechos en cosas nuevas","Botar todo","Hacer nada"],
        ["Espejos","servilletas sucias","revistas"],
        ["Nos quedamos sin casa","Nacen nuevas especies","Florecen nuevos arboles"],
        ["Utilizar aerosoles","Utilizar fundas biodegradables","Reciclar"],
        ["no","si","tal vez"],
        ["Diferentes figuras","Moldes","Botarlos"],
        ["Sembrando arboles","Tirando basura", "Quemando los bosques"],
        ["Cerrar la llave ","Dejarlo así","Jugar con el  agua"],
        ["Clasificando en diferentes tachos de basura dependiendo del desecho","Talando  los arboles", "Quemándolos"],
        ["Porque nosotros la contaminamos","Siembra de bosques","Recogemos basura"],
        ["No malgastándola","Abriendo la llave","Tirando  basura"],
        ["Cuidándola, protegiéndola  y no contaminándola","Quemar los arboles","Contaminado el aire"],
        ["Si por cuidados al planeta","No porque dañas al planeta","Quien sabe"],
        ["150 años","Un año","Un mes"]
];
jugar();

       var index_respuesta_correcta;

function jugar(){
          var i_aleatorio = Math.floor(Math.random()*preguntas.length);

    var respuestas_elegir = respuestas[i_aleatorio];

    var ubicaciones = [0,1,2];
    var resp_ordenadas = [];
    var opcion = false;
    //var index_respuesta_correcta;
    for(i in respuestas_elegir){
       var pos_aleatoria = Math.floor(Math.random()*ubicaciones.length);
       if (pos_aleatoria==0 && opcion == false){
          index_respuesta_correcta =i;
          opcion = true;
    }
    resp_ordenadas[i] = respuestas_elegir[ubicaciones[pos_aleatoria]];
    ubicaciones.splice(pos_aleatoria, 1);
    }

    //var r_posibles = respuestas[i_aleatorio];
    var txt_resp="";
    for(i in resp_ordenadas){
        txt_resp += '<input type="radio" name="pp" value="'+i+'"><label>'+resp_ordenadas[i]+'</label><br>';
        
    }
   
    document.getElementById("respuestas").innerHTML = txt_resp;
    document.getElementById("pregunta").innerHTML = preguntas[i_aleatorio];
    
   }    
    
 
function comprobar(){
  var respuesta = $("input[type=radio]:checked").val();
  if(respuesta ==index_respuesta_correcta){
      alert("acertaste");
         
  }else{
    alert("uhh esa no es la correcta");      
    
    }
   
   
    
   jugar(comprobar);
}




