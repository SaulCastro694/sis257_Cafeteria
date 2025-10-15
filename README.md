# Modelo Entidad–Relación (MER) – Cafetería 

## Descripción del negocio
La Cafetería “Sabor y Aroma” es un negocio dedicado a la venta de café, bebidas calientes y productos de pastelería.  
Este sistema permitirá gestionar los productos, empleados, clientes y las ventas diarias de manera eficiente.

---

## Entidades principales

### PRODUCTO
**Atributos:**
- idProducto (PK)
- nombre
- categoría
- precio
- stock
- descripción

### EMPLEADO
**Atributos:**
- idEmpleado (PK)
- nombre
- cargo
- salario
- fechaIngreso

### CLIENTE
**Atributos:**
- idCliente (PK)
- nombre
- teléfono
- correo

### 🧾 VENTA
**Atributos:**
- idVenta (PK)
- fecha
- total
- idCliente (FK)
- idEmpleado (FK)

### DETALLEVENTA
**Atributos:**
- idDetalle (PK)
- cantidad
- precioUnitario
- subtotal
- idVenta (FK)
- idProducto (FK)

## Posibles Tecnologías
- PostgreSQL
- NestJS (Backend con JWT)
- Vue.js + Axios + Bootstrap (Frontend)
- Visual Studio

## Integración del equipo
- Integrante 1: Johnny Saul Castro Torricos
- Integrante 2: Subelza Aymuro Edidzon
- Integrante 3: Vasquez Arias Luis Israel
