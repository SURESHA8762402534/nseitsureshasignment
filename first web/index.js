
const username = document.getElementById("username");
const EId   = document.querySelector("#EId");
const mobile = document.getElementById("mobile");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");



function checkData() {
    const usernameValue = username.value;
    const Employeeid = EId.value;
    const mobileValue = mobile.value;
    const Address = pass1.value;
    const decignation = pass2.value;


    if(usernameValue === "" || usernameValue.length < 4){
        alert("enter user name")
    }else{
        console.log("success")
    }

    if(Employeeid === "") {
        alert("enter Employee Id")
    }else{
        console.log("success")
    }

    if(mobileValue === "" || mobileValue.length < 10){
        alert("enter mobile number")
    }else{
        console.log("success")
    }

    if(Address === "" || Address.length < 15){
        alert("enter address")
    }else{
        console.log("success")
    }

    if(decignation === "" || decignation.length < 4 ){
        alert('enter position')
    }else{
        console.log("success")
    }
    

}

document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();
    checkData();
   
});
