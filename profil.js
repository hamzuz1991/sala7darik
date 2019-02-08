function checkabonnement(a, aa, f){
var cd = new Date();
var bday = aa.slice(8,10);
var bmonth = aa.slice(5,7);
var byear = aa.slice(0,4);
var adate = new Date(byear, bmonth-1, bday);
var x = (adate - cd);
x = (x / 2629746000) + f;
console.log(x);

if (a){         
    if (x>0){
        return true;
    }
    else{
        return false;
    }
}
}
function createabonnement(id, f){
    var commer = JSON.parse(localStorage.tabc);
    for (j=0; j<commer.length; j++){
        if (id == commer[j].id){
            commer[j].abonnement = true;
            commer[j].dateAbonnement = new Date();
            commer[j].forfait = f;
            break;
        }
    }
    localStorage.setItem("tabc", JSON.stringify(commer));
}
function checkid(){
    var ak = localStorage.getItem("iduserc");
    var idcc = JSON.parse(ak);
    var clist = localStorage.getItem("tabc");
    var colist = JSON.parse(clist);
    lc = idcc; 
    idc = lc;
    if (ak){ 
        for (i=0; i<colist.length; i++){
            if (colist[i].id == idc){
                document.getElementById("ppnom").innerHTML = colist[i].lastname ;
                document.getElementById("ppmetier").innerHTML = colist[i].profession;
                document.getElementById("ppemail").innerHTML = colist[i].email;
                /*pPartie profil content*/
                document.getElementById("pnom").innerHTML = colist[i].name +"</br>";
                document.getElementById("pprenom").innerHTML= colist[i].lastname +"</br>";
                document.getElementById("pdomaine").innerHTML= colist[i].domain +"</br>";
                document.getElementById("pprpfession").innerHTML= colist[i].profession +"</br>";
                document.getElementById("pemail").innerHTML = colist[i].email +"</br>";
                document.getElementById("ptelp").innerHTML= colist[i].numero +"</br>";
                document.getElementById("ptef").innerHTML= colist[i].telfixe +"</br>";
                document.getElementById("padr").innerHTML = colist[i].Adress +"</br>";
                document.getElementById("pcite").innerHTML = colist[i].city +"</br>";
                document.getElementById("pgov").innerHTML = colist[i].gouvernement +"</br>";
                document.getElementById("pcp").innerHTML = colist[i].codepostal +"</br>";
                if (colist[i].abonnement != null){
                    if (checkabonnement(colist[i].abonnement, colist[i].dateAbonnement, colist[i].forfait)){
                        document.getElementById("ppabon").innerHTML = "Actif";
                        document.getElementById("ppabon").style.color = "Green";                      
                    }
                }
                else{
                    if (colist[i].abonnement == null){
                        createabonnement(idc, 3);
                    }
                    else{
                        localStorage.setItem("msg", "Votre abonnement à expiré");
                        document.getElementById("ppabon").innerHTML = "Innactif";
                        document.getElementById("ppabon").style.color = "Red";
                        window.location.href = "abonnement.html";
                    }
                }
            }
        }
    }
    else{    
        window.location.href = "inscricomm.html";        
    }
}
function deconexion (){
    localStorage.removeItem("iduserc");
    window.location.href= "inscricomm.html";
}