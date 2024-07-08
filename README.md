# AluraFlix

![AluraGeek](/public/img/footer.png)

AluraFlix es una aplicación web construida con React, diseñada como un proyecto de desafío donde el objetivo es crear una plataforma para gestionar videos de YouTube. La aplicación permite crear, visualizar, editar y eliminar videos; y los datos se son manejados a traves de un servidor local.

## Características Principales

- **Carga de Videos**: Permite a los usuarios agregar nuevo video mediante un formulario.
- **Métodos de API**: Utiliza los métodos _GET_, _POST_, _DELETE_ y _PUT_ para gestionar los videos.
- **Alertas**: Incluye alertas de confirmación y advertencias.

## Tecnologías Utilizadas

- HTML5 y CSS3
- [React Js](https://react.dev/)
- [json-server](https://github.com/typicode/json-server) para simular una API RESTful
- [SweetAlert2](https://sweetalert2.github.io/) y [Chakra UI](https://v2.chakra-ui.com) para alertas personalizadas

## Instalación y Uso

Clonar el repositorio, instala la dependencia a nivel de proyecto.

```bash
git clone https://github.com/anyeldev/alura-flix.git
```

```bash
cd alura-flix
```

```bash
pnpm install
```

- **Corre el proyecto usando pnpm 🚀**

```bash
pnpm run dev
```

- _Se inicializa el proyecto usando [concurrently](https://github.com/open-cli-tools/concurrently#readme), similar a:_ `pnpm run dev` y `json-server --watch src/db.json`

## Contribuir

¡Estamos abiertos a contribuciones! Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commits (`git commit -am 'Agrega nueva funcionalidad'`)
4. Sube tus cambios a tu repositorio (push to the branch) (`git push origin feature/nueva-funcionalidad`)
5. Crea un nuevo Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, revisa el archivo [LICENSE](LICENSE).
