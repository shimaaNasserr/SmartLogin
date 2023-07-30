var nameInput = document.getElementById("validationServer01");
var emailInput = document.getElementById("validationServer02");
var passInput = document.getElementById("validationServer03");
var SignUpbutton = document.getElementById("mybtn");

var dataList =[];
if(localStorage.getItem("dataList")!=null){
    dataList = JSON.parse(localStorage.getItem("dataList"))
} 

SignUpbutton.addEventListener("click", function(){

   let res = dataList.find((el)=>{
        return el.email == emailInput.value
    })

    if(res == undefined) {
        var userData = {
            name:nameInput.value ,
            email:emailInput.value ,
            password:passInput.value
        }
        dataList.push(userData)
        localStorage.setItem("dataList" , JSON.stringify(dataList))
    
        setTimeout (()=>{
            window.location = "index.html"
        } , 1500)
    }
    
    else{
        document.getElementById("alert").style.display ="block"
     

}})


