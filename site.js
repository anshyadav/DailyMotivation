let quoteElement = document.getElementById("quote");
let imageElement = document.getElementById("quote-image");



function refreshData(){
    fetch("https://api.thecatapi.com/v1/images/search?size=full").then(response => response.json()).then(cats => {
        imageElement.innerHTML = "<img src=" + cats[0].url + " class='img' alt = 'My Cat'>"
    }); 
    fetch("https://api.kanye.rest").then(response => response.json()).then(quotation => {
        quoteElement.innerHTML = quotation.quote
    });

}