# BlogUI App
Una aplicación Javascript Fullstack. Se trata de un gestor de contenidos simplicado (inicialmente un blog) creado con la intención de aprender y poner en practica conocimientos de programación. 

Para ver el live demo -> [https://frontend-blogui.vercel.app/](https://frontend-blogui.vercel.app/)
![Demo de la aplicación GIF][demo]

## Funcionalidad y Caracteristicas
- El usuario puede ver todos los posts creados por los usuarios (solo los posts publicados).
- El usuario puede navegar por las distintas categorias.
- Los usuarios pueden ingresar al sistema por medio de sus credenciales.
- El usuario registrado puede ver sus posts publicados como asi tambien sus borradores.
- El usuario registrado puede crear nuevos Posts. Como asi tambien Editar y Borrar.
- Se implemento una funcionalidad para limitar las acciones de creacion de posts, edicion y borrado (temporalmente hasta completar el proyecto).
- **Responsive Design**: El sitio se implemento siguiendo el diseño Mobile First.

## Observaciones
Para evitar problemas con contenidos inapropiados y dado que solo se trata de una aplicación para exponer conocimiento, he limitado algunas funcionalidades:
- El registro de usuario no esta implementado.
- Tengo habilitado una cuenta para **recruiters**. **Si sos recruiter y te envié mi CV, revisa al final del mismo**.
- Para evitar problemas, la aplicación no carga imagenes (creacion de Post) sino que escoge una imagen aleatoria ya registrada en el sistema.
- El usuario tiene un limite de 2 posts por dia, por el momento se encuentra deshabilitado la capacidad de editar y borrar.
- En el futuro seguire incorporando más funcionalidad.
- Se trata de una aplicacion Fullstack, [aqui puedes ver el backend](https://github.com/pabcha/backend-blogui)

## Stack tecnológico

- [Node 14.15.0][node]
- [NPM 6.14.5][node]
- [Angular 11.1][angular]
- [Angular CLI][cli]
- [Vercel][vercel]
 
[Stack tecnológico del backend](https://github.com/pabcha/backend-blogui)

[cli]: https://cli.angular.io/
[angular]: https://angular.io/
[node]: https://nodejs.org/
[vercel]: https://vercel.com

## Instalación
```sh
$ git clone https://github.com/pabcha/frontend-blogui.git
$ cd frontend-blogui
$ npm install
```
Modificar `apiURL` del archivo `src/environments/environment.ts` con la URL del backend.
```sh
$ ng serve
```

En el navegador ir a http://localhost:4200

[demo]: src/assets/img/blogui-cover.gif
