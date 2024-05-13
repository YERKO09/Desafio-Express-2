# Mi Repertorio
    Desafío 2, Introducción a Express

## Detalles
* APP hecha en **commonJS**.
* El puerto usado es el 3000, pero en este caso usé variables de entorno
    * Instalar dotenv: <code>npm i dotenv</code>
    * Crear archivo .env en la raíz del proyecto y dentro crear la variable de entorno PORT = 3000
    * Con esto debería funcionar, o también se puede reemplazar la línea 7 del index.js principal por esta: 
    <code>app.listen(3000, console.log(`Server running on port http://127.0.0.1:3000`));</code>
* Se pueden editar la canción completa, es decir, todos los campos
