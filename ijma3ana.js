function domaine() {
   var dom = document.getElementById("inputselectdom").value;
 console.log(dom);
 if ( dom =="Electrique") {
    /* document.getElementById("p1").innerHTML='Installation';
     document.getElementById('p2').innerHTML="TV.reparation";
     document.getElementById('p3').innerHTML="Praboliste";
     document.getElementById('p4').innerHTML="Reparation.electromenager";
 }
 if ( dom =="Planperie") {
    document.getElementById('p1').innerHTML="Installation";
    document.getElementById('p2').innerHTML="climatisation";
    document.getElementById('p3').innerHTML="chaudiere";
    document.getElementById('p4').innerHTML="Reparation.installation";
} */

console.log("gggg");
document.getElementById("inputState1").options[0]=new Option("installation", "installation", true, false);
document.getElementById("inputState1").options[1]=new Option("TV.reparation", "TV.reparation", true, false);
document.getElementById("inputState1").options[2]=new Option("Praboliste", "Praboliste", true, false);
document.getElementById("inputState1").options[3]=new Option("Reparation.electromenager", "Reparation.electromenager", true, false);
}
if ( dom =="Planperie") {
    document.getElementById("inputState1").options[0]=new Option("canalisation", "canalisation", true, false);
    document.getElementById("inputState1").options[1]=new Option("climatisation", "climatisation", true, false);
    document.getElementById("inputState1").options[2]=new Option("chaudiere", "chaudiere", true, false);
    document.getElementById("inputState1").options[3]=new Option("Reparation.installation", "Reparation.installation", true, false);
}

}