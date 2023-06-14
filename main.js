let= username=document.getElementById("username");
let= pasword=document.getElementById("password");
let signin=document.getElementById("signin");
let= login=document.getElementById("login");
let=s=document.getElementById("signi");
let h1=document.getElementById("h1")
let l=document.getElementById("logi")
let datapro;
if (localStorage.product !=null){
    datapro=JSON.parse(localStorage.product)
}else{
    datapro=[]
}
s.onclick=function(){
h1.innerHTML="Sign In "
signin.style.display="block";
login.style.display="none"
l.style.display="inline-block"
s.style.display="none"

}
l.onclick=function(){
    h1.innerHTML="Log In "
    signin.style.display="none";
    login.style.display="block"
    l.style.display="none"
    s.style.display="block"
    
    }
signin.onclick=function(){
    let newdata={
        username:username.value,
        pasword:pasword.value
    }
    datapro.push(newdata);
    localStorage.setItem("product" ,JSON.stringify(datapro))
    if(username.value!=""&&pasword.value!=null){
        location.href="https://github.com/mohamedfareedsaber/mohamedfareedsaber";

    }else{
        alert("plese enter password and username")
    }
}
login.onclick=function(){
    for(let i=0;i<datapro.length;i++){
        if(username.value==datapro[i].username&&pasword.value==datapro[i].pasword){
            location.href="https://github.com/mohamedfareedsaber/mohamedfareedsaber";
        }else if(username.value!=datapro[i].username&&pasword.value==datapro[i].pasword) {
            alert("please check your username")
        }else if(username.value==datapro[i].username&&pasword.value!=datapro[i].pasword){
            alert("please check your password")
        }else{
            alert("please check your username and password")
        }

    }
}