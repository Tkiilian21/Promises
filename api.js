const route = 'characters';

fetch(`https://dattebayo-api.onrender.com/${route}`,{
    method: 'GET',
    headers: {
        accept: 'application/json'
    }
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.characters[0].images[0]) // esta buscando dentro do array caracters a posicao da primeira informação.
        console.log(data.characters[0].jutsu)  // busca a primeira posição do array caracters, e a lista de array jutsu   

    })

    .catch((error) => {
        console.log(error)
    })
