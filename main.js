$(document).ready(function() {
  var wrap = $('#wrap');
  var brojac_elementa = 0;
  var brojac_parova = 0;
  for (var i = 0; i < 6; i++) {

    $(wrap).append('<div class="kombinacija"></div>')
  }
  var kombinacija = $('.kombinacija');
  for(var i = 0; i < 6; i++){

    for (var x = 0; x < 6; x++) {
      if (x < 4) {
        $(kombinacija[i]).append('<div class="element"></div>');
      }else if (x == 5) {
        $(kombinacija[i]).append('<div class="odabir_znaka"></div>');
      }else {
        $(kombinacija[i]).append('<div class="tacno_netacno"></div>')
      }
    }

  }
  var element = $('.element');
  var odabir_znaka = $('.odabir_znaka');
  var tacno_netacno = $('.tacno_netacno');
  for(var i = 0; i < 6; i++){
    for(var x = 1; x <= 6; x++){
      $(odabir_znaka[i]).append('<div class="znak">'+x+'</div>');
    }
  }
  var znak = $('.znak');
  for(var i = 0; i < 6; i++){
    for (var x = 0; x < 4; x++) {
      $(tacno_netacno[i]).append('<div class="kruzic"></div>');
    }
  }
  var kruzic = $('.kruzic');
  var tacna_kombinacija = new Array();
  var za_pamcenje =  new Array();
  for (var i = 0; i < 4; i++) {
    za_pamcenje[i] = ""+Math.floor((Math.random() * 6) + 1)+"";
  }


    var brojac_prikazivanja_odabira = 0;
    $(odabir_znaka).hide();
    function otkrivanje_odabira_znaka() {
      for (var i = 0; i < 4; i++) {
        tacna_kombinacija[i] = za_pamcenje[i];

      }
      console.log(tacna_kombinacija);
      $(odabir_znaka[brojac_prikazivanja_odabira]).show();
    }
var brojac_do_cetiri = 0;
otkrivanje_odabira_znaka();
var odabir_upisa = 0;
  $(odabir_znaka).children().on('click', function() {
    $(element[odabir_upisa]).append('<p>'+$(this).text()+'</p>');
    odabir_upisa++;
    brojac_do_cetiri++;
    if (brojac_do_cetiri == 4) {
      $(odabir_znaka).hide();
      brojac_do_cetiri = 0;
      brojac_prikazivanja_odabira++;

      provera_kombinacije();
    }
  });
  var broj_upisana_kombinacija;
  var upisana_kombinacija = new Array();
  var mesta_sa_tekstom;
  var tacno = 0;
  var nije_na_pravom_mestu = 0;
  function provera_kombinacije() {
    tacno = 0;
    nije_na_pravom_mestu = 0;
        mesta_sa_tekstom = $(kombinacija[brojac_prikazivanja_odabira-1]).children('.element');
        for (var i = 0; i < 4; i++) {
          upisana_kombinacija[i] = $(mesta_sa_tekstom[i]).text();
        }
        for (var i = 0; i < 4; i++) {
          if (upisana_kombinacija[i] == tacna_kombinacija[i]) {
            tacno++;
            upisana_kombinacija[i] = 7;
            tacna_kombinacija[i] = 8;
            //tacna_kombinacija[i] = false;
          }
        }

          for(var i = 0; i < 4; i++){
            for (var x = 0; x < 4; x++) {
              if(upisana_kombinacija[i] == tacna_kombinacija[x]){
                nije_na_pravom_mestu++;
                upisana_kombinacija[i] = 7;
                tacna_kombinacija[x] = 8;
              }
            }

          }
        bojenje_krugova();
        console.log("Broj tacnih elemenata je: " + tacno);
        console.log('Broj koji nije na pravom mestu je ' + nije_na_pravom_mestu);

      }
      var brojac_bojenja_kruga = 0;
      var grupa_kruzica;
      var brojac_kruzica = 0;
      function bojenje_krugova(){
        grupa_kruzica = $(tacno_netacno[brojac_kruzica]).children(kruzic);

        for (var i = 0; i < tacno; i++) {
          $(grupa_kruzica[brojac_bojenja_kruga]).css('background', 'red');
          brojac_bojenja_kruga++;
        }
        for (var i = 0; i < nije_na_pravom_mestu; i++) {
          $(grupa_kruzica[brojac_bojenja_kruga]).css('background', 'yellow');
          brojac_bojenja_kruga++;
        }
        brojac_bojenja_kruga = 0;
        brojac_kruzica++;
        provera_kraja();
      }
    function provera_kraja() {
      if (tacno == 4) {
        console.log('Pobedio si');
      }else {
        otkrivanje_odabira_znaka();
      }
    }
});
