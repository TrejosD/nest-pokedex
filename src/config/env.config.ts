export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  port: process.env.PORT,
  defaultLimit: +process.env.DEFAULT_LIMIT!,
});

// este archivo nos permite configurar las variables de entorno, asi cuando las utilicemos, no vamos a usar la ruta procees.env.XXX sin que usaremos este objeto, creado aca. Es por esto, que si el archivo .env, no esta bien utilizado, tenemos unos valores por defecto.
