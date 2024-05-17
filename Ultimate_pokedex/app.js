const url = "https://tyradex.vercel.app/api/v1/gen/1" //Recupere gen1 des pokemons

let row = document.getElementById('row')
console.log(row)

fetch(url)
.then(response => response.json())
.then(response => 
response.forEach((pokemon) => {
    row.innerHTML += 
    "<div class='card'>" +
        "<div class='container-img'>" +
            "<img src=" + pokemon.sprites.regular + " alt='mon image'>" +
        "</div>" +
        "<div class='info'>" +
            "<h2>" + pokemon.name.fr + " </h2>" +
            "<p>" + pokemon.category + "</p>" +
        "</div>" +
    "</div>"
  })
)
.catch(error => alert("Erreur : " + error));

console.log(varFixed)




// pokemon.category
// pokemon.sprites.regular
// pokemon.name.fr


/*
            <div class="card">
                <div class="container-img">
                    <img src="pokemon.sprites.regular" alt="">
                </div>
                <div>
                    <p>pokemon.name.fr</p>
                    <p>pokemon.category</p>
                </div>
            </div>

*/