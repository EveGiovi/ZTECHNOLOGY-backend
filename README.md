# ZTECHNOLOGY-backend
//instalar dependencias
- npm init -y
- npm i express mysql2 sequelize dotenv
// despues de instalar dependencias modificar en package.json
cambiar el main a "nodemon app.ts"
//instalar dependencias del tsconfig.json
- npm i@types/express
-tsc --init
//ir al archivo tsconfig.json y habilitar
- " outDir":"./dist",

//instalar para la compatibilidad de ambos server del front y back
- npm i cors
- npm @types/cors
