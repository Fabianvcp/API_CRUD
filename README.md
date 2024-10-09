
# Descripción

Esta API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre productos en una base de datos MongoDB. Los usuarios pueden listar todos los productos sin autenticación, mientras que las operaciones de creación, actualización y eliminación requieren un token JWT.

# Requisitos

- **Node.js** (v20.18.0 o superior)
    
- **npm** (Node Package Manager)
    
- **MongoDB** (MongoDB Atlas)
    
- **Postman** (para probar la API)
    

# Instalación y Configuración

## 1\. Clonar el repositorio

``` git
git clone https://github.com/Fabianvcp/API_CRUD.git
cd crud_api
 ```

## 2\. Instalar dependencias  
Ejecuta el siguiente comando para instalar las dependencias necesarias:

``` Bash
npm install
 ```

## 3\. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto y añade lo siguiente:

``` JavaScript
PORT=5000
MONGO_URI=mongodb+srv://<USUARIO>:CONTRASEÑA>@<CLUSTER_URL>/<NOMBRE_BASE_DATOS>?retryWrites=true&w=majority
JWT_SECRET=tu_clave_secreta_jwt
 ```
Reemplaza `<USUARIO>`, `<CONTRASEÑA>`, `<CLUSTER_URL>`, y `<NOMBRE_BASE_DATOS>` con tus credenciales de MongoDB.
## 4\. Iniciar la aplicación
Ejecuta el siguiente comando para iniciar la aplicación:
``` bash
npm start
 ```
La API estará disponible en http://localhost:5000.

# Rutas Disponibles

### 1. **Autenticación**
#### **Login**
-   **Método:** `POST`
-   **Ruta:** `/api/users/login`
-   **Cuerpo de la solicitud:**
```json
{
    "email": "test@gmail.com",
    "password": "root"
}
```
-   **Respuesta exitosa:**
```json
{
	"token": "tu_token_jwt_aquí"
}
```
## 2. **Productos**

#### **Listar todos los productos**

-   **Método:** `GET`
    
-   **Ruta:** `/api/products`
    
-   **Descripción:** No requiere autenticación.
    
-   **Respuesta exitosa:**
```json
[
    {
        "_id": "6706951a272dcf0115261010",
        "name": "Gaseosa Coca Cola",
        "price": 100,
        "description": "Este es un producto de ejemplo",
        "createdAt": "2024-10-09T14:37:14.126Z",
        "__v": 0
    },
    ...
]
```
### **Crear un nuevo producto**

-   **Método:** `POST`
    
-   **Ruta:** `/api/products`
    
-   **Descripción:** Requiere autenticación.
    
-   **Cuerpo de la solicitud:**
```json
	{
    "name": "Gaseosa Coca Cola",
    "price": 100,
    "description": "Este es un producto de ejemplo"
	}
```
-   **Respuesta exitosa:**
```json
{
    "_id": "6706951a272dcf0115261011",
    "name": "Gaseosa Coca Cola",
    "price": 100,
    "description": "Este es un producto de ejemplo",
    "createdAt": "2024-10-09T14:37:14.126Z",
    "__v": 0
}
```
### **Crear varios nuevos productos**

-   **Método:** `POST`
    
-   **Ruta:** `/api/products/several`
    
-   **Descripción:** Requiere autenticación.
    
-   **Cuerpo de la solicitud:**
```json
[
    {
        "_id": "6706951a272dcf0115261010",
        "name": "Gaseosa Coca Cola",
        "price": 100,
        "description": "Este es un producto de ejemplo"
        "__v": 0
    },
    ...
]
```
-   **Respuesta exitosa:**
```json
[
    {
        "_id": "6706951a272dcf0115261010",
        "name": "Gaseosa Coca Cola",
        "price": 100,
        "description": "Este es un producto de ejemplo",
        "createdAt": "2024-10-09T14:37:14.126Z",
        "__v": 0
    },
    ...
]
```
### **Actualizar un producto existente**

-   **Método:** `PUT`
    
-   **Ruta:** `/api/products/:id`
    
-   **Descripción:** Requiere autenticación.
    
-   **Cuerpo de la solicitud:**
```json
{
    "name": "Gaseosa Coca Cola",
    "price": 120,
    "description": "Producto actualizado"
}

```
-   **Respuesta exitosa:**
```json
{
    "_id": "6706951a272dcf0115261010",
    "name": "Gaseosa Coca Cola",
    "price": 120,
    "description": "Producto actualizado",
    "createdAt": "2024-10-09T14:37:14.126Z",
    "__v": 0
}

```

### **Eliminar un producto**

-   **Método:** `DELETE`
    
-   **Ruta:** `/api/products/:id`
    
-   **Descripción:** Requiere autenticación.
    
-   **Respuesta exitosa:**
``` json
	{ 
		"message": "Producto eliminado" 
	}
```
## Ejemplo de Uso en Postman

### 1. **Login**

1.  Crear una nueva solicitud en Postman.
2.  Configurar como `POST` a `http://localhost:5000/api/users/login`.
3.  En la pestaña **Body**, seleccionar **raw** y tipo **JSON**.
4.  Ingresar las credenciales:

```json
{
    "email": "user@example.com",
    "password": "password123"
}
```
5.  Enviar la solicitud y guardar el `token` recibido.

### 2. **Crear un Producto**

1.  Crear una nueva solicitud en Postman.
2.  Configurar como `POST` a `http://localhost:5000/api/products`.
3.  En la pestaña **Headers**, agregar:
    -   **Key:** `Authorization`
    -   **Value:** `Bearer <tu_token_jwt_aquí>`
4.  En la pestaña **Body**, seleccionar **raw** y tipo **JSON**.
5.  Ingresar los datos del producto:

```json
{
    "name": "Gaseosa Coca Cola",
    "price": 100,
    "description": "Este es un producto de ejemplo"
}
```
6.  Enviar la solicitud.

### 3. **Actualizar un Producto**

1.  Crear una nueva solicitud en Postman.
2.  Configurar como `PUT` a `http://localhost:5000/api/products/:id` (reemplaza `:id` con el ID real).
3.  En la pestaña **Headers**, agregar:
    -   **Key:** `Authorization`
    -   **Value:** `Bearer <tu_token_jwt_aquí>`
4.  En la pestaña **Body**, seleccionar **raw** y tipo **JSON**.
5.  Ingresar los datos a actualizar:

```json

{
    "name": "Gaseosa Coca Cola",
    "price": 120,
    "description": "Producto actualizado"
}
```

6.  Enviar la solicitud.

### 4. **Eliminar un Producto**

1.  Crear una nueva solicitud en Postman.
2.  Configurar como `DELETE` a `http://localhost:5000/api/products/:id` (reemplaza `:id` con el ID real).
3.  En la pestaña **Headers**, agregar:
    -   **Key:** `Authorization`
    -   **Value:** `Bearer <tu_token_jwt_aquí>`
4.  Enviar la solicitud.
