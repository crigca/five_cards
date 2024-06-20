let cardIds = ["card_1", "card_2", "card_3", "card_4", "card_5"];
let btns =["btn_1", "btn_2", "btn_3", "btn_4", "btn_5"]

for (let i = 0; i < cardIds.length; i++) {
    let cardElement = document.getElementById(cardIds[i]);
    let btnElement = document.getElementById(btns[i]);

    btnElement.addEventListener('click', function() {
        cardElement.classList.toggle('gray');
    });
}



