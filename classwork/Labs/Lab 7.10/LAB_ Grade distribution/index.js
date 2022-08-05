function parseScores(scoresString) {

// Your code here

var inString = scoresString.split(" ");

return inString;

}

function buildDistributionArray(scoresArray) {

// Your code here

var x = 0;

var distributionArray = new Array(5);

distributionArray[0] = 0;

distributionArray[1] = 0;

distributionArray[2] = 0;

distributionArray[3] = 0;

distributionArray[4] = 0;

while (x < scoresArray.length) {

if (scoresArray[x] >= 90) {

distributionArray[0]++;

}else if (scoresArray[x] >= 80 && scoresArray[x] <=89) {

distributionArray[1]++;

}else if(scoresArray[x] >= 70 && scoresArray[x] <=79) {

distributionArray[2]++;

}else if (scoresArray[x] >= 60 && scoresArray[x] <=69) {

distributionArray[3]++;

}else if (scoresArray[x] <= 59 && scoresArray[x]>0) {

//Checking for >0 condition is needed to avoid empty array considering as one value in grade F

distributionArray[4]++;

}

x++;

}

return distributionArray;

}

function setTableContent(userInput) {

// Your code here

var myTable = document.getElementById("distributionTable");

// Doing thing only when userinput has few values

if (userInput.length>0) {

var parsedScores = parseScores(userInput);

var buildArray = buildDistributionArray(parsedScores);

// Creating rows in the table

var row = myTable.insertRow(0);

var row2 = myTable.insertRow(1);

var row3 = myTable.insertRow(2);

// Inserting Label Rows

var cell1 = row2.insertCell(0);

var cell2 = row2.insertCell(1);

var cell3 = row2.insertCell(2);

var cell4 = row2.insertCell(3);

var cell5 = row2.insertCell(4);

cell1.innerHTML = "A";

cell2.innerHTML = "B";

cell3.innerHTML = "C";

cell4.innerHTML = "D";

cell5.innerHTML = "F";

var graphValueArray = [];

var occuranceArray = [];

// A loop for populating graph values with proper styling and occurance values

for (index = 0; index < 5; index++) {

// Displaying occurances

occuranceArray[index] = row3.insertCell(index);

occuranceArray[index].innerHTML = buildArray[index];

// adding corresponding cell for graph

graphValueArray[index] = row.insertCell(index);

// Creating classname string

var styleClass = "bar"+index;

var heightValue = (buildArray[index] * 10) + "px";

// Adding DIV element via innerHTML property

graphValueArray[index].innerHTML = "<div style='height:"+ heightValue+"' class='"+styleClass+"'></div>";

}

}

// Displaying no graph display text

else{

var emptyRow = myTable.insertRow(0);
var emptyCell = emptyRow.insertCell(0)

emptyCell.innerHTML = "No graph to display";

}

}

function bodyLoaded() {

// The argument passed to writeTableContent can be changed for

// testing purposes

//setTableContent("");

setTableContent("45 78 98 83 86 99 90 59");

//setTableContent("45 40 8 8 6 9 0 9");

}
