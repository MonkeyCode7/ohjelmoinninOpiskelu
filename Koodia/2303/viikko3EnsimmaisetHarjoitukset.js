//Tehtävä 1//
function tulostaParilliset()
{
  var twin = parseInt(document.getElementById('pluku').value);
  console.log(twin);
  var jono = "<p>";
  for (var i = 2; i <= twin; i+=2)
  {
    jono +=i;
    jono +=" ";
    console.log(jono);
  }
  jono +="</p>";
  document.getElementById('parilliset').innerHTML = jono;
}
//Tehtävä 2//
function muutaSalasanaksi()
{
  var ksana = document.getElementById('ksana').value;
  var salasana = "<p>";
  for (var j = 0; j < ksana.length; j++)
  {
    salasana += ksana[j] + 'Ö-';
  }
  salasana += "</p>";
  document.getElementById('salasana').innerHTML = salasana;
}
//Tehtävä 3//
function tarkistaKirjain()
{
  var annettuSana = document.getElementById('tsana').value;
  var vastaus = 'ei ole';
  for (var k = 0; k < annettuSana.length; k++)
  {
    if(annettuSana[k] == 'ö' || annettuSana[k] == 'Ö')
    {
      vastaus = 'on';
    }
  }
  document.getElementById('vastaus').innerHTML = '<p>' + vastaus + '</p>';
}
//Tehtävä 4//
function laskeKertoma()
{
  var kerLuku = document.getElementById('kertoma').value;
  var laskettu = 1;
  for (var z = 1; z <= kerLuku; z++)
  {
    laskettu*=z;
  }
  document.getElementById('kertomaVastaus').innerHTML = '<p>Luvun ' + kerLuku + ' kertoma on '+laskettu + '</p>';
}
//Tehtävä 5//
function hipHeijaa()
{
  var tuloste = '';
  for (var y = 1; y <= 100; y++)
   {
    if (y%3==0 && y%5==0)
     {
       tuloste+='Hip Heijaa ';
     }
     else if (y%5 == 0)
      {
       tuloste+='Heijaa ';
      }
      else if(y%3 == 0)
      {
        tuloste+='Hip ';
      }
      else
      {
        tuloste+=y+' ';
      }
      document.getElementById('lukujenTulostus').innerHTML = tuloste;
   }
}
//Tehtävä 6//
function ekatKymmenen()
{
  var kym = '<p>';
  for (var e = 1; e <=10; e++)
  {
    kym += e + ' ';
  }
  kym += '</p>';
  document.getElementById('lukujenTulostus10').innerHTML = kym;
}
//Tehtävä 7//
function yhteen()
{
  yhteensa = 0;
  for (var y = 1; y <=10; y++)
  {
    yhteensa += y;
  }
  document.getElementById('lukujenTulostusY').innerHTML = '<p>'+ yhteensa + '</p>';
}
//Tehtävä 8//
function potenssi()
{
  var koro = document.getElementById('kor').value;
  var pote = document.getElementById('pot').value;
  yht = koro;
  for (var p = 1; p < pote; p++)
  {
    yht *= koro;
  }
  document.getElementById('lukujenTulostusP').innerHTML = '<p>' + yht + '</p>';
}
//Tehtävä 9//
function etsiSuurinPienin()
{
  var taulu = [], temp;
  for (var x = 0; x < 5; x++)
  {
    temp = document.getElementById('taulukko['+x+']').value;
    temp = parseInt(temp);
    taulu.push(temp);
  }
  taulu = taulu.sort((a,b) => a-b);
  document.getElementById('lukujenTulostusT').innerHTML = '<p>Pienin luku: ' + taulu[0] + ' ja suurin luku: '+
  taulu[taulu.length-1];
}
//Tehtävä 10//
function muokkaaSalasana()
{
  var pw = '';
  var eka, toka;
  pw = document.getElementById('salis').value;
  var taulu = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z','Ã¥','Ã¤','Ã¶','w'];
  var temp = [];
  var lop = '';
  for (var s = 0; s < pw.length; s++)
  {
    eka = pw[s];
    //alert[pw];
    //alert[eka];
    temp.push(eka);
    //alert(eka);
    var lisa = Math.floor(Math.random()*taulu.length);
    toka = taulu[lisa];
    temp.push(toka);
    //alert(toka);
  }
  lop = temp.join('');
  document.getElementById('lukujenTulostusS').innerHTML = lop;
}
//Tehtävä 11//
function llisettomat()
{
  var nro1, nro2, palku, ralku, psumma=0, rsumma=0, pluvut='', rluvut='';
  nro1 = parseInt(document.getElementById('pnro').value);
  nro2 = document.getElementById('inro').value;
  if(nro1%2 == 0)
  {
    palku = nro1;
  }
  else {
    palku = nro1+1;
  }
  for(var b = palku; b<=nro2; b+=2)
  {
    pluvut += b + ' ';
    psumma += b;
    //alert(pluvut + ' ' + psumma);
  }
  if(nro1%2 == 0)
  {
    ralku = nro1+1;
  }
  else {
    ralku = nro1;
  }
  for(var r = ralku; r<=nro2; r+=2)
  {
    rluvut += r + ' ';
    rsumma += r;
  }
  document.getElementById('lukujenTulostusPari').innerHTML = '<p>Parilliset numerot: ' + pluvut +' ja niiden summa: ' + psumma + '</p><p>Parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma + '</p>';
}
