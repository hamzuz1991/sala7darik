function checkid(){
    var lc = localStorage.getItem("iuser");
    var idc = JSON.parse(lc);
    var clist = localStorage.getItem("tab");
    var colist = JSON.parse(clist);
    console.log(idc);
    if (lc){
    document.getElementById("ppnom").innerHTML = colist[idc].lastname ;
    document.getElementById("ppmetier").innerHTML = colist[idc].profession;
    document.getElementById("ppabon").innerHTML = "Actif";
    document.getElementById("ppemail").innerHTML = colist[idc].email;
    /*pPartie profil content*/
    document.getElementById("pnom").innerHTML = colist[idc].name +"</br>";
    document.getElementById("pprenom").innerHTML= colist[idc].lastname +"</br>";
    document.getElementById("pdomaine").innerHTML= colist[idc].domain +"</br>";
    document.getElementById("pprpfession").innerHTML= colist[idc].profession +"</br>";
    document.getElementById("pemail").innerHTML = colist[idc].email +"</br>";
    document.getElementById("ptelp").innerHTML= colist[idc].numero +"</br>";
    document.getElementById("ptef").innerHTML= colist[idc].numerofixe +"</br>";
    document.getElementById("padr").innerHTML = colist[idc].Adress +"</br>";
    document.getElementById("padr2").innerHTML = colist[idc].Adresse2 +"</br>";
    document.getElementById("pcite").innerHTML = colist[idc].cite +"</br>";
    document.getElementById("pgov").innerHTML = colist[idc].gouvernement +"</br>";
    document.getElementById("pcp").innerHTML = colist[idc].codepostal +"</br>";
}   
else{
    
    window.location.href = "ijam3ana.html";
    
}
}
function deconexion (){
    localStorage.removeItem("iuser");
    window.location.href= "ijam3ana.html";
}