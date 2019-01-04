function checkabonnement(a, aa, f){
    var cd = new Date();
    var bday = aa.slice(8,10);
    var bmonth = aa.slice(5,7);
    var byear = aa.slice(0,4);
    var adate = new Date(byear, bmonth-1, bday);
    var x = (adate - cd);
    x = (x / 2629746000) + f;
    
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
        var commer = JSON.parse(localStorage.tab);
        for (j=0; j<commer.length; j++){
            if (id == commer[j].id){
                commer[j].abonnement = true;
                commer[j].dateAbonnement = new Date();
                commer[j].forfait = f;
                break;
            }
        }
        localStorage.setItem("tab", JSON.stringify(commer));
    }
    function checkid(){
        var lc = localStorage.getItem("idcom");
        var idc = JSON.parse(lc);
        var clist = localStorage.getItem("tab");
        var colist = JSON.parse(clist);
        var cd = new Date();
        if (lc){
        document.getElementById("ppnom").innerHTML = colist[idc].lastname ;
        document.getElementById("ppmetier").innerHTML = colist[idc].profession;
        document.getElementById("ppemail").innerHTML = colist[idc].email;
            for (i=0; i<colist.length; i++){
                if (colist[i].id == idc){
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
            window.location.href = "ijam3ana.html";        
        }
    }
function deconexion (){
    localStorage.removeItem("idcom");
    window.location.href= "ijam3ana.html";
}
function historique(){
    var reserv = JSON.parse(localStorage.getItem("reservation"));
    var lc = localStorage.getItem("idcom");
    for (i=0; i<reserv.length; i++){        
        if (reserv[i].idCommercant == lc){
            if (reserv[i].etatReservation == 2){
                
            var doc = document.getElementById("info-historique");
            var h1 = document.createElement("h2");
            var h1t = document.createTextNode("Reservation N° " + reserv[i].idReservation);
            h1.appendChild(h1t);
            doc.appendChild(h1);
            var p = document.createElement("p");
            var pt = document.createTextNode(reserv[i].detailReservation);
            p.appendChild(pt);
            doc.appendChild(p);
            var span = document.createElement("p");
            var spant = document.createTextNode("Date : "+reserv[i].date_reservation);
            span.appendChild(spant);
            doc.appendChild(span);
            var span = document.createElement("p");
            var spant = document.createTextNode("Heure : "+reserv[i].heurereservation);
            span.appendChild(spant);
            doc.appendChild(span);
            var span = document.createElement("p");
            var spant = document.createTextNode("Lieu : "+reserv[i].lieuReservation);
            span.appendChild(spant);
            doc.appendChild(span);
            }
        }
    }
}