






$('#rockbutton').click(function(){
    console.log('click')
    turn('rock')
})

$('#paperbutton').click(function(){
    console.log('click')
    turn('paper')
})

$('#scissorbutton').click(function(){
    console.log('click')
    turn('scissor')
})

function turn(choice){
    console.log('turn')
    if (choice==="rock"){
        $("#player1").text("Rock")
        $("#player1").removeClass("none")
        
    }
     if (choice==="paper"){
        $("#player1").text("Paper")
        $("#player1").removeClass("none")
     }
      if (choice==="scissor"){
        $("#player1").text("Scissor")
        $("#player1").removeClass("none")


      }
      var computerChoice=Math.floor(Math.random()*(4-1)+1)
      
        if (computerChoice===1){
        $("#computer").text("Rock")
        $("#computer").removeClass("none")
        
    }
     if (computerChoice===2){
        $("#computer").text("Paper")
        $("#computer").removeClass("none")
     }
      if (computerChoice===3){
        $("#computer").text("Scissor")
        $("#computer").removeClass("none")


      }

    

}







