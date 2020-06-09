function valid(){
    console.log("in");
    let inp=document.getElementById("input");
    let pw=document.getElementById("pw");
    function validate(x,y,fn){
        console.log("inside");
        if(x.value=="admin"&&y.value==12345){
            console.log("valid");
            fn();
        }
        else{
            alert("invalid username or password ")
            console.log("invalid uname or password");
            return false;
        }
    }
    validate(inp,pw,callback);
}
function callback(){
    console.log("callback");
    window.location.href("main.html");
    // return true;
}
