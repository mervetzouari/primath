let mlgramme = document.getElementById("mlgramme");
let cgrammee = document.getElementById("cgramme");
let dcgramme = document.getElementById("dcgramme");
let gramme = document.getElementById("gramme");
let dkgramme = document.getElementById("dkgramme");
let hkgramme = document.getElementById("hkgramme");
let kgramme = document.getElementById("kgramme");
mlgramme.addEventListener("input", function(){convPoids(this.id, this.value);});
cgramme.addEventListener("input", function(){convPoids(this.id, this.value);});
dcgramme.addEventListener("input", function(){convPoids(this.id, this.value);});
gramme.addEventListener("input", function(){convPoids(this.id, this.value);});
dkgramme.addEventListener("input", function(){convPoids(this.id, this.value);});
hkgramme.addEventListener("input", function(){convPoids(this.id, this.value);});
kgramme.addEventListener("input", function(){convPoids(this.id, this.value);});


function convPoids(id, valeur){
    if(id == "mlgramme"){
      dcgramme.value = valeur / 100;
      cgramme.value = valeur /10;
      gramme.value = valeur / 1000;
      dkgramme.value = valeur/10000;
      hkgramme.value = valeur/100000;
      kgramme.value = valeur/1000000;
    }else if(id == "cgramme"){
      mlgramme.value = valeur * 10;
      dcgramme.value = valeur / 10;
      gramme.value = valeur / 100;
      dkgramme.value = valeur/1000;
      hkgramme.value = valeur/10000;
      kgramme.value = valeur/100000;


    }else if(id == "dcgramme"){
      cgramme.value = valeur*10;
      mlgramme.value = valeur * 100;
      gramme.value = valeur / 10;
      dkgramme.value = valeur/100;
      hkgramme.value = valeur/1000;
      kgramme.value = valeur/10000;  
    }else if(id == "gramme"){
      cgramme.value = valeur*100;
      mlgramme.value = valeur * 1000;
      dcgramme.value = valeur*10;
      dkgramme.value = valeur/10;
      hkgramme.value = valeur/100;
      kgramme.value = valeur/1000;    
    }
    else if(id == "dkgramme"){
      cgramme.value = valeur*1000;
      mlgramme.value = valeur * 10000;
      dcgramme.value = valeur*100;
      gramme.value = valeur*10;
      hkgramme.value = valeur/10;
      kgramme.value = valeur/100;    
    }
    else if(id == "hkgramme"){
      cgramme.value = valeur*10000;
      mlgramme.value = valeur * 100000;
      dcgramme.value = valeur*1000;
      gramme.value = valeur*100;
      dkgramme.value = valeur*10;
      kgramme.value = valeur/10;    
    }
    else if(id == "kgramme"){
      cgramme.value = valeur*100000;
      mlgramme.value = valeur * 1000000;
      dcgramme.value = valeur*10000;
      gramme.value = valeur*1000;
      dkgramme.value = valeur*100;
      hkgramme.value = valeur*10;   
    }
    
}