function verifform() {


    var nom = document.getElementById('inputfirstname').value;
    var prenom = document.getElementById('inputlastname').value;
    console.log(prenom);
    var doma = document.getElementById('inputselectdom').value;
    var spec = document.getElementById('inputState1').value;
    var adress = document.getElementById('inputAddress').value;
    var gouv = document.getElementById('inputCity').value;
    var codep = document.getElementById('inputZip').value;
    var x = document.getElementById("login");
    var x1 = document.getElementById("login1");
    var y = document.getElementById("save");



    if ((nom == "") || (prenom == "") || (doma == "") || (spec == "") || (adress == "") || (gouv == "") || (codep == "") || (!verifemail) || (!verifpass) || (!veriftel)) {
        console.log("erreur");
        document.getElementById('sign').innerHTML = "ereue";
        return false
    } else {
        x.style.display = "none";

        y.style.display = "none";
        document.getElementById('logcom').innerHTML = "vous pouver utuliser notre site comme un commerct e notre site";

        mytab();
        return true
    }
}

function verifform2() {


    var nom = document.getElementById('inputfirstname').value;
    var prenom = document.getElementById('inputlastname').value;
    console.log(prenom);

    var adress = document.getElementById('inputAddress').value;
    var gouv = document.getElementById('inputCity').value;
    var codep = document.getElementById('inputZip').value;

    var x1 = document.getElementById("login1");
    var y = document.getElementById("save");



    if ((nom == "") || (prenom == "") || (adress == "") || (gouv == "") || (codep == "") || (!verifemail) || (!verifpass) || (!veriftel)) {
        console.log("erreur");
        document.getElementById('sign').innerHTML = "ereue";
        return false
    } else {

        x1.style.display = "none";
        y.style.display = "none";

        document.getElementById('logcol').innerHTML = "vous pouver reservez sur notre site";
        mytab();
        return true
    }
}

function mytab() {

    var nom = document.getElementById('inputfirstname').value;
    var prenom = document.getElementById('inputlastname').value;
    var doma = document.getElementById('inputselectdom').value;
    var spec = document.getElementById('inputState1').value;
    var tel = document.getElementById('inputTel.portable').value;
    var adress = document.getElementById('inputAddress').value;
    var gouv = document.getElementById('inputState2').value;
    var codep = document.getElementById('inputZip').value;
    var password = document.getElementById('inputPassword4').value;
    var tel = document.getElementById('inputTel.portable').value;
    var cite = document.getElementById('inputCity').value;
    var email = document.getElementById('inputEmail4').value;
    var Tfixe = document.getElementById('inputTel.fix').value;
    var aresse2 = document.getElementById('inputAddress2').value;
    var code = Math.floor((Math.random() * 100000) + 1);



    if (doma !== "") {
        USERc = {
            id: code,
            email: email,
            name: nom,
            lastname: prenom,
            key: password,
            Adress: adress + " " + aresse2,
            gouvernement: gouv,
            numero: tel,
            codepostal: codep,
            domain: doma,
            profession: spec,
            city: cite,
            telfixe: Tfixe,

        }
        var tuserc = JSON.parse(localStorage.getItem("tabc")) || [];
        if (tuserc == null) {
            tuserc = [];
        }
        tuserc.push(USERc);
        console.log(USERc);
        localStorage.setItem("tabc", JSON.stringify(tuserc));
        console.log(tuserc);
    } else {

        USER = {
            id: code,
            email: email,
            name: nom,
            lastname: prenom,
            key: password,
            Adress: adress + " " + aresse2,
            gouvernement: gouv,
            numero: tel,
            codepostal: codep,
            city: cite,
            telfixe: Tfixe,

        }

        var tuser = JSON.parse(localStorage.getItem("tab")) || [];
        if (tuser == null) {
            tuser = [];
        }
        tuser.push(USER);
        console.log(USER);
        localStorage.setItem("tab", JSON.stringify(tuser));
        console.log(tuser);
    }

}


function badel() {

    var x1 = document.getElementById("comm1");
    var x2 = document.getElementById("comm");


    x1.style.display = "none";

    x2.style.display = "none";

    
}


function domaine() {
    var dom = document.getElementById("inputselectdom").value;
    console.log(dom);
    if (dom == "Electrique") {


        console.log("gggg");
        document.getElementById("inputState1").options[0] = new Option("installation", "installation", true, false);
        document.getElementById("inputState1").options[1] = new Option("TV.reparation", "TV.reparation", true, false);
        document.getElementById("inputState1").options[2] = new Option("Praboliste", "Praboliste", true, false);
        document.getElementById("inputState1").options[3] = new Option("Reparation.electromenager", "Reparation.electromenager", true, false);
    }
    if (dom == "Planperie") {
        document.getElementById("inputState1").options[0] = new Option("canalisation", "canalisation", true, false);
        document.getElementById("inputState1").options[1] = new Option("climatisation", "climatisation", true, false);
        document.getElementById("inputState1").options[2] = new Option("chaudiere", "chaudiere", true, false);
        document.getElementById("inputState1").options[3] = new Option("Reparation.installation", "Reparation.installation", true, false);
    }
}

function verifemail() {
    var ch = document.getElementById('inputEmail4').value;
    var x = ch.indexOf("@");
    var y = ch.indexOf('.', x);
    console.log(x);

    if ((x > 0) && (y > 0)) {
        return true
    } else {
        document.getElementById('vemail').innerHTML = "emailincorrect";
        return false;
    }



}

function verifpass() {
    var ch = document.getElementById('inputPassword4').value;
    var patt1 = /[0-9]/g;
    var patt2 = /[a-z]/g;
    var patt3 = /[A-Z]/g;
    var patt4 = /[;:,!^$ù*.]/g;
    var x = ch.indexOf(' ');
    var e = 0



    if (patt1.test(ch).toString() == "true") {
        console.log(patt1.test(ch).toString())
        e = e + 1
        console.log(e)
    }

    if (patt2.test(ch).toString() == "true") {
        e = e + 1;
        console.log(e)
    }

    if (patt3.test(ch).toString() == "true") {
        e = e + 1;
        console.log(e)
    }

    if (patt4.test(ch).toString() == "true") {
        e = e + 1;
        console.log(e)
    }
    /*if (e=1){
        document.getElementById('vpass').innerHTML ="tres faible" ;
        
    }
    if (e=2){
        document.getElementById('vpass').innerHTML =" faible" ;
        
    }
    if (e=3){
        document.getElementById('vpass').innerHTML ="fort" ;
        
    } if (e=4){
        document.getElementById('vpass').innerHTML ="tres fort" ;
       
    }*/
    console.log(ch.length);
    if ((e > 2) && (ch.length > 8) && (x < 0)) {

        return true;
    } else {
        document.getElementById('vpass').innerHTML = "votre mot de passe il faut min un lettre maj et numbre et lettre minuscule ou ^$ù*,;:! et sa taille plus que 8 caractere et pas d'epaces";
        return false;
    }



}

function veriftel() {
    var ch = document.getElementById('inputTel.portable').value;
    var n = ch.indexOf(/['0-9']/i);
    if ((n < 0) && (tel.length != 8)) {
        document.getElementById('vptel').innerHTML = "invalie";
        return false;
    } else {

        return true;

    }
}

function loginn() {

    var mail = document.getElementById('exampleInputEmail1').value;
    // console.log(mail);
    var pass = document.getElementById('exampleInputPassword1').value;
    //var  x= localStorage.getItem("iduser");

    // console.log(pass);

    var tuser = JSON.parse(localStorage.getItem("tab"));

    //console.log(tuser);
    for (let i = 0; i < tuser.length; i++) {


        if ((tuser[i].email == mail) && (tuser[i].key == pass)) {
            localStorage.setItem("iduser", tuser[i].id);
            //profil();
            // window.open("espace%20client.html");
            console.log("true");
            document.getElementById('itenf1').innerHTML = ""
            window.open("espace%20client.html", "_self", "", "")
            break;


        } else {
            document.getElementById('itenf1').innerHTML = " login ou/et mot passe invalie"
            console.log(" login ou/et mot passe invalie");


        }
    }

}


function loginn2() {

    var mail = document.getElementById('exampleInputEmail1').value;
    console.log(mail);
    var pass = document.getElementById('exampleInputPassword1').value;
    console.log(pass);
    if ((mail == "") || (pass == "")) {
        alert(" login ou/et mp vide");
    } else {

        var tuserc = JSON.parse(localStorage.getItem("tabc"));
        console.log(tuserc);

        for (let i = 0; i < tuserc.length; i++) {


            if ((tuserc[i].email == mail) && (tuserc[i].key == pass)) {

                localStorage.setItem("iduserc", tuserc[i].id);
                console.log("true")
                window.open("profil.html", "_self", "", "")
                return true;
            } else {

                document.getElementById('itenf').innerHTML = " login ou/et mot passe invalie"
            }
        }
    }
}

function profil() {
    var x = localStorage.getItem("iduser");
    var tuser = JSON.parse(localStorage.getItem("tab"));
    var y = document.getElementById('histo');
    var y1 = document.getElementById('espace');
    var y2 = document.getElementById('histo2');
    var y3 = document.getElementById('mesresv');
    var y4 = document.getElementById('mesresv2');
    var y5 = document.getElementById('detailleresv');



    y.style.display = "none";
    y1.style.display = "none";
    y2.style.display = "none";
    y3.style.display = "none";
    y4.style.display = "none";
    y5.style.display = "none";



    for (let i = 0; i < tuser.length; i++) {
        if (tuser[i].id == x) {
            console.log(tuser[i]);

            document.getElementById('n.client').innerHTML = tuser[i].name;
            document.getElementById('p.client').innerHTML = tuser[i].lastname;
            document.getElementById('n1.client').innerHTML = tuser[i].name;
            document.getElementById('p1.client').innerHTML = tuser[i].lastname;
            document.getElementById('a.client').innerHTML = tuser[i].Adress;
            document.getElementById('c.client').innerHTML = tuser[i].city;
            document.getElementById('G.client').innerHTML = tuser[i].gouvernement;
            document.getElementById('Postal.client').innerHTML = tuser[i].codepostal;
            document.getElementById('mail.client').innerHTML = tuser[i].email;
            document.getElementById('tel.client').innerHTML = tuser[i].numero;
            document.g
        }

    }
}

function modifier1() {
    var x = localStorage.getItem("iduser");

    var tuser = JSON.parse(localStorage.getItem("tab"));


    for (let i = 0; i < tuser.length; i++) {
        if (tuser[i].id == x) {
            console.log(tuser[i]);
            ch = tuser[i].name + " " + tuser[i].lastname;
            console.log(ch)

            document.getElementById('namecomplet').innerHTML = ch;


            document.getElementById('inputTel.portable').placeholder = tuser[i].numero;
            document.getElementById('inputAddress').placeholder = tuser[i].Adress;
            document.getElementById('inputState2').value = tuser[i].gouvernement;
            document.getElementById('inputZip').placeholder = tuser[i].codepostal;

            document.getElementById('inputTel.portable').placeholder = tuser[i].numero;
            document.getElementById('inputCity').placeholder = tuser[i].city;

            document.getElementById('inputTel.fix').placeholder = tuser[i].telfixe;


        }

    }

}

function modifier2() {
    var x = localStorage.getItem("iduser");
    var tuser = JSON.parse(localStorage.tab);
    var tel = document.getElementById('inputTel.portable').value;
    var adress = document.getElementById('inputAddress').value;
    var gouv = document.getElementById('inputState2').value;
    var codep = document.getElementById('inputZip').value;
    var password = document.getElementById('inputPassword4').value;
    var tel = document.getElementById('inputTel.portable').value;
    var cite = document.getElementById('inputCity').value;
    var email = document.getElementById('inputEmail4').value;
    var Tfixe = document.getElementById('inputTel.fix').value;
    var aresse2 = document.getElementById('inputAddress2').value;
    var x1 = document.getElementById("login11");

    var y = document.getElementById("save11");

    for (let i = 0; i < tuser.length; i++) {
        if ((tuser[i].id == x) && (tel !== "")) {
            tuser[i].numero = tel;
        }

        if ((tuser[i].id == x) && (adress !== "")) {
            tuser[i].Adress = adress + aresse2;
        }


        if ((tuser[i].id == x) && (gouv !== "")) {
            tuser[i].gouvernement = gouv;

        }

        if ((tuser[i].id == x) && (codep !== "")) {
            tuser[i].codepostal = codep;
        }

        if ((tuser[i].id == x) && (password !== "") && verifpass()) {
            tuser[i].key = password;
        }

        if ((tuser[i].id == x) && (cite !== "")) {
            tuser[i].city = cite;
        }

        if ((tuser[i].id == x) && (email !== "") && verifemail()) {
            tuser[i].email = email;
        }
        if ((tuser[i].id == x) && (Tfixe !== "")) {
            tuser[i].telfixe = Tfixe;
        }
    }
    localStorage.setItem("tab", JSON.stringify(tuser));
    x1.style.display = "none";

    y.style.display = "none";
    document.getElementById('logcol').innerHTML = "votre profil est modifier";

}

function refrech() {
    window.open("file:///C:/Users/DELL/Desktop/recflow/sla7%20darik%202/espace%20client.html");
}

function historiques() {
    var u = localStorage.getItem("iduser");
    var x = document.getElementById('prof1');
    var x1 = document.getElementById('prof2');
    var x2 = document.getElementById('ajou');
    var x3 = document.getElementById('modif');
    var y = document.getElementById('histo');
    var y2 = document.getElementById('histo2');
    var y1 = document.getElementById('espace');
    var y3 = document.getElementById('mesresv');
    var y4 = document.getElementById('mesresv2');
    var y5 = document.getElementById('detailleresv');

    x.style.display = "none";
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    y3.style.display = "none";
    y4.style.display = "none";
    y5.style.display = "none";
    y.style.display = "block";
    y1.style.display = "block";
    y2.style.display = "block";
    var treserv = JSON.parse(localStorage.getItem("reservation"));
   var  n = document.getElementById('resvvl');

    for (let i = 0; i < treserv.length; i++)
    {
        if ((treserv[i].idclient == u) && (treserv[i].etatReservation == 2)) {
         
           
            n.insertAdjacentHTML("afterend", `<p>etat: terminer`);
            n.insertAdjacentHTML("afterend", `<p>lieu:  ${treserv[i].lieuReservation}</p>`);
            n.insertAdjacentHTML("afterend", `<p>heure:  ${treserv[i].heurereservation}</p>`);
            n.insertAdjacentHTML("afterend", `<p>date :  ${treserv[i].date_reservation}</p>`);
            n.insertAdjacentHTML("afterend", `<p>detail :  ${treserv[i].detailReservation}</p>`);
            n.insertAdjacentHTML("afterend", `<p><h2>Num de reservation :  ${treserv[i].idReservation} </h2></p>`);
        
        }
    }
    for (let i = 0; i < treserv.length; i++)
    {
        if ((treserv[i].idclient == u) && (treserv[i].etatReservation == 2)) {
         
           
            n.insertAdjacentHTML("afterend", `<p>etat: terminer`);
            n.insertAdjacentHTML("afterend", `<p>lieu:  ${treserv[i].lieuReservation}</p>`);
            n.insertAdjacentHTML("afterend", `<p>heure:  ${treserv[i].heurereservation}</p>`);
            n.insertAdjacentHTML("afterend", `<p>date :  ${treserv[i].date_reservation}</p>`);
            n.insertAdjacentHTML("afterend", `<p>detail :  ${treserv[i].detailReservation}</p>`);
            n.insertAdjacentHTML("afterend", `<p><h2>Num de reservation :  ${treserv[i].idReservation} </h2></p>`);

        }

}
}

function mesresvation() {
   
    var u = localStorage.getItem("iduser");
    var x = document.getElementById('prof1');
    var x1 = document.getElementById('prof2');
    var x2 = document.getElementById('ajou');
    var x3 = document.getElementById('modif');
    var y = document.getElementById('histo');
    var y2 = document.getElementById('histo2');
    var y1 = document.getElementById('espace');
    var y3 = document.getElementById('mesresv');
    var y4 = document.getElementById('mesresv2');
    var y5 = document.getElementById('detailleresv');

    x.style.display = "none";
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    y3.style.display = "block";
    y4.style.display = "block";
    y5.style.display = "none";
    y.style.display = "none";
    y1.style.display = "block";
    y2.style.display = "none";
    var treserv = JSON.parse(localStorage.getItem("reservation"));
    for (let i = 0; i < treserv.length; i++) {

        if ((treserv[i].idclient == u) && (treserv[i].etatReservation == 1)) {
            n = document.getElementById('resvvl');
            n.insertAdjacentHTML("afterend", `<p><span onclick="detaille(${treserv[i].idReservation},${treserv[i].idcom})" >affiche detaille</span></p>`);
            n.insertAdjacentHTML("afterend", `<p>etat: valide`);
            n.insertAdjacentHTML("afterend", `<p>lieu:  ${treserv[i].lieuReservation}</p>`);
            n.insertAdjacentHTML("afterend", `<p>heure:  ${treserv[i].heurereservation}</p>`);
            n.insertAdjacentHTML("afterend", `<p>date :  ${treserv[i].date_reservation}</p>`);
            n.insertAdjacentHTML("afterend", `<p>detail :  ${treserv[i].detailReservation}</p>`);
            n.insertAdjacentHTML("afterend", `<p><h2>Num de reservation :  ${treserv[i].idReservation} </h2></p>`);

        }



        if ((treserv[i].idclient == u) && (treserv[i].etatReservation == 0)) {
            m = document.getElementById('resvinvl');
            m.insertAdjacentHTML("afterend", `<a  onclick="detaille(${treserv[i].idReservation},${treserv[i].idCommercant})" >affiche detaille</a>`);
            m.insertAdjacentHTML("afterend", `<p> etat: non valide</p>`);
            m.insertAdjacentHTML("afterend", `<p> lieu :  ${treserv[i].lieuReservation}</p>`);
            m.insertAdjacentHTML("afterend", `<p> heure:  ${treserv[i].heurereservation}</p>`);
            m.insertAdjacentHTML("afterend", `<p> date :  ${treserv[i].date_reservation}</p>`);
            m.insertAdjacentHTML("afterend", `<p> detail :  ${treserv[i].detailReservation}</p>`);
            m.insertAdjacentHTML("afterend", `<p> <h2>Num de reservation :  ${treserv[i].idReservation} </h2></p>`);
        }
    }
}

function detaille(n, m) {
    var treserv = JSON.parse(localStorage.getItem("reservation"));
    var tuserc = JSON.parse(localStorage.getItem("tabc"));
    var y5 = document.getElementById('detailleresv');
    d = document.getElementById('resrvdet2');
    y5.style.display = "block";
    console.log(n)
    console.log(m)

    for (let i = 0; i < tuserc.length; i++)
     {


        if (tuserc[i].id == m)
         {
            d.insertAdjacentHTML("afterend", `<p>adresse de technisien : ${tuserc[i].email}</p>`);
            d.insertAdjacentHTML("afterend", `<p>numero de technisien : ${tuserc[i].city}</p>`);
            d.insertAdjacentHTML("afterend", `<p>numero de technisien : ${tuserc[i].gouvernement}</p>`);
            d.insertAdjacentHTML("afterend", `<p>adresse de technisien : ${tuserc[i].Adress}</p>`);

            d.insertAdjacentHTML("afterend", `<p>numero de technisien : ${tuserc[i].numero}</p>`);

            d.insertAdjacentHTML("afterend", `<p> prenom de technisien :${tuserc[i].lastname}</p> `);
            
            d.insertAdjacentHTML("afterend", `<p>nom de technisien : ${tuserc[i].name}</p>`);



        }
    }

    for (let i = 0; i < treserv.length; i++) 
    {
    
        if ((treserv[i].id == n) && (treserv[i].etatReservation == 1)) 
        {
            d.insertAdjacentHTML("afterend", `<p>etat: valide</p>`);
        }
        if ((treserv[i].id == n) && (treserv[i].etatReservation == 0)) 
        {
            d.insertAdjacentHTML("afterend", `<p>etat: non valide</p>`);
        }


        if (treserv[i].idReservation == n)
         {

            d.insertAdjacentHTML("afterend", `<p> lieu  :  ${treserv[i].lieuReservation}</p>`);
            d.insertAdjacentHTML("afterend", `<p> heure:  ${treserv[i].heurereservation}</p>`);
            d.insertAdjacentHTML("afterend", `<p> date :  ${treserv[i].date_reservation}</p>`);
            d.insertAdjacentHTML("afterend", `<p> detail :  ${treserv[i].detailReservation}</p>`);
            d.insertAdjacentHTML("afterend", `<p> <h4>Num de reservation :  ${treserv[i].idReservation} </h4></p>`);

        }

    }

}

function test() {

    var treserv = []
    reserva = {
        idReservation: "12245",
        idclient: "65861",
        idCommercant: "64419",
        date_reservation: "2018-01-02",
        detailReservation: "panne installation",
        heurereservation: "5",
        etatReservation: "0",
        lieuReservation: "tunis",


    }

    treserv.push(reserva);

    localStorage.setItem("reservation", JSON.stringify(treserv));


}

function deco(){
localStorage.removeItem("iduser");
window.open("inscriclient.html", "_self", "", "")}