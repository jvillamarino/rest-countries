# Proyecto Countries REST API's

En este proyecto, he abordado el desafío de desarrollar una aplicación utilizando Next.js, específicamente utilizando App Router en lugar de Page Router para aprovechar al máximo las ventajas de la arquitectura proporcionada por Next.js. A continuación, se describen las generalidades de cómo se resolvió el reto y la estructura propuesta:

## Arquitectura Propuesta

La arquitectura propuesta para este proyecto sigue los principios de separación de preocupaciones y modularidad. A continuación, se detalla la estructura de directorios y la función de cada uno:

**src/app**: En este directorio se encuentra el punto de entrada principal de la aplicación, que incluye la configuración global, el enrutador principal y la lógica de renderizado inicial.

**src/api**: Aquí se encuentran los módulos de comunicación con el backend, en caso de que la aplicación lo requiera. Se pueden implementar servicios para realizar peticiones HTTP o conectar con otras APIs.

**src/components**: En este directorio se encuentran los componentes reutilizables de la aplicación, organizados por funcionalidad o tipo. Cada componente puede tener su propio archivo CSS o utilizar estilos globales definidos en otros lugares.

**src/models**: En este directorio, se pueden incluir definiciones de tipos de datos, interfaces o modelos que se utilizan en la aplicación para mantener una tipificación más fuerte y evitar errores.

**src/providers**: Aquí se pueden colocar los proveedores de contexto o cualquier otro tipo de proveedores que se utilicen para gestionar el estado global de la aplicación.

**src/styles**: En este directorio se encuentran los archivos CSS globales, estilos compartidos y temas de la aplicación. Se pueden utilizar herramientas como Sass o CSS-in-JS para definir los estilos.

### Generalidades de la Resolución del Reto

Para resolver el reto, he utilizado Next.js junto con la estructura de directorios mencionada anteriormente. App Router se ha empleado para crear rutas de nivel superior y así permitir un mejor manejo de las vistas y componentes de la aplicación. App Router proporciona un enrutamiento más flexible y potente, lo que resulta útil para aplicaciones más complejas.

Además, he seguido buenas prácticas de desarrollo, como la utilización de componentes reutilizables para evitar redundancias y mantener el código limpio y mantenible. También he hecho un uso adecuado de propiedades y estados para gestionar el flujo de datos y la interacción del usuario en la aplicación.

En cuanto a la estilización, he implementado **Tailwind** y utilizado CSS para definir las clases con la metodología **BEM** para darle estilo a los componentes, manteniendo una estructura modular y evitando estilos globales que puedan afectar negativamente la coherencia visual.

#### Instrucciones para Ejecutar el Proyecto

Para ejecutar el proyecto, sigue los siguientes pasos

Clona el repositorio en tu máquina local.

Asegúrate de tener Node.js y npm instalados.

Navega a la raíz del proyecto y ejecuta `npm install --save-exact` para instalar las dependencias.

Luego, ejecuta `npm run dev` para iniciar la aplicación en modo de desarrollo.

Abre tu navegador y ve a <http://localhost:3000> para ver la aplicación en funcionamiento.
