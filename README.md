# Práctica Github Actions

![Actions Image](gh_pages_media/github-action-01.png)

## Qué es Github Actions?

Github actions es una nueva forma que nos ofrece Github de automatizar la ejecución de código en nuestro repositorio. Nos permiten automatizar tareas dentro del ciclo de vida del desarrollo de software. Pueden basarse en JavaScript o Docker, pero JavaScript suele presentar menos problemas. Las Actions son ejecutadas por workflows, y pueden realziar cualquier tarea que deseemos, por ejemplo, nos puede ejecutar todos los tests y avisarnos en caso que alguno, realizar deploy en servidores externos, etc. Una acción basada en JS, consta de un fichero .YML, un package.json y el codigo necesario de JavaScript.

![Actions Structure Image](gh_pages_media/folders_action.png)

Github dispone de su propia MarketPlace para publicar Actions realizadas por otros programadores: https://github.com/marketplace?type=actions
Para ejecutarla, necesitaremos un Workflow para indicar que se ejecute al realizar una determinada acción en nuestro repositorio, por ejemplo, un push.

## Qué es Github Workflows?

Un workflow o un flujo de trabajo en github, son ficheros que ejecutan cuando realicemos la acción indicada en el mismo fichero, por ejemplo, al realizar un push a una rama específica. Estos ficheros constan de diferents Jobs, cada job puede ejecutar un Action diferente, ya sea propia o no, o simplemente, ejecutar un job con diferentes steps sin necesidad de llamar a un Action.

![Actions Structure Image](gh_pages_media/workflow_diagram.png)

## Qué es NCC/Vercel?

Vercel es un compilador para Node.JS, el cual nos implementará en un mismo fichero todo el código junto a todas las dependencias del mismo, para poder desplegar-lo facilmente en diferentes plataformas. Utilizamos Vercel para compilar nuestra Action con el comando:
```
$ ncc build input.js -o dist
```

## Qué es Surge.sh?

Surge es una herramienta que nos permite publicar nuestra aplicación web estática en Internet de forma GRATUITA con un simple comando. 

```
$ surge
```

Nos pedirá un email y contraseña, y un nombre para el dominio, el cual será nombre.surge.sh, y en cuestión de segundos tendremos nuestra página web desplegada en internet con un solo comando.

## Qué es Nodemailer?

Nodemailer es un libreria para aplicaciones Node.JS que permite enviar facilmente correos electronicos mediante JavaScript. Utilizando esta libreria, hemos creado un Action para notificar a los usuarios por correo electronico que se ha realziado un commit en la rama indicada.

## Qué es Eslint?

![Actions Structure Image](gh_pages_media/Eslint.png)

Eslint es un linter, es decir, un correcor de código, que examina el codigo de JavaScript para determinar que cumpla ciertos estándares y estilos, favoreciendo de esta forma la escritura de código de calidad. Podemos configurarlo a nuestro gusto mediante un fichero de configuración, de esta manera, todo el equipo de trabajo puede mantener la misma estructura de código.



