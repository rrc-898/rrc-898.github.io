function borrarCajasHijas() {
    // Obtenemos todas las cajas hijas
    const cajasHijas = document.querySelectorAll('.caja-nueva');
    
    // Borramos cada una de las cajas hijas
    cajasHijas.forEach(caja => caja.remove());
}




function crearCalc1(event) {
    // Creamos la nueva caja
    const nuevaCaja = document.createElement('div');
    nuevaCaja.className = 'caja-nueva';
    nuevaCaja.style.left = `${event.clientX * 0 + 600}px`;
    nuevaCaja.style.top = `${event.clientY * 0 + 250}px`;
    
    // Creamos el input
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Costat';
    
    // Creamos el botón
    const boton = document.createElement('button');
    boton.textContent = 'Calcular';
    boton.onclick = function() {
      const resultado = input.value * input.value;
      labelResultado.textContent = `L'area es de ${resultado} cm^2`;
    };
    
    // Creamos el label para el resultado
    const labelResultado = document.createElement('label');
    
    // Añadimos los elementos a la caja nueva
    nuevaCaja.appendChild(input);
    nuevaCaja.appendChild(boton);
    nuevaCaja.appendChild(labelResultado);
    
    // Añadimos la nueva caja al cuerpo del documento
    document.body.appendChild(nuevaCaja);
}



function crearCalc2(event) {
    // Creamos la nueva caja
    const nuevaCaja = document.createElement('div');
    nuevaCaja.className = 'caja-nueva';
    nuevaCaja.style.left = `${event.clientX * 0 + 600}px`;
    nuevaCaja.style.top = `${event.clientY * 0 + 450}px`;
    
    // Creamos el primer input
    const input1 = document.createElement('input');
    input1.type = 'number';
    input1.placeholder = 'Base';
    
    // Creamos el segundo input
    const input2 = document.createElement('input');
    input2.type = 'number';
    input2.placeholder = 'Altura';
    
    // Creamos el botón
    const boton = document.createElement('button');
    boton.textContent = 'Calcular';
    boton.onclick = function() {
      const resultado = (parseInt(input1.value) * parseInt(input2.value)) /2;
      labelResultado.textContent = `L'area es ${resultado} cm^2`;
    };
    
    // Creamos el label para el resultado
    const labelResultado = document.createElement('label');
    
    // Añadimos los elementos a la caja nueva
    nuevaCaja.appendChild(input1);
    nuevaCaja.appendChild(input2);
    nuevaCaja.appendChild(boton);
    nuevaCaja.appendChild(labelResultado);
    
    // Añadimos la nueva caja al cuerpo del documento
    document.body.appendChild(nuevaCaja);
}



function crearCalc3(event) {
    // Creamos la nueva caja
    const nuevaCaja = document.createElement('div');
    nuevaCaja.className = 'caja-nueva';
    nuevaCaja.style.left = `${event.clientX * 0 + 600}px`;
    nuevaCaja.style.top = `${event.clientY * 0 + 650}px`;
    
    // Creamos el input
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Radi';
    
    // Creamos el botón
    const boton = document.createElement('button');
    boton.textContent = 'Calcular';
    boton.onclick = function() {
      const resultado = (input.value**2) * 3.141;
      labelResultado.textContent = `L'area es de ${resultado} cm^2`;
    };
    
    // Creamos el label para el resultado
    const labelResultado = document.createElement('label');
    
    // Añadimos los elementos a la caja nueva
    nuevaCaja.appendChild(input);
    nuevaCaja.appendChild(boton);
    nuevaCaja.appendChild(labelResultado);
    
    // Añadimos la nueva caja al cuerpo del documento
    document.body.appendChild(nuevaCaja);
}



function crearCalc4(event) {
    // Creamos la nueva caja
    const nuevaCaja = document.createElement('div');
    nuevaCaja.className = 'caja-nueva';
    nuevaCaja.style.left = `${event.clientX  * 0 + 600}px`;
    nuevaCaja.style.top = `${event.clientY *0 + 850}px`;
    
    // Creamos el primer input
    const input1 = document.createElement('input');
    input1.type = 'number';
    input1.placeholder = 'D';
    
    // Creamos el segundo input
    const input2 = document.createElement('input');
    input2.type = 'number';
    input2.placeholder = 'd';
    
    // Creamos el botón
    const boton = document.createElement('button');
    boton.textContent = 'Calcular';
    boton.onclick = function() {
      const resultado = (parseInt(input1.value) * parseInt(input2.value)) /2;
      labelResultado.textContent = `L'area es ${resultado} cm^2`;
    };
    
    // Creamos el label para el resultado
    const labelResultado = document.createElement('label');
    
    // Añadimos los elementos a la caja nueva
    nuevaCaja.appendChild(input1);
    nuevaCaja.appendChild(input2);
    nuevaCaja.appendChild(boton);
    nuevaCaja.appendChild(labelResultado);
    
    // Añadimos la nueva caja al cuerpo del documento
    document.body.appendChild(nuevaCaja);
}



function crearCalc5(event) {
    // Creamos la nueva caja
    const nuevaCaja = document.createElement('div');
    nuevaCaja.className = 'caja-nueva';
    nuevaCaja.style.left = `${event.clientX * 0 + 600}px`;
    nuevaCaja.style.top = `${event.clientY * 0 + 1100}px`;
    
    
    // Creamos el primer input
    const input1 = document.createElement('input');
    input1.type = 'number';
    input1.placeholder = 'B';
    
    // Creamos el segundo input
    const input2 = document.createElement('input');
    input2.type = 'number';
    input2.placeholder = 'b';

    // Creamos el segundo input
    const input3 = document.createElement('input');
    input3.type = 'number';
    input3.placeholder = 'h';
    
    // Creamos el botón
    const boton = document.createElement('button');
    boton.textContent = 'Calcular';
    boton.onclick = function() {
      const resultado = ((parseInt(input1.value) + parseInt(input2.value)) /2) * parseInt(input3.value);
      labelResultado.textContent = `L'area es ${resultado} cm^2`;
    };
    
    // Creamos el label para el resultado
    const labelResultado = document.createElement('label');
    
    // Añadimos los elementos a la caja nueva
    nuevaCaja.appendChild(input1);
    nuevaCaja.appendChild(input2);
    nuevaCaja.appendChild(input3);
    nuevaCaja.appendChild(boton);
    nuevaCaja.appendChild(labelResultado);
    
    // Añadimos la nueva caja al cuerpo del documento
    document.body.appendChild(nuevaCaja);
}