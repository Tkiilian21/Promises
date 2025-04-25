// const myPromise = new Promise ((resolve, reject) => {
//     const nome = "Joao"
    
//     if(nome === "Thiago"){
//         resolve("Usuario encontrado");
//     }else {
//         reject("Usuario não encontrado");
//     }
// })

// myPromise.then((sucess) => {
//     console.log(sucess)}

// ).catch((error) =>{
//     console.error(error);

// })


const myPromise2 = new Promise((resolve, reject) => {
    //  metodo resolve, tempo, mensagem
    setTimeout(resolve, 2000, "P2 ok!")

})

const myPromise3 = new Promise((resolve, reject) => {
    resolve("P3 ok!")
})

// metodo all resolve todas as promises(promesas)
const resolveAll = Promise
    .all([myPromise2, myPromise3])
    .then((data) => {
        console.log(data)
    })

// metodo race reolve a promise(promesa) que se resolver mais rapido    
 const resolveRace = Promise.race([myPromise2, myPromise3])
    .then((data) => {
        console.log(data)
    })