EJERCICIO 1 - Prueba de Carga de Login con JMeter

REQUERIMIENTOS:
- Apache JMeter 5.6.3
- Java 11 o superior

PASOS:
1. Clonar este repositorio.
2. Tener instalado JMeter y cargar el archivo "Test_PlanBP.jmx".
3. Tener instalado ServerAgent-2.2.3 para poder visualizar los reportes
4. Asegúrate de tener el archivo "users.csv" en la misma carpeta.
5. Ejecutar el plan en modo GUI o por línea de comando:
   jmeter -n -t Test_PlanBP.jmx -l report.jtl -e -o ./report
6. Revisar el reporte generado en ./report/index.html
8. Revisar el Archivo sumary_BP

ESCENARIO:
- 20 usuarios virtuales (threads)
- 1 segundo de ramp-up
- 400 iteraciones
- 20 TPS promedio

VALIDACIONES:
- Tiempo máximo de respuesta: 1.5 segundos
- Tasa de error: <3%