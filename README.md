# prueba-tecnica-2023-03

## Requerimiento:
*Usted tiene un tanque de X Cm3 en el cual debe ir agregando cantidades por medio
de 3 cajas de texto:

    - 1 ingreso en centímetros cúbicos.
    - 2 ingreso en litros.
    - 3 ingreso en milímetros cúbicos.

*El tanque debe ir mostrando su capacidad y sin uso de un post permitirnos ver el
movimiento del agua y su medida en cantidad dentro de él.

*La capacidad en Cm3 debe ser modificable.

*Cada modificación de capacidad total y/o de cantidad dentro del tanque, debe ser
registrado en una base de datos (el motor y tipo de base de datos es de su elección).

## Desarrollo: 

### Front

Para el front generamos una unica vista, en donde podemos ver los campos, dos botones de accion y el tanque, para poder interactuar con el, debemos cargar la informacion que queramos en los imputs, posteriormente le damos a guardar, esto genera que en la base de datos se guarde la consulta y asi mismo, podemos usar el boton de historial para mostrar una tabla con los envios previos.

### Backend

Para el back se hizo una rest api sencilla con dos simples acciones, guardar y consultar, centrado en el historial generado para el aplicativo, se utilizo el motor de base de datos MongoDB para facilitar el uso en cualquier computador, para iniciarlo es necesario tener instalado mongoDB en la maquina de forma local y corriendo, con esto una vez que se tenga el front ejecutando y el back tambien, automaticamente se generara la base de datos waterTankHistory con la tabla history.

## Comandos para ejecutar (Windows)

Desde la carpeta raiz del proyecto abrimos dos terminales, una en la carpeta database y la otra en la carpeta water-tank. 

### database
En esta ejecutamos el comando npm start y esperamos la respuesta 'server on port 4000' y 'Database is conected' con esto nos aseguramos el puerto en que esta conectado y que la base de datos mongo esta de forma local y tiene acceso

### water-tank
En esta ejecutamos el comando npm start y esperamos que el servidor cargue, de forma predeterminada carga en el servidor 3000 y abrira automaticamente la vista 



