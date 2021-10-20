function validadata(){
    var data = document.getElementById("nascimento").value; 
    
 
    var hoje = new Date();
    var nasc  = new Date(data);
    var idade = hoje.getFullYear() - nasc.getFullYear();
    var mes = hoje.getMonth() - nasc.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nasc.getDate())) idade--;
    
    if(idade < 16){
       alert("Pessoas menores de 16 não podem se cadastrar.");
       return false;
       
    }
 
    if(idade >= 16){
       window.alert("Maior de 16, pode se cadastrar.");
       return true;
    }
    
}

//validação email

   function validaemail(){
   
   usuario = field.value.substring(0, field.value.indexOf("@"));
   dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);

   if ((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
   document.getElementById("email").innerHTML="E-mail válido";
   alert("E-mail valido");
}
   else{
   document.getElementById("email").innerHTML="E-mail inválido";
   alert("E-mail invalido");
}
}
