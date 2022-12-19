let mlmetre = document.getElementById("mlmetre");
let cmetre = document.getElementById("cmetre");
let dcmetre = document.getElementById("dcmetre");
let metre = document.getElementById("metre");
let dkmetre = document.getElementById("dkmetre");
let hkmetre = document.getElementById("hkmetre");
let kmetre = document.getElementById("kmetre");
mlmetre.addEventListener("input", function(){convMetre(this.id, this.value);});
cmetre.addEventListener("input", function(){convMetre(this.id, this.value);});
dcmetre.addEventListener("input", function(){convMetre(this.id, this.value);});
metre.addEventListener("input", function(){convMetre(this.id, this.value);});
dkmetre.addEventListener("input", function(){convMetre(this.id, this.value);});
hkmetre.addEventListener("input", function(){convMetre(this.id, this.value);});
kmetre.addEventListener("input", function(){convMetre(this.id, this.value);});


function convMetre(id, valeur){
    if(id == "mlmetre"){
      dcmetre.value = valeur / 100;
      cmetre.value = valeur /10;
      metre.value = valeur / 1000;
      dkmetre.value = valeur/10000;
      hkmetre.value = valeur/100000;
      kmetre.value = valeur/1000000;
    }else if(id == "cmetre"){
      mlmetre.value = valeur * 10;
      dcmetre.value = valeur / 10;
      metre.value = valeur / 100;
      dkmetre.value = valeur/1000;
      hkmetre.value = valeur/10000;
      kmetre.value = valeur/100000;


    }else if(id == "dcmetre"){
      cmetre.value = valeur*10;
      mlmetre.value = valeur * 100;
      metre.value = valeur / 10;
      dkmetre.value = valeur/100;
      hkmetre.value = valeur/1000;
      kmetre.value = valeur/10000;  
    }else if(id == "metre"){
      cmetre.value = valeur*100;
      mlmetre.value = valeur * 1000;
      dcmetre.value = valeur*10;
      dkmetre.value = valeur/10;
      hkmetre.value = valeur/100;
      kmetre.value = valeur/1000;    
    }
    else if(id == "dkmetre"){
      cmetre.value = valeur*1000;
      mlmetre.value = valeur * 10000;
      dcmetre.value = valeur*100;
      metre.value = valeur*10;
      hkmetre.value = valeur/10;
      kmetre.value = valeur/100;    
    }
    else if(id == "hkmetre"){
      cmetre.value = valeur*10000;
      mlmetre.value = valeur * 100000;
      dcmetre.value = valeur*1000;
      metre.value = valeur*100;
      dkmetre.value = valeur*10;
      kmetre.value = valeur/10;    
    }
    else if(id == "kmetre"){
      cmetre.value = valeur*100000;
      mlmetre.value = valeur * 1000000;
      dcmetre.value = valeur*10000;
      metre.value = valeur*1000;
      dkmetre.value = valeur*100;
      hkmetre.value = valeur*10;   
    }
    
}