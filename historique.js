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
}   
else{
    
    window.location.href = "ijam3ana.html";
    
}
}
function deconexion (){
    localStorage.removeItem("iuser");
    window.location.href= "ijam3ana.html";
}