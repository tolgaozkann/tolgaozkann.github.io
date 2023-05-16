var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	$("name").focus();
};

function displayResults()
{
	var average = 0;
	var highestScore = 0;

	for (var i = 0; i < scores.length; i++) {
		average = (average * i + scores[i]) / (i + 1);

		if (scores[i] > highestScore) {
			highestScore = scores[i];
		}
	}

	var resultsDiv = document.getElementById("results");
	resultsDiv.innerHTML = "<h2>Results</h2><p>Average score is " + average + "</p><p>Highest score is " + highestScore + "</p>";
}

function displayScores() {
	var table = document.getElementById("scores_table");
	table.innerHTML = "";

	for (var i = 0; i < names.length; i++) {
		var row = table.insertRow(i);
		var nameCell = row.insertCell(0);
		var scoreCell = row.insertCell(1);

		nameCell.innerHTML = names[i];
		scoreCell.innerHTML = scores[i];
	}
}

function addScore() {
	var nameInput = $("name");
	var scoreInput = $("score");

	var name = nameInput.value.trim();
	var score = parseInt(scoreInput.value.trim());

	if (name === "" || isNaN(score) || score < 0 || score > 100) {
		alert("You must enter a name and a valid score.");
	} else {
		names.push(name);
		scores.push(score);
		nameInput.value = "";
		scoreInput.value = "";
		nameInput.focus();
	}
}


