// This is a JavaScript file

$(document).on("click","#btnSomar", function(){
  var sex = $("input[name='sexo']:checked").val();
  var h = $("#altura").val();
  var p = $("#peso").val();
  var i = $("#idade").val();
  var a = $("#atividade").val();

  if(sex == 'f'){
    var tmb = 655 + (9.6 * parseFloat(p)) + (1.8 * parseFloat(h)) - (4.7 * parseFloat(i));
  }
  else{
    var tmb = 66 + (13.7 * parseFloat(p)) + (5 * parseFloat(h)) - (6.8 * parseFloat(i));
  }

  if(a == 1){
    var resultado = (tmb * 1.2);
  }
  else if(a == 2){
    var resultado = (tmb * 1.375);
  }
  else if(a == 3){
    var resultado = (tmb * 1.55);
  }
  else if(a == 4){
    var resultado = (tmb * 1.725);
  }
  else{
    var resultado = (tmb * 1.9);
  }

  $("#resultado").val(resultado);
})