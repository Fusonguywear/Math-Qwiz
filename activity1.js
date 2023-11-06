function updateScore()
{
    score = score + 1;
    document.getElementById("score").innerHtml = "Score: " + score;
}

function saveScore()
{
    localStorage.setItem("score", score);
}

function nextPage() {
    window.location = "index.html";
}