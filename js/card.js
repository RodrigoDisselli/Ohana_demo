var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");

function orderCards(card) {
    if(card == "card1"){
        card1.classList.add("order1");
        card2.classList.remove("order1");
        card3.classList.remove("order1");
    }
    if(card == "card2"){
        card1.classList.remove("order1");
        card2.classList.add("order1");
        card3.classList.remove("order1");
    }
    if(card == "card3"){
        card1.classList.remove("order1");
        card2.classList.remove("order1");
        card3.classList.add("order1");
    }
}