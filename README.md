<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en Desarollo

1. Clonar el repositorio.
2. Ejecutar

```
yarn install
```

3. Tener Nest Cli instalado

```
yarn add -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo **.env.template** y nombrarlo como **.env**

6. Llenar las variables de entorno definidas en el **.env**

7. Levantar el proyecto DEV

```
yarn start:dev
```

8. Reconstruir la base de Datos, con la semilla. DEV

```
https://localhost:3000/api/v2/seed
```

## Stack Usado

- Mongo
- Nest
