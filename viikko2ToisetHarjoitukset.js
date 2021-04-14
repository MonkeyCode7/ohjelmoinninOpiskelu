//Tehtävä 1
function positiveNegative() {
  var value = document.getElementById('posNeg').value;
  if ( value >= 0 ) {
    document.getElementById('negPos').innerHTML = value + " on positiivinen numero!";
  }else {
    document.getElementById('negPos').innerHTML = value + " on negatiivinen numero!";
  }
}
//Tehtävä 2
function weekdayNumber() {
  var answer = parseInt(document.getElementById('weekday').value);
  switch (answer) {
    case 1:
      answer = "Maanantai";
      break;
    case 2:
      answer = "Tiistai";
      break;
    case 3:
      answer = "Keskiviikko";
      break;
    case 4:
      answer = "Torstai";
      break;
    case 5:
      answer = "Perjantai";
      break;
    case 6:
      answer = "Lauantai";
      break;
  default:
      answer = "Sunnuntai";
      break;
  }
  document.getElementById('VKVastaus').innerHTML=answer;
}
//Tehtävä 3
function isLeapYear()
{
  var year = parseInt(document.getElementById('year').value);
  if(year % 400 == 0)
  {
    result = true
  }
  else if((year % 4 == 0) && (year % 100 != 0))
  {
    result = true
  }
  else
    {
      result = false
    }
    document.getElementById('vuosi').innerHTML=result;
}
//Tehtävä 4
function summaKeskiarvo()
{
  var luku1 = parseInt(document.getElementById('luku1').value);
  var luku2 = parseInt(document.getElementById('luku2').value);
  var luku3 = parseInt(document.getElementById('luku3').value);
  var luku4 = parseInt(document.getElementById('luku4').value);
  var luku5 = parseInt(document.getElementById('luku5').value);
  var summa = luku1 + luku2 + luku3 + luku4 + luku5;
  var keskiarvo = summa / 5;
  document.getElementById('summakeski').innerHTML = "lukujen summa on " + summa + " ja niiden keskiarvo on " + keskiarvo;
}
//Tehtävä 5//
function numberText()
{
  let luku1 = parseInt(document.getElementById('luku6').value);
  let lause = luku1 + " x 1 = " + luku1 * 1 + "</br>";
      lause += luku1 + " x 2 = " + luku1 * 2 + "</br>";
      lause += luku1 + " x 3 = " + luku1 * 3 + "</br>";
      lause += luku1 + " x 4 = " + luku1 * 4 + "</br>";
      lause += luku1 + " x 5 = " + luku1 * 5 + "</br>";
      lause += luku1 + " x 6 = " + luku1 * 6 + "</br>";
      lause += luku1 + " x 7 = " + luku1 * 7 + "</br>";
      lause += luku1 + " x 8 = " + luku1 * 8 + "</br>";
      lause += luku1 + " x 9 = " + luku1 * 9 + "</br>";
      lause += luku1 + " x 10 = " + luku1 * 10 + "</br>";
  document.getElementById('numeroTeksti').innerHTML = lause;
}
