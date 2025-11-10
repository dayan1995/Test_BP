Tener instalado node.js
Tener instlado npm
Tener instalado visual studio
Ir a la ruta del proyecto prueba técnica dayan cherrez 
C:..\..\..\Test_Cypress\TestAutomation
Tener instalado cypress
Ejecutar esta linea de comando npx cypress open
Se abrira una ventana seleccionar E2E
Seleccionar navegador preferencia Edge, electron, chrome o firefox  
Seleccionar start
En la carpeta E2E seleccionar el script que se desea probar
ruta "cypress\e2e\"
Prueba_Automatización_E2E.cy.js
Prueba_API.cy

En la siguiente ruta se encuntra un archivo html con los resultados de la pruebas ejecutada mediante linea comando:
C:\...\...\...\Test_Cypress\TestAutomation\cypress\reports
Si se desea probar por linea de comando ejecutar : npx cypress run

Observacion
Durante la validación del producto destacado en la prueba de API, se identificó una inconsistencia en el enunciado del ejercicio. Aunque el requerimiento menciona que el producto estrella corresponde al id 10, al analizar la respuesta real del servicio se comprobó que el producto que cumple con las características esperadas (rate: 4.8, categoría: electronics, y el título correcto) es en realidad el de id 11.
Por tanto, la validación se ajustó para verificar el producto con id 11, que coincide con los datos reales de la API.

Adicionalmente, en el test de automatización end-to-end (TestAutomation e2e) se comprobó que el flujo automatizado funciona correctamente en todos los navegadores evaluados, garantizando así la consistencia y estabilidad del comportamiento de la aplicación en distintos entornos.