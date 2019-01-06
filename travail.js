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
    var ak = localStorage.getItem("iuser");
    var idcc = JSON.parse(ak);
    var clist = localStorage.getItem("tab");
    var colist = JSON.parse(clist);
    lc = colist[idcc].id ; 
    idc = lc;
    var cd = new Date();
    if (lc){
    document.getElementById("ppnom").innerHTML = colist[idc].lastname ;
    document.getElementById("ppmetier").innerHTML = colist[idc].profession;
    document.getElementById("ppemail").innerHTML = colist[idc].email;
    /*pPartie profil content*/
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
        window.location.href = "inscricomm.html";        
    }
}
function deconexion (){
    localStorage.removeItem("iuser");
    window.location.href= "inscricomm.html";
}
function chargeReservationProche(){
    var lc = JSON.parse(localStorage.getItem("iuser"));
    var comm = JSON.parse(localStorage.getItem("tab"));
    var idc = comm[lc].id;
    var reser = JSON.parse(localStorage.getItem("reservation"));
    for (i=0; i<reser.length; i++){
        if (reser[i].idCommercant == idc){
            if (reser[i].etatReservation == 1){
                console.log(reser[i].detailReservation);
                var doc = document.getElementById("info-res-planifie");
                var h1 = document.createElement("h2");
                var h1t = document.createTextNode("Reservation N° " + reser[i].idReservation);
                h1.appendChild(h1t);
                doc.appendChild(h1);
                var p = document.createElement("p");
                var ptp = document.createTextNode("Détail reservation: " + reser[i].detailReservation);
                p.append(ptp);
                doc.appendChild(p);
                var pp = document.createElement("p");
                var ppt = document.createTextNode("Date reservation: " + reser[i].date_reservation);
                pp.append(ppt);
                doc.append(pp);
                var ppp = document.createElement("p");
                var pppt = document.createTextNode("Heure reservation : "+ reser[i].heurereservation);
                ppp.append(pppt);
                doc.append(ppp);
                var plieu = document.createElement("p");
                var tplieu = document.createTextNode("Lieu reservation: "+ reser[i].lieuReservation);
                plieu.append(tplieu);
                doc.append(plieu);
            }
        }
    }
}
function reservationproche (){
    var c = JSON.parse(localStorage.getItem("iuser"));
    var com = JSON.parse(localStorage.getItem("tab"));
    var idcom = com[c].id;
    var res = JSON.parse(localStorage.getItem("reservation"));
    for (j=0; j<res.length; j++){
        if(res[j].idCommercant == idcom){
            if(res[j].etatReservation == 0){
                var docc = document.getElementById("res-propo");
                var h1 = document.createElement("h2");
                var ppt = document.createTextNode("Reservation N°: " + res[j].idReservation);
                h1.append(ppt);
                docc.appendChild(h1);
                var p = document.createElement("p");
                var ptp = document.createTextNode("Détail reservation: " + res[j].detailReservation);
                p.append(ptp);
                docc.appendChild(p);
                var pp = document.createElement("p");
                var ppt = document.createTextNode("Date reservation: " + res[j].date_reservation);
                pp.append(ppt);
                docc.append(pp);
                var ppp = document.createElement("p");
                var pppt = document.createTextNode("Heure reservation : "+ res[j].heurereservation);
                ppp.append(pppt);
                docc.append(ppp);
                var plieu = document.createElement("p");
                var tplieu = document.createTextNode("Lieu reservation: "+ res[j].lieuReservation);
                plieu.append(tplieu);
                docc.append(plieu);
            }
        }
    }
}