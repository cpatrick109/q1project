$(document).ready(function() {
    var deckId;
    var hit = 0;
    $("#newHand").click(function() {
        $(".cardHolder").children().remove();
    });
    //define new deck function
    function getNewDeck() {
        return $.get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"); //(new deck shuffled)
        // return $.get("http://deckofcardsapi.com/api/deck/new/")(new deck not shuffled)
    }
    //define hit card function
    function drawCard(id) {
        return $.get(`http://deckofcardsapi.com/api/deck/${id}/draw/?count=1`);
    }
    //define deal 2 cards function
    function deal2Cards(id) {
        return $.get(`http://deckofcardsapi.com/api/deck/${id}/draw/?count=4`);
    }
    // add to get new deck button event listener
    $('#newGame').click(function() {
        getNewDeck().then(function(data) {
            console.log('data', data);
            var id = data.deck_id;
            deckId = id;
            hit = 0;
            console.log('deckId', deckId);
        });

    });
    //add a button to deal cards
    $('#deal').click(function() {
        deal2Cards(deckId).then(function(dealData) {
            console.log('dealData', dealData);
            // console.log(dealData.cards[0].image)
            var imgSource = dealData.cards[0].image;
            var imgElement = $(`<img src="${imgSource}"id="myCard">`);
            $("#playerCard1").append(imgElement);
            var imgSource = dealData.cards[1].image;
            var imgElement = $(`<img src="${imgSource}"id="myCard">`);
            $("#playerCard2").append(imgElement);
            var imgSource = dealData.cards[2].image;
            var imgElement = $(`<img src="${imgSource}"id="myCard">`);
            $("#dealerCard1").append(imgElement);
            var imgSource = dealData.cards[3].image;
            var imgElement = $(`<img src="${imgSource}"id="myCard">`);
            $("#dealerCard2").append(imgElement);
            var cardValue = dealData.cards[0].value;
            var cardElement = $(`${cardValue}`);
            $("#dealerCard2").append(cardElement);
            console.log(cardValue)




        });
    });
    //add a button to hit cards
    $('#hit').click(function() {
        drawCard(deckId).then(function(data) {
            console.log('data', data);

            var cardValue = data.cards[0].value;
            var cardElement = $(`${cardValue}`);
            $("#dealerCard2").append(cardElement);
            console.log(cardValue);

            var imgSource = data.cards[0].image;
            var imgElement = $(`<img src="${imgSource}"id="myCard">`);
            if (hit == 0) {
                $(".pcard3").append(imgElement);
            } else if (hit == 1) {
                $(".pcard4").append(imgElement);
            } else if (hit == 2) {
                $(".pcard5").append(imgElement);
            }
            hit++;

        });
    });
});



//dealer append hit cards to div
// if (hit == 0) {
//     $(".dcard3").append(imgElement);
// } else if (hit == 1) {
//     $(".dcard4").append(imgElement);
// } else
// if (hit == 2) {
//     $(".dcard5").append(imgElement);
// }
// $(".card1").append('<div>').append(imgElement);

// $('#countCard')(function(){
//
// })









// var hand = {
//     cards: new Array(),
//     current_total: 0,
//
//     sumCardTotal: function() {
//         this.current_total = 0;
//         for (var i = 0; i < this.cards.length; i++) {
//             var c = this.cards[i];
//             this.current_total += c.value;
//         }
//         $("#hdrTotal").html("Total: " + this.current_total);
//
//         if (this.current_total > 21) {
//             $("#btnStick").trigger("click");
//             $("#imgResult").attr('src', 'images/x2.png');
//             $("#hdrResult").html("BUST!")
//                 .attr('class', 'lose');
//         } else if (this.current_total == 21) {
//             $("#btnStick").trigger("click");
//             $("#imgResult").attr('src', 'images/check.png');
//             $("#hdrResult").html("BlackJack!")
//                 .attr('class', 'win');
//         }
//     }
// };
