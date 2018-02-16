var questions=[];
questions.push({quest:"Which of these songs is from the movie Mulan?", a1:"I'll Make a Man Out of You", a2:"I Just Can't Wait to be King", a3:"Colors of the Wind",a4:"Be Our Guest",corrAns:"I'll Make a Man Out of You"});
questions.push({quest:"Which of these characters is not from the movie Tarzan?", a1:"Jane", a2:"Clayton", a3:"Turk",a4:"Gaston",corrAns:"Gaston"});
var count=0;
var time=30;
var inter=0;
var rightAns=0;
var wrongAns=0;
$(".button").click(evaluate);
$("#reset-button").click(function(){
    reset();
    next();
});
function evaluate()
{
    var selection=$(this).text();
    if(selection==questions[count].corrAns)
    {
        $("#message").text("Correct");
        rightAns++;
    }
    else
    {
        $("#message").text("No, the correct answer was: "+questions[count].corrAns);
        wrongAns++;
    }
    time=30;
    clearInterval(inter);
    count++;
    setTimeout(next,3000);
}
function timeKeeper()
{
    time--;
    $("#time").text(time);
}
function timeOut()
{
    clearInterval(inter);
    $("#message").text("Time's up! The correct answer was: "+questions[count].corrAns);
    setTimeout(next,3000);
    time=30;
    count++;
}
function next()
{
    $("#reset-button").hide();
    if(count==questions.length)
    {
        gameOver();
    }
    else
    {
        $(".button").show();
        $("#message").text(questions[count].quest);
        $("#btn1").text(questions[count].a1);
        $("#btn2").text(questions[count].a2);
        $("#btn3").text(questions[count].a3);
        $("#btn4").text(questions[count].a4);
        inter=setInterval(timeKeeper,1000);
        setTimeout(timeOut,30000);
    }
}
function gameOver()
{
    $("#message").text("Game Over");
    $("#answer-holder").append($("<div>").text("Correct Answers: "+rightAns));
    $("#answer-holder").append($("<br>"));
    $("#answer-holder").append($("<div>").text("Incorrect Answers: "+wrongAns));
    $(".button").hide();
    $("#reset-button").show();
    $("#reset-button").text("Play Again?");
}
function reset()
{
    count=0;
    time=30;
    rightAns=0;
    wrongAns=0;
    $("#answer-holder").empty();
    $(".button").hide();
    clearInterval(inter);
}
reset();