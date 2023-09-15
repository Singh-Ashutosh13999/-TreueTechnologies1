var FLength=document.getElementById('FLength');
var TLength=document.getElementById('TLength');
var ToUnit=document.getElementById('ToUnit');
var ToUnit1=document.getElementById('Change');
var inputTypeValue,ResultTypeValue;

FLength.addEventListener("Keyup",myResult);

ToUnit.addEventListener("Change",myResult);

ToUnit1.addEventListener("Change",myResult);



function myResult()
{
     inputTypeValue=ToUnit.value;
     ResultTypeValue=ToUnit1.value;



     if(inputTypeValue==="Centimeter" && ResultTypeValue==="Milimeter")
     {
          ToUnit1.value=Number(ToUnit.value)*10;
     }elseif(inputTypeValue==="Centimeter" && ResultTypeValue==="Decimeter")
     {
          ToUnit1.value=Number(ToUnit.value)/10;
     }

     if(inputTypeValue==="Milimeter" && ResultTypeValue==="Centimeter")
     {
          ToUnit1.value=Number(ToUnit.value)/10;
     }else
     if(inputTypeValue==="Milimeter" && ResultTypeValue==="Decimeter")
     {
          ToUnit1.value=Number(ToUnit.value)/100;
     }

     if(inputTypeValue==="Decimeter" && ResultTypeValue==="Centimeter")
     {
          ToUnit1.value=Number(ToUnit.value)*10;
     }else
     if(inputTypeValue==="Decimeter" && ResultTypeValue==="Milimeter")
     {
          ToUnit1.value=Number(ToUnit.value)*100;
     }
}