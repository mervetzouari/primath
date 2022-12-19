
let ctC = document.getElementById("ctC");
let care = document.getElementById("care");
let AirC = document.getElementById("AirC");
let r = document.getElementById("r");
let d = document.getElementById("d");
let AirCer = document.getElementById("AirCer");
let cercle = document.getElementById("cercle");


ctC.addEventListener("input", function(){calcCarre(this.id, this.value);});
care.addEventListener("input", function(){calcCarre(this.id, this.value);});
AirC.addEventListener("input", function(){calcCarre(this.id, this.value);});
ctLg.addEventListener("input", function(){calcCarre(this.id, this.value);});
ctLr.addEventListener("input", function(){calRec(this.id, this.value);});
totalrect.addEventListener("input", function(){calRec(this.id, this.value);});
totalAirR.addEventListener("input", function(){calRec(this.id, this.value);});
h.addEventListener("input", function(){calTri(this.id, this.value);});
b.addEventListener("input", function(){calTri(this.id, this.value);});
totalAirT.addEventListener("input", function(){calTri(this.id, this.value);});
r.addEventListener("input", function(){calCer(this.id, this.value);});
d.addEventListener("input", function(){calCer(this.id, this.value);});
cercle.addEventListener("input", function(){calCer(this.id, this.value);});
AirCer.addEventListener("input", function(){calCer(this.id, this.value);});



function calcCarre(id, valeur){
    if(id == "ctC"){
      care.value = valeur * 4;
      AirC.value = valeur * valeur ;
    }else if(id == "care"){
      ctC.value = valeur / 4;
      AirC.value = ctC.value * ctC.value
    }
    
};

function calRec(){

  var ctLg, ctLr, totalrect,totalAirR;
  ctLg = Number(document.getElementById("ctLg").value);
  ctLr = Number(document.getElementById("ctLr").value);
  totalrect = (ctLr + ctLg)*2;
  totalAirR = ctLr * ctLg ;
  document.getElementById("totalrect").value = totalrect;
  document.getElementById("totalAirR").value = totalAirR;
};

function calTri(){

  var h, b, totalAirT;
  h = Number(document.getElementById("h").value);
  b = Number(document.getElementById("b").value);
  totalAirT = (h * b)/2;
  document.getElementById("totalAirT").value = totalAirT;
  
};

function calCer(id,valeur){

  if(id == "r"){
    d.value = valeur * 2;
    cercle.value = (valeur * 2 * 314)/100 ;
    AirCer.value = (valeur * valeur * 314)/100;
  }else if(id == "d"){
    r.value = valeur / 2;
    cercle.value = (valeur * 314)/100;
    AirCer.value = (r.value * r.value * 314)/100;
  }
  
}

