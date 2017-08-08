$( document ).ready(function() {
var animals = ["leopard","snail","deer","parrot","rabbit","bear","lion","fish","crab","cow","pig","panda","leopard","snail","deer","parrot","rabbit","bear","lion","fish","crab","cow","pig","panda"];
var attempt = [];
Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}
//shuffle array
animalsRandom = animals.shuffle();

(function playGame(){

$('#start').on("click", function(){
  // Checking if grid is empty, or if game is in progress
  if ($(".tiles").children().length == 0) {
      // Creating grid of hidden tiles
      for (var i = 0; i < animalsRandom.length; i++) {
      $('.tiles').append("<div class='card'><img src='https://png.icons8.com/"+animalsRandom[i]+"/color/96' width='96' height='96' title="+animalsRandom[i]+"></div>");
      }
      $('img').hide();
      $('#start').html("Give up");
      } else {
        $('#start').html("Start again");
        // Emptying the grid on "Start again" and reshuffling
        $('.tiles').empty();
        animalsRandom= animals.shuffle();
        }

  turningTiles();

 });// Click of start button


turningTiles = function(){
  
       $('.card').off().on('click',function(){  
            var card = $(this).children();
            card.toggle();
            var cardValue = card["0"].currentSrc;
            attempt.push(cardValue);
            console.log(attempt);
           
       }); 
   
        
  } // TurningTiles function
      
 


          
})();


   
        

          
            


    






          

});//doc ready
