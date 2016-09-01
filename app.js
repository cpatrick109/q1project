$(document).ready(function() {
    var deckId;

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
            console.log('deckId', deckId);
        });

    });
    //add a button to deal cards
    $('#deal').click(function() {
        deal2Cards(deckId).then(function(dealData) {
            console.log('dealData', dealData);
            // console.log(dealData.cards[0].image)
            var imgSource = dealData.cards[0].image;
            var imgElement = $(`<img src="${imgSource}"id="myCard">`)
            $("#playerCard1").append(imgElement);
            var imgSource = dealData.cards[1].image;
            var imgElement = $(`<img src="${imgSource}"id="myCard">`)
            $("#playerCard2").append(imgElement);
            var imgSource = dealData.cards[2].image;
            var imgElement = $(`<img src="${imgSource}"id="myCard">`)
            $("#dealerCard1").append(imgElement);
            var imgSource = dealData.cards[3].image;
            var imgElement = $(`<img src="${imgSource}"id="myCard">`)
            $("#dealerCard2").append(imgElement);

        });
    });
    //add a button to hit cards
    $('#hit').click(function() {
        drawCard(deckId).then(function(data) {
            console.log('data', data);
            var imgSource = data.cards[0].image;
            var imgElement = $(`<img src="${imgSource}"id="myCard">`)
            $("#playerCards").append(imgElement);
            // var cardValue = Dealdata.cards[0].value;
            // var cardSrc = $(``)
        });
    });
    // $('#countCard')(function(){
    //
    // })



});




// ACE = 11;
// KING = 10;
// QUEEN = 10;
// JACK = 10;
// 10 = 10;
// "9" = 9;
// "8" = 8;
// "7" = 7;
// "6" = 6;
// "5" = 5;
// "4" = 4;
// "3" = 3;
// "2" =2;




// getCards();



// function getCards() {
//     $.get("http://deckofcardsapi.com/api/deck/new/").then(function(data) {
//         console.log(data);
//         var id = data.deck_id
//         console.log('id', id);
//         return id
//     })
//
// }
// var myDeckId = (function() {
//     'use strict';
//     $.get("http://deckofcardsapi.com/api/deck/new/").then(function(data) {
//         var id = data.deck_id
//         return id;
//     })
// }());

// console.log('myDeckId', myDeckId);

// getCards().then(function(data) {
//     console.log('new data', data);
//     let deckID = data.deck_id
//     console.log(deckID);
//     deal2Cards(deckID).then(function(cardData) {
//         console.log(cardData);
//     })
// })








//////////////////////////////////////////////////////////////////////////////////







// var used_cards = new Array();
//
// function card(name, suit, value) {
//     this.name = name;
//     this.suit = suit;
//     this.value = value;
// }
// var deck = [
//     new card('Ace', 'Hearts', 11),
//     new card('Two', 'Hearts', 2),
//     new card('Three', 'Hearts', 3),
//     new card('Four', 'Hearts', 4),
//     new card('Five', 'Hearts', 5),
//     new card('Six', 'Hearts', 6),
//     new card('Seven', 'Hearts', 7),
//     new card('Eight', 'Hearts', 8),
//     new card('Nine', 'Hearts', 9),
//     new card('Ten', 'Hearts', 10),
//     new card('Jack', 'Hearts', 10),
//     new card('Queen', 'Hearts', 10),
//     new card('King', 'Hearts', 10),
//     new card('Ace', 'Diamonds', 11),
//     new card('Two', 'Diamonds', 2),
//     new card('Three', 'Diamonds', 3),
//     new card('Four', 'Diamonds', 4),
//     new card('Five', 'Diamonds', 5),
//     new card('Six', 'Diamonds', 6),
//     new card('Seven', 'Diamonds', 7),
//     new card('Eight', 'Diamonds', 8),
//     new card('Nine', 'Diamonds', 9),
//     new card('Ten', 'Diamonds', 10),
//     new card('Jack', 'Diamonds', 10),
//     new card('Queen', 'Diamonds', 10),
//     new card('King', 'Diamonds', 10),
//     new card('Ace', 'Clubs', 11),
//     new card('Two', 'Clubs', 2),
//     new card('Three', 'Clubs', 3),
//     new card('Four', 'Clubs', 4),
//     new card('Five', 'Clubs', 5),
//     new card('Six', 'Clubs', 6),
//     new card('Seven', 'Clubs', 7),
//     new card('Eight', 'Clubs', 8),
//     new card('Nine', 'Clubs', 9),
//     new card('Ten', 'Clubs', 10),
//     new card('Jack', 'Clubs', 10),
//     new card('Queen', 'Clubs', 10),
//     new card('King', 'Clubs', 10),
//     new card('Ace', 'Spades', 11),
//     new card('Two', 'Spades', 2),
//     new card('Three', 'Spades', 3),
//     new card('Four', 'Spades', 4),
//     new card('Five', 'Spades', 5),
//     new card('Six', 'Spades', 6),
//     new card('Seven', 'Spades', 7),
//     new card('Eight', 'Spades', 8),
//     new card('Nine', 'Spades', 9),
//     new card('Ten', 'Spades', 10),
//     new card('Jack', 'Spades', 10),
//     new card('Queen', 'Spades', 10),
//     new card('King', 'Spades', 10)
// ];
//
// var pickCard = function() {
//     var todaysCard = deck[Math.floor(Math.random() * 52)];
//     console.log(todaysCard, Math.floor(Math.random() * 52))
//     return todaysCard;
// };
//
// document.getElementById("playerCard1").innerHTML = "<img src='images/cards/cards/Spades/Ace.jpg' />";
// console.log(pickCard())

// var hand = {
//     cards: new Array(),
//     current_total: 0,

// sumCardTotal: function() {
//     this.current_total = 0;
//     for (var i = 0; i < this.cards.length; i++) {
//         var c = this.cards[i];
//         this.current_total += c.value;
//     }
// $("#hdrTotal").html("Total: " + this.current_total);
//
// if (this.current_total > 21) {
//     $("#btnStick").trigger("click");
//     $("#imgResult").attr('src', 'images/x2.png');
//     $("#hdrResult").html("BUST!")
//         .attr('class', 'lose');
// } else if (this.current_total == 21) {
//     $("#btnStick").trigger("click");
//     $("#imgResult").attr('src', 'images/check.png');
//     $("#hdrResult").html("BlackJack!")
//         .attr('class', 'win');
// }
// }
// };
