//Tehtävä 1
function positiveNegative() {
  var value = document.getElementById('posNeg').value;
  if ( value >= 0 ) {
    document.write(value + " on positiivinen numero!")
  }else {
    document.write(value + " on negatiivinen numero!")
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
    document.getElementById('year').innerHTML=answer;
}
//Tehtävä 4
