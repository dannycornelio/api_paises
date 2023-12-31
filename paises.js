let buscarBtn = document.getElementById("buscarBtn");
let paisInp = document.getElementById("paisInp");

paisInp.addEventListener("paisInp", () => {
    let texto = paisInp.value;
    let textoMinuscula = texto.toLowerCase();
  
    if (texto !== textoMinuscula) {
      input.value = textoMinuscula;
    }
  });

buscarBtn.addEventListener("click", () => {
    let paisName = paisInp.value.toLowerCase(); // Convertir a minúsculas
    let finalURL = `https://restcountries.com/v3.1/name/${paisName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
          
            resultado.innerHTML = `
            <img src="${data[0].flags.svg}" class="flagImg">
            <h2> ${data[0].name.common} </h2>
            <div class="wrapper">
                <div class="dataWrapper">
                     <h4>Capital</h4>
                     <span>${data[0].capital[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="dataWrapper">
                     <h4>Continente</h4>
                     <span>${data[0].continents[0]}</span>
                </div>
            </div>
            </div>
            <div class="wrapper">
                <div class="dataWrapper">
                     <h4>Poblacion</h4>
                     <span>${data[0].population}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="dataWrapper">
                     <h4>Moneda</h4>
                     <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="dataWrapper">
                     <h4>Idioma</h4>
                     <span>${Object.values(data[0].languages).toString().split(", ").join(", ")}</span>
                </div>
            </div>

            `
            
        });  
});