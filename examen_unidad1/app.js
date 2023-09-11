import { apiData } from "./components/data.js";

const containerCard = document.getElementById('containerCard');

apiData.forEach(({id,personal_info: {address,phone_number,zipcode},employee_name,employee_salary,employee_age,image:{profile_image,description}}) => {

    console.log(`Id: ${id}`);
    //console.log(`Información personal: ${personal_info}`);
    console.log(`Dirección: ${address}`);
    console.log(`Numero de telefono: ${phone_number}`);
    console.log(`Código Zip: ${zipcode}`);
    console.log(`Nombre de empleado: ${employee_name}`);
    console.log(`Salario de empleo: ${employee_salary}`);
    console.log(`Edad de empleado: ${employee_age}`);
    console.log(`Imagen: ${profile_image}`);
    console.log(`Descripción: ${description}`)

    const tarjeta = document.createElement('div');
    tarjeta.classList.add("personalCard");

    const imagen = document.createElement('img');
    imagen.src = profile_image;

    const nombre = document.createElement('p');
    nombre.textContent = employee_name;

    const edad = document.createElement('li');
    edad.textContent = (`Edad: ${employee_age}`);

    const telefono = document.createElement('li');
    telefono.textContent = (`Telefono: ${phone_number}`);

    const salario = document.createElement('li');
    salario.textContent = (`Sueldo: $${employee_salary}`);

    const direccion = document.createElement('li');
    direccion.textContent = (`Dirección: ${address}`)

    const zipcode1 = document.createElement('li');
    zipcode1.textContent = (`Código Postal: ${zipcode}`)


    tarjeta.appendChild(nombre);
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(direccion);
    tarjeta.appendChild(telefono);
    tarjeta.appendChild(edad);
    tarjeta.appendChild(salario);
    tarjeta.appendChild(zipcode1);

    containerCard.appendChild(tarjeta);



});

//console.log(alumnos[0].nombre)