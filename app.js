let score1 = 0;
let score2 = 0;

function play()
{
    
    let randomNumber1 = Math.floor(Math.random() * 5) + 1;
    let randomDiceImage1 = "dice" + randomNumber1 + ".png";
    let randomImageSource1 = "../image/" + randomDiceImage1;
    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource1);


    let randomNumber2 = Math.floor(Math.random() * 5) + 1;
    let randomDiceImage2 = "dice" + randomNumber2 + ".png";
    let randomImageSource2 = "../image/" + randomDiceImage2;
    let image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2 );

    
    if(score1 == 10)
    {
        score1 = 0;
        score2 = 0;
        document.getElementById('title-text').innerHTML = "Player 1 Won The Game !";
        document.getElementById('scores').innerHTML = score1 + " : " + score2 ;
        
    }
    else if(score2 == 10)
    {
        score1 = 0;
        score2 = 0;
        document.getElementById('title-text').innerHTML = "Player 2 Won The Game";
        document.getElementById('scores').innerHTML = score1 + " : " + score2 ;
        
    }
    else if(randomNumber1 > randomNumber2)
    {
        document.getElementById('title-text').innerHTML = "Player 1 Win this round !";
        score1++;
        document.getElementById('scores').innerHTML = score1 + " : " + score2 ;
    }
    else if(randomNumber2 > randomNumber1) 
    {
        document.getElementById('title-text').innerHTML = "Player 2 Win this round ! ";
        score2++;
        document.getElementById('scores').innerHTML = score1 + " : " + score2 ;
    }
   
    else
    {
        document.getElementById('title-text').innerHTML = " Draw ";
        document.getElementById('scores').innerHTML = score1 + " : " + score2 ;
    
    }

    
}

function reset()
{
    score1 = 0;
    score2 = 0;
    document.getElementById('scores').innerHTML = score1 + " : " + score2 ;
    document.getElementById('title-text').innerHTML = "Start Playing"
    

        
    
    let randomDiceImage1 = "DICE.png"
    let randomImageSource1 = "../image/" + randomDiceImage1;
    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource1);


    let randomDiceImage2 = "DICE.png"
    let randomImageSource2 = "../image/" + randomDiceImage2;
    let image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2 );


}