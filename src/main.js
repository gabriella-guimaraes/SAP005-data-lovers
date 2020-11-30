import data from './data/rickandmorty/rickandmorty.js';
import { filterAllInfo, orderAZ, orderZA, elements, searchNames} from './data.js';
//show all characters (basic) info on HTML
let showCharactersInfo = document.getElementById("cards");
for(let result of data.results){
    showInfo(result);
}
const getCharacters = data.results
function showInfo(cards){
    let charactersList = document.createElement("li"); 
    let img = new Image(250, 250);
    img.src =cards.image;
    charactersList.appendChild(img);
    for(let [key,value] of Object.entries(cards)){
        if (key === "name"){
            let p = document.createElement("p"); 
            p.appendChild(document.createTextNode(value));
            charactersList.appendChild(p);
            p.id = "name"; 
        } else if (key === "status"){
            let p = document.createElement("p")
            p.appendChild(document.createTextNode("Status: " + value));
            charactersList.appendChild(p);
            p.id = "status" 
        } else if (key === "species"){
            let p = document.createElement("p");
            p.appendChild(document.createTextNode(value));
            charactersList.appendChild(p);
            p.id = "species";
        } else if (key === "gender"){
            let p = document.createElement("p");
            p.appendChild(document.createTextNode(value));
            charactersList.appendChild(p);
            p.id = "gender"
        }else if (key === "origin"){
            let p = document.createElement("p");
            p.appendChild(document.createTextNode("Origem: " +value.name));
            charactersList.appendChild(p);
            p.id = "origin";
        }else if (key === "location"){
            let p = document.createElement("p");
            p.appendChild(document.createTextNode("Última localização: " +value.name));
            charactersList.appendChild(p);
            p.id + "location"
        } 
    }
    showCharactersInfo.appendChild(charactersList);
}
showInfo(getCharacters)
//create an event listener for the select button
const select = document.getElementById("Caracteristicas-quantidade");
select.addEventListener("change",btnStatus);
//create a function for each filter
function btnStatus(){
    showCharactersInfo.innerHTML = "";
    if(select.value === "Mortos"){
        const dead = filterAllInfo("status", "Dead");
        dead.map(item =>  showInfo(item));
        //return showInfo(filterAllInfo( "status", "Dead"));
    }else if(select.value === "Vivos"){
        const alive = filterAllInfo("status", "Alive");
        alive.map(item =>  showInfo(item));
    }else if(select.value === "Desconhecidos"){
        const unknow = filterAllInfo("status", "unknown");
        unknow.map(item =>  showInfo(item));
    }
}
//event listener and function for the button "species"
const selectSpecies = document.getElementById("Especies-quantidade")
selectSpecies.addEventListener("change", btnSpecies);
function btnSpecies(){
    showCharactersInfo.innerHTML = "";
    if(selectSpecies.value === "Humanos"){
        const human = filterAllInfo("species", "Human");
        human.map(item =>  showInfo(item));
    }else if(selectSpecies.value === "Humanoids"){
        const humanoids = filterAllInfo("species", "Humanoid");
        humanoids.map(item =>  showInfo(item));
    }else if (selectSpecies.value === "Aliens"){
        const alien = filterAllInfo("species", "Alien");
        alien.map(item =>  showInfo(item));
    }else if (selectSpecies.value === "Animais"){
        const animals = filterAllInfo("species", "Animal");
        animals.map(item => showInfo(item));
    }else if (selectSpecies.value === "Cronenberg"){
        const cronenbergs = filterAllInfo("species", "Cronenberg");
        cronenbergs.map(item => showInfo(item));
    }else if (selectSpecies.value === "Robot"){
        const robots = filterAllInfo("species", "Robot");
        robots.map(item => showInfo(item));
    }
        
}

//event listener and function for the button "gender"
const selectGender = document.getElementById("Gêneros-quantidade");
selectGender.addEventListener("change", btnGender);
function btnGender(){
    showCharactersInfo.innerHTML = "";
    if(selectGender.value === "Femininos"){
        const gender = filterAllInfo("gender", "Female");
        gender.map(item =>  showInfo(item));
    } else if (selectGender.value === "Masculinos"){
        const gender = filterAllInfo("gender", "Male");
        gender.map(item =>  showInfo(item));
    } else if (selectGender.value === "Sem-gênero"){
        const gender = filterAllInfo("gender", "unknown");
        gender.map(item =>  showInfo(item));
    }
}
//event listener and function for the button "order A-Z/Z-A"
const selectSort = document.getElementById("sort-characters");
selectSort.addEventListener("change", btnOrder);
function btnOrder(){
    showCharactersInfo.innerHTML = "";
    if(selectSort.value === "sortAZ"){
        console.log("entrou na func btnOrder");
        const az = orderAZ(elements)
        //print on html
        console.log(az);
    } else if(selectSort.value === "sortZA"){
        const za = filterAllInfo(orderZA);
        za.sort(item => showInfo(item));
        console.log(za);
    }
}
const inputSearch = document.getElementById("nameSearch");
inputSearch.addEventListener("keyup", searchName);
function searchName(){
    const names = document.getElementById("nameSearch").value
    const search = searchNames(data.results, names);
    console.log(search);
}
//fix the search and function az/za
//ajust the css elements