// BASE DE DATOS
let nombresEmpleados = [
  "Ana Martínez",
  "Roberto Soler",
  "Lucía Torres",
  "Julian Vega",
  "Elena Rivas",
];
let sueldosBrutos = [2500, 1800, 3200, 1550, 2900];
let modalidadTrabajo = [
  "presencial",
  "virtual",
  "híbrido",
  "presencial",
  "virtual",
];
let contratoIndefinido = [true, false, true, false, true];

// FUNCIÓN AGREGAR NUEVO EMPLEADO EN LA BASE
function ingresarNuevoEmpleado(nombre, sueldo, modalidad, tipoContrato) {
  nombresEmpleados.push(nombre);
  sueldosBrutos.push(sueldo);
  modalidadTrabajo.push(modalidad);
  contratoIndefinido.push(tipoContrato);
  return `El empleado ${nombre} fue agregado exitosamente.`;
}

// SOLICITUD DE DATOS PARA NUEVO EMPLEADO
let nuevoNombre = prompt("Ingrese el Nombre y Apellido del nuevo empleado");
let sueldoIngresado = 0;
do {
  let sueldoNumero;
  sueldoNumero = prompt(
    "Ingresa el sueldo del nuevo empleado (valor numérico mayor a 0)."
  );
  sueldoIngresado = Number(sueldoNumero);
} while (isNaN(sueldoIngresado) || sueldoIngresado <= 0);

let modalidadIngresada = "";
let validarModalidad;
do {
  validarModalidad = Number(
    prompt(
      "Digite el número que corresponda a la modalidad del nuevo empleado. \nPresencial - 1 \nVirtual - 2 \nHíbrido - 3"
    )
  );

  if (validarModalidad === 1) {
    modalidadIngresada = "presencial";
  } else if (validarModalidad === 2) {
    modalidadIngresada = "virtual";
  } else if (validarModalidad === 3) {
    modalidadIngresada = "híbrido";
  } else {
    alert("El valor ingresado es incorrecto, inténtelo nuevamente");
  }
} while (
  isNaN(validarModalidad) ||
  validarModalidad <= 0 ||
  validarModalidad > 3
);

let contratoIngresado = confirm(
  "¿El empleado tendrá contrato indefinido? \n1. Sí - Aceptar \n2. No - Cancelar"
);

alert(
  ingresarNuevoEmpleado(
    nuevoNombre,
    sueldoIngresado,
    modalidadIngresada,
    contratoIngresado
  )
);

// VALIDACION DE DATOS AGREGADOS
console.log(nombresEmpleados[nombresEmpleados.length - 1]);
console.log(sueldosBrutos[sueldosBrutos.length - 1]);
console.log(modalidadTrabajo[modalidadTrabajo.length - 1]);
console.log(contratoIndefinido[contratoIndefinido.length - 1]);

// CALCULAR SUELDO NETO ULTIMO TRABAJADOR INGRESADO
function calcularSueldoNeto(sueldo, modalidad) {
  let resultado = sueldo;
  if (resultado > 2000) {
    resultado = resultado * 0.92;
  }
  if (modalidad === "presencial") {
    resultado += 150;
  }
  if (modalidad === "híbrido") {
    resultado += 75;
  }
  return resultado;
}

// REPORTE DE NÓMINA
function generarReporteNomina() {
  let costoTotalNomina = 0;
  for (let i = 0; i < nombresEmpleados.length; i++) {
    let neto = calcularSueldoNeto(sueldosBrutos[i], modalidadTrabajo[i]);
    costoTotalNomina += neto;
    console.log(
      `- Empleado: ${nombresEmpleados[i]} | Sueldo Neto: $${neto.toFixed(2)}`
    );
  }

  console.log(`COSTO TOTAL DE NÓMINA: $${costoTotalNomina.toFixed(2)}`);
}

// SEGUIR AGREGANDO EMPLEADOS
let seguirAgregando = true;

function solicitarDatosEmpleado() {
  let nuevoNombre = prompt("Ingrese el Nombre y Apellido del nuevo empleado");
  let sueldoIngresado = 0;
  do {
    let sueldoNumero;
    sueldoNumero = prompt(
      "Ingresa el sueldo del nuevo empleado (valor numérico mayor a 0)."
    );
    sueldoIngresado = Number(sueldoNumero);
  } while (isNaN(sueldoIngresado) || sueldoIngresado <= 0);

  let modalidadIngresada = "";
  let validarModalidad;
  do {
    validarModalidad = Number(
      prompt(
        "Digite el número que corresponda a la modalidad del nuevo empleado. \nPresencial - 1 \nVirtual - 2 \nHíbrido - 3"
      )
    );

    if (validarModalidad === 1) {
      modalidadIngresada = "presencial";
    } else if (validarModalidad === 2) {
      modalidadIngresada = "virtual";
    } else if (validarModalidad === 3) {
      modalidadIngresada = "híbrido";
    } else {
      alert("El valor ingresado es incorrecto, inténtelo nuevamente");
    }
  } while (
    isNaN(validarModalidad) ||
    validarModalidad <= 0 ||
    validarModalidad > 3
  );

  let contratoIngresado = confirm(
    "¿El empleado tendrá contrato indefinido? \n1. Sí - Aceptar \n2. No - Cancelar"
  );

  alert(
    ingresarNuevoEmpleado(
      nuevoNombre,
      sueldoIngresado,
      modalidadIngresada,
      contratoIngresado
    )
  );
}

// DESEA CONTINUAR AGREGANDO
let continuar = confirm(
  "¿Desea iniciar la carga de un nuevo empleado al sistema?"
);
while (continuar) {
  solicitarDatosEmpleado();

  continuar = confirm("¿Quiere ingresar otro empleado?");
}

generarReporteNomina();
