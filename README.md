# 📄 Resumen del Proyecto (1era Pre-entrega): Sistema de Liquidación de Sueldos (Payroll Simulator)

### 🎯 ¿Qué es y qué hace?

Este es un **Sistema de Liquidación de Sueldos (Payroll Simulator)**. Su objetivo es simular el proceso de gestión y cálculo de la nómina de empleados en una empresa.

El programa permite al administrador:

1.  **Ingresar Nuevos Empleados:** Mediante cuadros de diálogo interactivos (`prompt`, `confirm`), asegurando que todos los datos (sueldo, modalidad) sean válidos antes de ser almacenados.
2.  **Procesar la Nómina:** Aplicar reglas de negocio automáticas, como el cálculo de bonos por transporte (según modalidad) y la deducción de impuestos a las ganancias (sueldos altos).
3.  **Generar Reporte Global:** Mostrar la lista completa de empleados con sus sueldos netos calculados y el costo total que la empresa debe cubrir.

### ⚙️ Estructura y Funcionamiento

El simulador se ejecuta íntegramente en la Consola y los cuadros de diálogo del navegador.

* **Estructura de Datos:** Utiliza **Arrays Paralelos** para simular una base de datos de empleados, vinculando nombres, sueldos, y modalidades mediante sus índices.
* **Interacción Cíclica:** El flujo principal está controlado por un ciclo `while`, permitiendo al usuario ingresar múltiples empleados de forma secuencial antes de generar el informe final.
* **Lógica Modular:** El proyecto se divide en funciones claras para:
    * **Input:** Gestión de entrada y validación de datos.
    * **Proceso:** Función `calcularSueldoNeto` (algoritmo de cálculo).
    * **Output:** Función `generarReporteNomina` (iteración y resumen global).