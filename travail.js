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
    var cd = new Date();
    if (ak){
    /*pPartie profil content*/
        for (i=0; i<colist.length; i++){
            if (colist[i].id == idc){                
                document.getElementById("ppnom").innerHTML = colist[i].lastname ;
                document.getElementById("ppmetier").innerHTML = colist[i].profession;
                document.getElementById("ppemail").innerHTML = colist[i].email;
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
function chargeReservationProche(){
    var lc = JSON.parse(localStorage.getItem("iduserc"));
    var comm = JSON.parse(localStorage.getItem("tabc"));
    var idc = lc;
    var reser = JSON.parse(localStorage.getItem("reservation"));
    for (i=0; i<reser.length; i++){
        if (reser[i].idCommercant == idc){
            if (reser[i].etatReservation == 1){
                var doc = document.getElementById("info-res-planifie");
                doc.innerHTML +=  `<h2>Reservation N°: ${reser[i].idReservation}</h2>
                                <p>Détail reservation: ${reser[i].detailReservation}</p>
                                <p>Date reservation : ${reser[i].date_reservation}</p>
                                <p>Heure reservation : ${reser[i].heurereservation}</p>
                                <p>Lieu reservation: ${reser[i].heurereservation}</p>
                                <span onclick="verifRes(${reser[i].idReservation})"> Détail reservation</span>
                                <p style="margin-left:20px"><img src="Media/select.png" class="select-control"></p></br></br>`;

            }
        }
    }
}
function reservationproche (){
    var c = JSON.parse(localStorage.getItem("iduserc"));
    var com = JSON.parse(localStorage.getItem("tabc"));
    var idcom = c;
    var res = JSON.parse(localStorage.getItem("reservation"));
    for (j=0; j<res.length; j++){
        if(res[j].idCommercant == idcom){
            if(res[j].etatReservation == 0){
                var docc = document.getElementById("res-propo");
                docc.innerHTML += `<h2>Reservation N°: ${res[j].idReservation }</h2>
                                <p>Détail reservation:  ${res[j].detailReservation}</p>
                                <p>Date reservation: " ${res[j].date_reservation}</p>
                                <p>Heure reservation : ${res[j].heurereservation}</p>
                                <p>Lieu reservation : ${res[j].lieuReservation}</p>
                                <span onclick="confirmres(${res[j].idReservation})">Confirmer</span>
                                <p style="margin-left:20px"><img src="Media/select.png" class="select-control"></p></br></br> `;


            }
        }
    }
}
function verifRes(a){
    var doc = document.getElementById("detail-res");
    var clt = JSON.parse(localStorage.getItem("tab"));
    doc.style.display = "block";
    var reser = JSON.parse(localStorage.getItem("reservation"));
    for (i=0; i<reser.length; i++){
        if (reser[i].idReservation == a){
            for (j=0; j<clt.length; j++){
                if (reser[i].idClient == clt[j].id){
                    doc.innerHTML = `<h2>Id Reservation : ${a}</h2>
                    <p>Date Reservation : ${reser[i].detailReservation}</p>
                    <p>Date reservation : ${reser[i].date_reservation}</p>
                    <p>Heure reservation : ${reser[i].heurereservation}</p>
                    <p>Lieu reservation: ${reser[i].heurereservation}</p>
                    <h2>Nom client: ${clt[j].lastname}  ${clt[j].name}</h2>
                    <p>Adresse 1 : ${clt[j].Adress}</p>
                    <p>Adresse 2 : ${clt[j].Adresssec}</p>
                    <p>Cité : ${clt[j].city}</p>
                    <p>Code postale : ${clt[j].codepostal}</p>
                    <p>Gouvernorat : ${clt[j].gouvernement}</p>`;                    
                }
            }
        }
    }
}
function confirmres(a){
    var doc = document.getElementById("detail-res");
    doc.style.display = "block";
    var reser = JSON.parse(localStorage.getItem("reservation"));
    var clt = JSON.parse(localStorage.getItem("tab"));

    for (i=0; i<reser.length; i++){
        if (reser[i].idReservation == a){
            for (j=0; j<clt.length; j++){
                if (reser[i].idClient == clt[j].id){
                    doc.innerHTML = `<h2>Id Reservation : ${a}</h2>
                    <p>Date Reservation : ${reser[i].detailReservation}</p>
                    <p>Date reservation : ${reser[i].date_reservation}</p>
                    <p>Heure reservation : ${reser[i].heurereservation}</p>
                    <p>Lieu reservation: ${reser[i].heurereservation}</p>
                    <h2>Nom client: ${clt[j].lastname}  ${clt[j].name}</h2>
                    <p>Adresse 1 : ${clt[j].Adress}</p>
                    <p>Adresse 2 : ${clt[j].Adresssec}</p>
                    <p>Cité : ${clt[j].city}</p>
                    <p>Code postale : ${clt[j].codepostal}</p>
                    <p>Gouvernorat : ${clt[j].gouvernement}</p></br></br>
                    <p><button class="btn2" onclick="confirmer_res(${a})">Accepter</button>    <button class="btn2" onclick="Annuler_res(${a})">Refuser</button></p>`;                    
                }
            }
        }
    }

}
function Annuler_res(a){
    var resrv = JSON.parse(localStorage.reservation);
    var doc = document.getElementById("detail-res");
    for (i=0; i<resrv.length; i++){
        if (resrv[i].idReservation == a){
            resrv[i].etatReservation = 3;
            doc.style.display = "none";
        }
    }
}
function confirmer_res(a){
    var resrv = JSON.parse(localStorage.reservation);
    var doc = document.getElementById("detail-res");
    for (i=0; i<resrv.length; i++){
        if (resrv[i].idReservation == a){
            resrv[i].etatReservation = 1;
            doc.style.display = "none";
            
        }
    }
    localStorage.setItem("reservation", JSON.stringify(resrv));
}