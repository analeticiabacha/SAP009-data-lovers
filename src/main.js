import {filtroNomes, ordenarCampeoes, funcaoDosCampeoes, dificuldadeCampeao, porcentagemCampeoes} from './data.js';
import data from './data/lol/lol.js';

//const lol = Object.keys(data.data); //tranformando objeto em um array
//console.log(teste.); //deu certo: array de strings

let dadosLol = [];
for (let character in data.data){
  dadosLol.push(data.data[character]);
}

const root = document.getElementById("info-cards");

function infosDosCardsTela (data) {
  root.innerHTML = data.map((character) => `
    <div class="cards">
      <div class="flip-container"> 
        <div class="flipper">
          
          <div class="front-cards-infos">
            <img alt="fotos-campeões" class="card-img" src="${character.splash}">
            <div id="front-cards-txt">
              <h1> ${character.name}</h1>
              <h4> ${character.title} </h4>
            </div>
          </div>
          
          <div class="back-cards-infos">
            <ul class="back-cards-txt">
              <h1 id="nome-campeao"><strong> ${character.name}</strong></h1>
              <li><strong>Ataque: ${character.info.attack} </strong></li>
              <li><strong>Defesa: ${character.info.defense} </strong></li>
              <li><strong>Magia: ${character.info.magic} </strong></li>
              <li><strong>Dificuldade: ${character.info.difficulty} </strong></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  `).join('');
}
infosDosCardsTela(dadosLol);


//Pesquisar por nome
const campoPesquisar = document.getElementById("txt-pesquisa");
campoPesquisar.addEventListener("input", event => { //input é melhor que keypress
  const nomeDoCampeao = event.target.value.toUpperCase();  //event.target.value trabalham juntos. 
  const filtrarCampeoes = filtroNomes(dadosLol, nomeDoCampeao); //chamada da função no arquivo data.js
  infosDosCardsTela(filtrarCampeoes);
});

//ordenar por A-Z e Z-A
const ordenarPor = document.getElementById("ordenar");
ordenarPor.addEventListener("change", () => { 
  let campeoesOrdenados = ordenarCampeoes(dadosLol);
  infosDosCardsTela(campeoesOrdenados);
  if(ordenarPor.value == "A-Z"){
    infosDosCardsTela(dadosLol.reverse());
  }
});

//filtro por função
const buscarPorFuncao = document.getElementById("buscar-funcao");
buscarPorFuncao.addEventListener("change", () => {
 let campeoesFuncao = funcaoDosCampeoes(dadosLol, buscarPorFuncao.value);
 infosDosCardsTela(campeoesFuncao);

 //cálculo porcentagem campeoes e numero total naquela função
 const porcentagem = porcentagemCampeoes(dadosLol, campeoesFuncao);
 console.log(`Campeões com essa função: ${campeoesFuncao.length}. Ou seja: ${porcentagem}% do total.`);

});

//filtro por dificuldade
const buscarPorDificuldade = document.getElementById("buscar-dificuldade");
buscarPorDificuldade.addEventListener("change", event => {
  const dificuldade = event.target.value;
  const filtroDificuldade = dificuldadeCampeao(dadosLol, dificuldade);
  infosDosCardsTela(filtroDificuldade);
});

//responsividade
const botaoMobile = document.getElementById("btn-mobile");
botaoMobile.addEventListener("click", toggleMenu);
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
