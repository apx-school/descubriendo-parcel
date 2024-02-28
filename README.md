# Estructura del Proyecto

- package.json: Un archivo de configuración para el proyecto que define scripts de construcción, dependencias y metadatos del proyecto.
src/: Directorio que contiene todos los archivos fuente.
- index.html: El archivo HTML principal.
- index.css: Hoja de estilos CSS para la aplicación.
- index.ts: Archivo TypeScript principal que contiene la lógica de la aplicación.
- apx.png: Una imagen usada en la aplicación.

# Scripts 

En el archivo package.json, se definen varios scripts para facilitar el desarrollo y la construcción del proyecto:

- `npm run dev`: Inicia un servidor de desarrollo con hot-reload.
- `npm run watch`: Observa los archivos para cambios, sin iniciar un servidor.
- `npm start`: Alias para parcel, que por defecto inicia el empaquetado y servidor de desarrollo.
- `npm run build`: Compila el proyecto para producción, optimizando los archivos para un despliegue eficiente.

# Dev

- Clona el repositorio a tu máquina local.
- Ejecuta `npm install` para instalar las dependencias, incluyendo Parcel.
- Utiliza `npm run dev` para iniciar el servidor de desarrollo y abrir el proyecto en tu navegador.
