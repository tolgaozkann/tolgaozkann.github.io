
//variables about the game
let myTime = 500;
let level = 1;
let click = 0;


function Game() {
    setTimeout(Play, myTime);//to arrange the time 
}

//click listener
document.getElementById("gameButton").addEventListener("click", () => {
    click++;
});



function Play() {
    //arrange the random location
    document.getElementById("gameButton").style.marginLeft = Math.random() * 300 + "px";
    document.getElementById("gameButton").style.marginTop = Math.random() * 300 + "px";

    //level and time calc
    if (click === 3) {
        alert(`Congratulations!!! You have successfully completed level ${level}. Level ${level + 1} is about to begin!!!`);
        level++;
        click = 0;
        myTime = myTime - 100;
    }
}