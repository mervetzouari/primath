let mllitre = document.getElementById("mllitre");
let clitre = document.getElementById("clitre");
let dclitre = document.getElementById("dclitre");
let litre = document.getElementById("litre");
let dklitre = document.getElementById("dklitre");
let hklitre = document.getElementById("hklitre");
let klitre = document.getElementById("klitre");
mllitre.addEventListener("input", function(){convLitre(this.id, this.value);});
clitre.addEventListener("input", function(){convLitre(this.id, this.value);});
dclitre.addEventListener("input", function(){convLitre(this.id, this.value);});
litre.addEventListener("input", function(){convLitre(this.id, this.value);});
dklitre.addEventListener("input", function(){convLitre(this.id, this.value);});
hklitre.addEventListener("input", function(){convLitre(this.id, this.value);});
klitre.addEventListener("input", function(){convLitre(this.id, this.value);});


function convLitre(id, valeur){
    if(id == "mllitre"){
      dclitre.value = valeur / 100;
      clitre.value = valeur /10;
      litre.value = valeur / 1000;
      dklitre.value = valeur/10000;
      hklitre.value = valeur/100000;
      klitre.value = valeur/1000000;
    }else if(id == "clitre"){
      mllitre.value = valeur * 10;
      dclitre.value = valeur / 10;
      litre.value = valeur / 100;
      dklitre.value = valeur/1000;
      hklitre.value = valeur/10000;
      klitre.value = valeur/100000;


    }else if(id == "dclitre"){
      clitre.value = valeur*10;
      mllitre.value = valeur * 100;
      litre.value = valeur / 10;
      dklitre.value = valeur/100;
      hklitre.value = valeur/1000;
      klitre.value = valeur/10000;  
    }else if(id == "litre"){
      clitre.value = valeur*100;
      mllitre.value = valeur * 1000;
      dclitre.value = valeur*10;
      dklitre.value = valeur/10;
      hklitre.value = valeur/100;
      klitre.value = valeur/1000;    
    }
    else if(id == "dklitre"){
      clitre.value = valeur*1000;
      mllitre.value = valeur * 10000;
      dclitre.value = valeur*100;
      litre.value = valeur*10;
      hklitre.value = valeur/10;
      klitre.value = valeur/100;    
    }
    else if(id == "hklitre"){
      clitre.value = valeur*10000;
      mllitre.value = valeur * 100000;
      dclitre.value = valeur*1000;
      litre.value = valeur*100;
      dklitre.value = valeur*10;
      klitre.value = valeur/10;    
    }
    else if(id == "klitre"){
      clitre.value = valeur*100000;
      mllitre.value = valeur * 1000000;
      dclitre.value = valeur*10000;
      litre.value = valeur*1000;
      dklitre.value = valeur*100;
      hklitre.value = valeur*10;   
    }
    
}
