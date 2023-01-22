

const url = "https://pokeapi.co/api/v2/pokemon/";
// const url = "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/";
const card = document.getElementById('card');
const button = document.getElementById('btn');



button.addEventListener("click", foo);

// window.addEventListener("load",foo );


    
    




function foo(){
    

    
    var id = Math.floor(Math.random()*150 );

    // console.log(id); 

    let finalUrl = url + id;
    // console.log(finalUrl);

    fetch(finalUrl).then((data)=>data.json()).then((data1)=>{
        // console.log(data1);
        generateCard(data1);
    });
    
}

const generateCard =(data1)=>{
    // console.log(data1);
    const hp =data1.stats[0].base_stat;
    // console.log(hp);
    // const imgSrc =`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg` ;
    // console.log(imgSrc);
  
  
    const PokemonName = data1.name;
    // console.log(PokemonName);

   
    var hid = Math.floor(Math.random()*150 );
    // console.log(hid);
    const statAttack = data1.stats[1].base_stat;
    const statDefence = data1.stats[2].base_stat;
    const statSpeed = data1.stats[5].base_stat;

    card.innerHTML =`
                        
                        <p class="hp">
                        <span>HP</span>
                       ${hp}
                    </p>
                    <img src="${ `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${hid}.svg` }" alt="" class="img"/>
                   
                    <h2 class="pokemon-name">${PokemonName}</h2>
                    <div class="types">
                        <span>type 1</span>
                        <span>type 2</span>
                    </div>
                    <div class="stats">
                        <div>
                            <h3>${statDefence}</h3>
                            <p>Defence</p>
                        </div>
                        <div>
                            <h3>${statAttack}</h3>
                            <p>Attack</p>
                        </div>
                        <div>
                            <h3>${statSpeed}</h3>
                            <p>Speed</p>
                        </div>
                    </div>
                        
    `;








}