window.addEventListener("DOMContentLoaded", domLoaded);
var empty = "";





function domLoaded() {

  document.getElementById("fInput").addEventListener("input", clearCel);
    function clearCel () {
      document.getElementById("cInput").value = empty;
    }

  document.getElementById("cInput").addEventListener("input", clearFah);
    function clearFah () {
      document.getElementById("fInput").value = empty;
  }

  document.getElementById("convertButton").addEventListener("click", function() {
    var cel = document.getElementById("cInput").value;
    var fah = document.getElementById("fInput").value;


    if (cel == empty && fah == empty) {
      document.getElementById("errorMessage").innerHTML = "Field cannot be empty.";
    }


    else {

      if (cel == empty) {
        if (isNaN(fah)) {
          document.getElementById("errorMessage").innerHTML = fah + " is not a number";
          document.getElementById("errorMessage").style = "color: red";
        }

        else {
          document.getElementById("errorMessage").innerHTML = empty;
          document.getElementById("cInput").value = convertFtoC(parseFloat(fah));
        }
      }

      else {
        if (isNaN(cel)) {
          document.getElementById("errorMessage").innerHTML = cel + " is not a number";
          document.getElementById("errorMessage").style = "color: red";
        }
        else {
          fah = convertCtoF(parseFloat(cel))
          document.getElementById("errorMessage").innerHTML = empty;
          document.getElementById("fInput").value = fah;
        }
      }

      if (fah < 32) {
        document.getElementById("weatherImage").src = "cold.png"
      }
      else if (fah >= 32 && fah <=50) {
        document.getElementById("weatherImage").src = "cool.png"
      }
      else if (fah > 50) {
        document.getElementById("weatherImage").src = "warm.png"
      }
    }
  });
}


function convertCtoF(degreesCelsius) {
     let ctoF = (degreesCelsius * 9 / 5 + 32);
     return ctoF;
}

function convertFtoC(degreesFahrenheit) {
    let ftoC = (degreesFahrenheit - 32) * 5/9;
    return ftoC;
}
