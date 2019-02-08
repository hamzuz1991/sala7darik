function deconexion(){
    localStorage.removeItem("iduser");
    window.location.href= "inscriclient.html";
}
function verif_user (){
    var user = JSON.parse(localStorage.getItem("tab"));
    var id = JSON.parse(localStorage.getItem("iduser"));
    if (id){
        for (i=0; i<user.length; i++){
            if (user[i].id == id){
                document.getElementById("ppnom").innerHTML = user[i].lastname +"  "+user[i].name;
                document.getElementById("ppemail").innerHTML = user[i].email;
                document.getElementById("ppville").innerHTML = user[i].gouvernement;
                break;
            }
        }
    }
    else{
        window.location.href = "inscriclient.html";
    }
}
function verif_job(){
    var xx = document.getElementById("sjob").value;
    console.log(xx);
    var doc = document.getElementById("prof");
    var doc2 = document.getElementById("cinfo");
    document.getElementById("cinfo").innerHTML = "";
    document.getElementById("prof").innerHTML = "...";
    document.getElementById("cinfo").style.display="none";
    document.getElementById("prof").style.display="none";
    document.getElementById("affres").style.display="none";
    document.getElementById("btn3").style.display="none";
    if (xx == "Electrique"){
        doc.style.display = "block";
        doc.innerHTML = `<h2>Veuillez selectinner la spécialité :</h2>
                        <select onchange="verif_comm()" class="select-job" id="sprof">
                            <option selected>...</option>
                            <option value="installation">Installation</option>
                            <option value="TV.reparation">TV réparation</option>
                            <option value="Praboliste">Paraboliste</option>
                            <option value="Reparation.electromenager">Réparation éléctroménager</option></select>`;
    }
    else if (xx =="Planperie"){
        doc.style.display = "block";
        doc.innerHTML = `<h2>Veuillez selectinner la spécialité :</h2>
                        <select onchange="verif_comm()" class="select-job" id="sprof">
                            <option selected>...</option>
                            <option value="canalisation">Canalisation</option>
                            <option value="climatisation">Climatisation</option>
                            <option value="chaudiere">Chaudière</option>
                            <option value="Reparation.installation">Réparation installation</option></select>`;
    }
    else if(xx == "..."){
        doc.innerHTML="";
        doc2.style.display = "none";
    }
}
function verif_comm(){
    var clt = JSON.parse(localStorage.getItem("tab"));
    var id = JSON.parse(localStorage.getItem("iduser"));
    var comm = JSON.parse(localStorage.getItem("tabc"));
    var dom = (document.getElementById("sjob").value).toUpperCase();
    var prof = (document.getElementById("sprof").value).toUpperCase();
    console.log(dom);
    console.log(prof);
    doc = document.getElementById("cinfo");
    document.getElementById("cinfo").innerHTML = "";
    for (i=0; i<clt.length; i++){
        if (clt[i].id == id){
            var ville = (clt[i].gouvernement).toUpperCase();
        }
    }
    var k= false;
    for (i=0; i<comm.length; i++){
        if ((ville == (comm[i].gouvernement).toUpperCase()) && (dom == (comm[i].domain).toUpperCase())&& (prof == (comm[i].profession).toUpperCase())){
            doc.innerHTML += `<span id="span${i}" onclick="affiche_res(${i})"><p><h2>Nom: </h2><h3>${comm[i].lastname} ${comm[i].name}</h3>
                                <h2>Adresse: </h2><h3>${comm[i].Adress}  ${comm[i].city} ${comm[i].gouvernement} ${comm[i].codepostal}</h3>
                                <h2>Numéro tel: </h2><h3>${comm[i].numero}</h3></p></span> `;
            doc.style.display = "block";
            k = true;            
            localStorage.setItem("ll", JSON.stringify(comm[i].id));
        }
    }
    if (k == false){
        doc.style.display = "block";
        doc.innerHTML = "<h2>Nous n'avons pas encore de Bricoleur dans votre région</h2";
    }
}
function verif_reservation(a){
    var dateres = document.getElementById("dateres").value;
    var heureres = document.getElementById("heureres").value;
    var byear = dateres.slice(0,4);
    var bmonth = dateres.slice(5,7);
    var bday = dateres.slice(8,10);
    var dres = new Date(byear, bmonth-1, bday);
    var ddd = new Date();
    var c = JSON.parse(localStorage.getItem("reservation")); 
    var ccom = true;
    if (dres > ddd){
        for (j=0; j<c.length; j++){
            if (c[j].idCommercant == a){
                ccom = false;
                break;
            }
        }
        if (ccom){
            return true;                        
        }
        else{
            for (i=0; i<c.length; i++){
                if (c[i].idCommercant == a){
                    var rd = (c[i].date_reservation);
                    byear = rd.slice(0,4);
                    bmonth = rd.slice(5,7);
                    bday = rd.slice(8,10);
                    var nd = new Date(byear, bmonth-1, bday);
                    if (exist_day(nd, dres, heureres, c[i].heurereservation)){
                        return true;
                    }
                    else{
                        return false;
                    }                 
                }
            }
        }
    }
}
function exist_day(a, b, c, d){
  if ((a.getFullYear() != b.getFullYear())||(a.getMonth() != b.getMonth())||(a.getDate() != b.getDate())||(c != d)){
    return true;         
  }
  else{
    return false;
}
}
function reserver(){
    var id = JSON.parse(localStorage.getItem("ll"));
    var idclient = JSON.parse(localStorage.getItem("iduser"));
    localStorage.removeItem("ll");
    var tab = JSON.parse(localStorage.getItem("reservation")); 
    var tab2 = JSON.parse(localStorage.getItem("tab"));
    var dateres = document.getElementById("dateres").value;
    var heureres = document.getElementById("heureres").value;
    var detailres = document.getElementById("detailres").value;
    for (i=0; i<tab2.length; i++){
        if (tab2[i].id == id){
            var lieu = tab2[i].gouvernement;
            break;
        }
    }
    var doc = document.getElementById("msg");
    var byear = dateres.slice(0,4);
    var bmonth = dateres.slice(5,7);
    var bday = dateres.slice(8,10);
    var dres = new Date(byear, bmonth-1, bday);
    var ddd = new Date();
    if ((dateres) && (heureres) && (detailres) && (dres > ddd)){ 
        var vr =  verif_reservation(id);
       if (vr){
        id_reservation = Math.floor((Math.random() * 1000) + 1);
        doc.innerHTML = ""; 
        var res = {idReservation : id_reservation,
                   idCommercant : id,
                   idClient : idclient,
                   etatReservation : 0,
                   heurereservation : heureres,
                   date_reservation : dateres,
                   lieuReservation : lieu,
                   detailReservation : detailres };
        if (tab){
            tab.push(res);
            localStorage.setItem("reservation", JSON.stringify(tab));
            window.location.href = "espace client.html";
        }
        else{
            tab = [];
            tab.push(res);
            localStorage.setItem("reservation", JSON.stringify(tab));
            window.location.href = "espace client.html";
        }
       }
       else{
        doc.innerHTML = "Il existe déja une réservation pour cette date et heure";           
       }
    }
    else if ((dateres == "") || (dres < ddd)){
        doc.innerHTML = "Veuillez vérifier la date de la reservation";
    }
    else if (heureres == ""){
        doc.innerHTML = "veuillez vérifier l'heure de la reservation";
    }
    else {
        doc.innerHTML = "Veuillez vérifier la partie détail de la reservation";
    }
}
function affiche_res(i){
    var doc1 = document.getElementById("affres");
    doc1.style.display = "block";   
    document.getElementById("btn3").style.display = "block";
    document.getElementById(`span${i}`).style.backgroundColor = "black";
    for (j=0; j<10; j++){
        if (i != j){
            document.getElementById(`span${j}`).style.background = "none";            
        }
    }
}
function annuler(){
    window.location.href="reservation.html";
}
