
// function valid(){
//     let inp=document.getElementById("input");
//     let pw=document.getElementById("pw");
//     console.log("uname:"+inp);
//     console.log("pw:"+pw);
//     if(inp.value=="admin"&&pw.value==12345){
//         return true;
//     }
//     else{
//         alert("invalid");
//         return false;
//     }
//     return false;
// }
function valid(){
    let inp=document.getElementById("input");
    let pw=document.getElementById("pw");
    function validate(x,y,fn){
        if(x.value=="admin"&&y.value==12345){
            console.log("valid");
            if(fn()){
                console.log("move");
                return true;
            }
        }
        else{
            alert("invalid username or password ")
            console.log("invalid uname or password");
            return false;
        }
    }
    if(validate(inp,pw,callback)){
        return true;
    }
    else{
        return false;
    }
   
}
function callback(){
    console.log("callback");
    return true;
}