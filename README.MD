# Server with Class

Este es un proyecto de servidor construido con NodeJS y cliente con Angular 

modelado: https://lucid.app/lucidchart/2a1ba874-5345-4544-9ffb-4de79b180568/edit?viewport_loc=-270%2C-93%2C3330%2C1587%2C0_0&invitationId=inv_6b16e838-dbfd-42a3-bc69-6a0612e7e9c7:

Datos generados con la libreria chance generando millones de registros en una instancia RDS:
 Host: prueba-2.cfqsqwla4cyj.us-east-1.rds.amazonaws.com
 User: postgres
 Password: password1!
 dataBase: prueba-tecnica

Usando las librerias:
- 
- chance: v1.1.9
- cors: v2.8.5
- dotenv: v16.0.1
- express: v4.18.1
- morgan: v1.10.0
- pg: v8.8.0
- sequelize: v6.25.5
- ng2-charts: v4.1.1

## Instalación

1. Clona el repositorio en tu máquina local.
2. Instala las dependencias del proyecto ejecutando `npm install` en la terminal.
3. Crea un archivo `.env` en la raíz del proyecto y define las variables de entorno necesarias.
4. Inicia el servidor con `npm run start` o `npm run dev` para iniciar en modo desarrollo.

## Uso

El servidor está listo para recibir y responder a solicitudes HTTP y mostrar una grafica con filtro por año y distrito en el puerto 3000. 
