// Script to load temperature values from team temp records
//setInterval(function() {loadDoc(url, getNumber, teamDivID)},3000);

// loadDoc
function loadDoc(url, teamID, teamDivID) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      //document.getElementById(teamID).innerHTML = xhttp.responseText + "&deg;F";
      var div = document.getElementById(teamDivID);
      if (xhttp.responseText.trim() === 'NULL') {
        document.getElementById(teamID).innerHTML = "Unable to connect to sensor...";
        div.style.backgroundColor="orange";
      }
      else if (xhttp.responseText.trim() === 'OFF') {
        document.getElementById(teamID).innerHTML = "Powered Off.";
        div.style.backgroundColor="red";
      }
      else if (xhttp.responseText > 70) {
        document.getElementById(teamID).innerHTML = xhttp.responseText + "&deg;F";
        div.style.backgroundColor="yellow";
      }
      else {
        document.getElementById(teamID).innerHTML = xhttp.responseText + "&deg;F";
        div.style.backgroundColor="green";
      }
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
