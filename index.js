// Se inicializa el tamaño original 
document.getElementById("size_info").textContent += "16x16";

// Genera 256/divs y les asigna clase, Id, y BackgroundColor
for (i = 0; i < 256; i++) {
  let btn = document.createElement("div");
  btn.setAttribute("id", "Div"+i);
  btn.setAttribute("class", "Div_class");
  document.getElementById("square").appendChild(btn);
}


// Generar colores aletorios
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// Funcion para el modo de color en escala de grises. Debe ser declarada antes 
function gray_scale() {
  let elements = document.querySelectorAll(".Div_class");

  elements.forEach(element => {
        let contador_g = 1

      element.addEventListener('mouseover', (e)=>{

        if (contador_g == 1){
          element.style.backgroundColor = "#EEEEEE";
          contador_g = 2;
        }  else if (contador_g == 2){
          element.style.backgroundColor = " #CCCCCC";
          contador_g = 3;
        } else if (contador_g == 3){
          element.style.backgroundColor = "#999999";
          contador_g = 4;
        } else if (contador_g == 4){
          element.style.backgroundColor = "#666666";
          contador_g = 5;
        } else if (contador_g == 5){
          element.style.backgroundColor = "#333333";
          contador_g = 6;
        } else if (contador_g == 6){
          element.style.backgroundColor = " #000000";
        }

    });
  }); 
}

// Funcion encargada de controlar el contador de los estados de colores, y el background de los botones
var contador = 1;
function color_mode(color_state){
  if (color_state == 3){
    document.getElementById("rainbow").style.background = "linear-gradient(to right, blue , cyan, green, yellow, orange, red)";
    document.getElementById("gray_scale").style.background = "#5294bd";
    document.getElementById("normal_mode").style.background = "#5294bd";
    document.getElementById("erase").style.background = "#5294bd";

    contador = 3;
    return contador;

  } else if (color_state == 2) {
    document.getElementById("rainbow").style.background = "#5294bd";
    document.getElementById("gray_scale").style.background = "#203b4b";
    document.getElementById("normal_mode").style.background = "#5294bd";
    document.getElementById("erase").style.background = "#5294bd";

    contador = 2;
    return contador;

  } else if (color_state == 1){
    document.getElementById("rainbow").style.background = "#5294bd";
    document.getElementById("gray_scale").style.background = "#5294bd";
    document.getElementById("normal_mode").style.background = "#203b4b";
    document.getElementById("erase").style.background = "#5294bd";
    
    contador = 1;
    return contador; 
  
  } else if (color_state == 4){
    document.getElementById("rainbow").style.background = "#5294bd";
    document.getElementById("gray_scale").style.background = "#5294bd";
    document.getElementById("normal_mode").style.background = "#5294bd";
    document.getElementById("erase").style.background = "#203b4b";
   
    contador = 4;
    return contador;

  }

}

// Funcion para escoger color 
function color_pick() {
  var theInput = document.getElementById("color_pick");
  var theColor = theInput.value; 
  return theColor;
}

// Efecto cambio de color 
function hover_efect() {
  // Genera un array con los 256/divs 
  let elements = document.querySelectorAll(".Div_class");
  // Ciclo que recorre array y añade Hover con su respectivo cambio de color 
  elements.forEach(element => {
    // Variable para calcular la escala de grises
    let contador_g = 1

     element.addEventListener('mouseover', (e)=>{

      if (contador == 1){
        element.style.backgroundColor = color_pick();
      } else if (contador == 3){
        element.style.backgroundColor = getRandomColor();
      } else if (contador == 4){
        element.style.backgroundColor = "white";
      } else if (contador == 2){
        
        if (contador_g == 1){
          element.style.backgroundColor = "#EEEEEE";
          contador_g = 2;
        }  else if (contador_g == 2){
          element.style.backgroundColor = " #CCCCCC";
          contador_g = 3;
        } else if (contador_g == 3){
          element.style.backgroundColor = "#999999";
          contador_g = 4;
        } else if (contador_g == 4){
          element.style.backgroundColor = "#666666";
          contador_g = 5;
        } else if (contador_g == 5){
          element.style.backgroundColor = "#333333";
          contador_g = 6;
        } else if (contador_g == 6){
          element.style.backgroundColor = " #000000";
        }
      }

     });
  });  
}
// Se llama la funcion para el estado inicial de programa
hover_efect();

// Reinicia el color en la cuadricula 
function clear_surface() {
  let elements = document.querySelectorAll(".Div_class");

  elements.forEach(element => {
     element.style.backgroundColor = "white";
});
}


// Cambiar tamaño de la cuadricula 
function change_surface(surface_size) {

    
    // Cambio de informacion surface size
    document.getElementById("size_info").innerHTML = "";
    document.getElementById("size_info").textContent += "Size: " + surface_size + "x" + surface_size;
    

    // Primero eliminamos los elementos existentes
    let contenedor = document.getElementById("square");
      while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }

    //Calcula cantidad de elementos en la nueva superficie
    let surface_elements = surface_size*surface_size

    // Se calculan elementos con la nueva superficie
    for (i = 0; i < surface_elements; i++) {
      let btn = document.createElement("div");
      btn.setAttribute("id", "Div"+i);
      btn.setAttribute("class", "Div_class");
      document.getElementById("square").appendChild(btn);
    }

    // Cambiar tamaño grid 
    let contenedoor = document.getElementById("square");
    contenedoor.style.gridTemplateColumns = "repeat("+surface_size+", 1fr)";
    contenedoor.style.gridTemplateRows = "repeat("+surface_size+", 1fr)";

    // Es necesario llamar la funcion con el efecto hover de nuevo
    hover_efect();

  
}


// Controlador del input tipo range, encargado de llamar a la función
let range_input = document.getElementById('range_size')

range_input.addEventListener('input', (e) => {
    let actual_size = e.srcElement.value
    console.log(actual_size);
    change_surface(actual_size)

})

// Estilizar color picker
let color_picker = document.getElementById("color_pick");
let color_picker_wrapper = document.getElementById("test_wrapper");

color_picker.onchange = function() {
  color_picker_wrapper.style.background = color_picker.value;
}
