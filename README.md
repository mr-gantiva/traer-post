# Traer Post

Este proyecto es una aplicación web sencilla que utiliza HTML, CSS y JavaScript para obtener y mostrar posts desde la API pública de [JSONPlaceholder](https://jsonplaceholder.typicode.com/). Los posts se presentan en una interfaz minimalista que usa el estilo de [Water.css](https://watercss.netlify.app/) y animaciones de [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/).

## Demo
Puedes ver una demo en vivo de la aplicación en [este enlace](https://mr-gantiva.github.io/traer-post/)

## Estructura del Proyecto

- **HTML**: La estructura básica de la aplicación con un botón que desencadena la solicitud de los posts.
- **CSS**: Estilo personalizado aplicado a los elementos de la lista para darle una apariencia limpia y moderna con efecto de desenfoque.
- **JavaScript**: Lógica para obtener los posts de la API y mostrarlos dinámicamente en la página con animaciones de AOS.

## Tecnologías Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Water.css**: Una hoja de estilos CSS ligera para sitios web minimalistas.
- **AOS (Animate On Scroll)**: Librería para agregar animaciones en scroll.
- **API**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para obtener datos simulados.

## Instalación y Uso

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/mr-gantiva/traer-post
   ```
2. Abre el archivo index.html en tu navegador preferido.
3. Haz clic en el botón "Traer Posts" para cargar los posts desde la API.

## Funcionamiento
Cuando el usuario presiona el botón "Traer Posts", se realiza una solicitud a la API de JSONPlaceholder para obtener un conjunto de publicaciones. Los posts se renderizan en la página y cada uno de ellos aparece con una animación de desvanecimiento hacia arriba gracias a AOS.

## Créditos
API: JSONPlaceholder
Librería CSS: Water.css
Animaciones: AOS (Animate On Scroll)

## Licencia
Este proyecto está bajo la Licencia MIT.