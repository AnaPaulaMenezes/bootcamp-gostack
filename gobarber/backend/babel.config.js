module.exports ={
  presets: [
    ['@babel/preset-env', {targets:{node:'current'}}], //Faz a conversao para a versão do node que esta instlada na maquina
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
    alias:{
      "@modules*":"./src/modules*",
      "@config*": "./src/config*",
      "@shared*": "./src/shared*"
    }
  }],
 "babel-plugin-transform-typescript-metadata",
 ["@babel/plugin-proposal-decorators", {"legacy": true}],
 ["@babel/plugin-proposal-class-properties",{"loose": true}],
  ],
}
