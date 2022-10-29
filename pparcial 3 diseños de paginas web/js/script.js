let containerFlag = document.getElementById("setFlag");
let containerCountry = document.getElementById("nameCountry");
let containerNative = document.getElementById("Native");
let containerCapital = document.getElementById("nameCapital");
let containerRegion = document.getElementById("region");
let containerIdioma = document.getElementById("idioma");
let containerMoneda = document.getElementById("moneda");
let containerMap = document.getElementById("maps");


function getCountry() {
  getPost()
    .then((data) => data.json())
    .then((country) => {
      getflag(country);
    });
}

function getPost() {
  return fetch("https://restcountries.com/v3.1/all");
}

function getflag(countries) {
  containerFlag.innerHTML = "";
  containerCountry.innerHTML = "";
  containerNative.innerHTML = "";
  containerCapital.innerHTML ="";
  containerRegion.innerHTML ="";
  containerIdioma.innerHTML ="";
  containerMoneda.innerHTML ="";
  containerMap.innerHTML = "";


  countries.map((country, i) => {
    let flagShow = document.createElement("img");
    let nameShow = document.createElement("p");
    let nativeShow = document.createElement("p");
    let capitalShow = document.createElement("p");
    let regionShow = document.createElement("p");
    let idiomaShow = document.createElement("p");
    let monedaShow = document.createElement("p");
    let mapShow = document.createElement("p");

    flagShow.src = country.flags.png;
    flagShow.height = "100";
    flagShow.width = "150";
    containerFlag.appendChild(flagShow);

    nameShow.innerHTML = country.name.common;
    containerCountry.appendChild(nameShow);

    nativeShow.innerHTML = country.nameNative;
    containerNative.appendChild(nativeShow);

    capitalShow.innerHTML = country.capital;
    containerCapital.appendChild(capitalShow);
    
    regionShow.innerHTML = country.region;
    containerRegion.appendChild(regionShow);

    idiomaShow.innerHTML = country.languages;
    containerIdioma.appendChild(idiomaShow);

    monedaShow.innerHTML = country.currencies;
    containerMoneda.appendChild(monedaShow);

    mapShow.innerHTML = country.maps;
    containerMap.appendChild(mapShow);


  });
}
