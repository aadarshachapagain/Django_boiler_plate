$("#selectall").on('click', function () {
    if (document.getElementById('selectall').checked == true) {
        document.getElementById("Checkbox1").checked = true;
        document.getElementById("Checkbox2").checked = true;
        document.getElementById("Checkbox3").checked = true;
    }else{
        document.getElementById("Checkbox1").checked = false;
        document.getElementById("Checkbox2").checked = false;
        document.getElementById("Checkbox3").checked = false;
    }
});

$(document).ready(function(){
    var checkbox1 = document.getElementById("Checkbox1").value;
    var checkbox2 = document.getElementById("Checkbox2").value;
    var checkbox3 = document.getElementById("Checkbox3").value;

   if(checkbox1==true || checkbox2==true || checkbox3==true){
       document.getElementById('selectall').checked = true;
   }else{
       document.getElementById('selectall').checked = false;
   }
});

$('#Checkbox1').on('click',function () {
    var checkbox1 = document.getElementById('Checkbox1').checked;
    var checkbox2 = document.getElementById('Checkbox2').checked;
    var checkbox3 = document.getElementById('Checkbox3').checked;

    if(checkbox1==true && checkbox2==true && checkbox3==true){
       document.getElementById('selectall').checked = true;
   }else{
       document.getElementById('selectall').checked = false;
   }
});


$('#Checkbox2').on('click',function () {
    var checkbox1 = document.getElementById('Checkbox1').checked;
    var checkbox2 = document.getElementById('Checkbox2').checked;
    var checkbox3 = document.getElementById('Checkbox3').checked;

    if(checkbox1==true && checkbox2==true && checkbox3==true){
       document.getElementById('selectall').checked = true;
   }else{
       document.getElementById('selectall').checked = false;
   }
});


$('#Checkbox3').on('click',function () {
    var checkbox1 = document.getElementById('Checkbox1').checked;
    var checkbox2 = document.getElementById('Checkbox2').checked;
    var checkbox3 = document.getElementById('Checkbox3').checked;

    if(checkbox1==true && checkbox2==true && checkbox3==true){
       document.getElementById('selectall').checked = true;
   }else{
       document.getElementById('selectall').checked = false;
   }
});