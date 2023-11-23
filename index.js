//fetch('https://jsonplaceholder.typicode.com/posts/1')
  //.then((response) => response.json())
//  .then((json) => (console.log(json), console.log("muestro solo el post 1")));

  //fetch('https://jsonplaceholder.typicode.com/posts')
  //.then((response) => response.json())
  //.then((json) => (console.log(json), console.log("muestro todos los post")));

  // metodo post modifica un recurso 

  //fetch('https://jsonplaceholder.typicode.com/posts', {
  //method: 'POST',
  //body: JSON.stringify({
  //  title: 'foo',
  //  body: 'bar',
  //  userId: 1,
  //}),
  //headers: {
  //  'Content-type': 'application/json; charset=UTF-8',
  //},
//})
  //.then((response) => response.json())
  //.then((json) => (console.log(json),console.log("aca modifique un recurso")));

  // metodo put crea un recurso

//  fetch('https://jsonplaceholder.typicode.com/posts/1', {
//  method: 'PUT',
//  body: JSON.stringify({
//    id: 1,
//    title: 'foo',
//    body: 'bar',
//    userId: 1,
//  }),
//  headers: {
//    'Content-type': 'application/json; charset=UTF-8',
//  },
//})
//  .then((response) => response.json())
//  .then((json) => (console.log(json),console.log("cree este recurso")));

  // filtrado de recursos creo que va en el link que ponen post?userId=1 esta usando un selector userId dentro de los post

  fetch('https://jsonplaceholder.typicode.com/posts?userId=2')
  .then((response) => response.json())
  .then((json) => (console.log(json),console.log("esto es un filtrado")));

  //hay que atraparlos ya

  fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((response) => response.json())
  .then((json) => (console.log("son 150 o mas que ver, y ya van por mil y pico"),console.log(json)));

  
  /* mi inicial de crystal THE GREAT FEAR ALIGATOR !!!, pensar que esto apenas es la 2nda generacion ya estoy mayorcito eh
    cabe destacar un dato curioso para conocedores Feraligator tiene 11 caracteres y por cosas de la tecnologia de esos tiempos
    no se podia introducir su nombre completo asi que lo recortaron a Feraligtr epicardo. */

  fetch("https://pokeapi.co/api/v2/pokemon/feraligatr")
  .then((response) => response.json())
  .then((json) => (console.log("POKEMON CRYSTAL RULES ALL ABOVE, and FEAR THE ALIGATOR"),console.log(json)));

  fetch('https://pokeapi.co/api/v2/pokemon?name=pidgey')
  .then((response) => response.json())
  .then((json) => console.log(json));

  


  