var cnt=0;
var c=0;
function todo(){
    var count=0;
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        console.log("start");
        if(this.readyState==4&&this.status==200){
            // console.log(1);
            var res =JSON.parse(this.responseText);
            // console.log(res);
            var out="";
            res.forEach(i => {
                // console.log(i.id);
                if(i.completed==false){
                    count++;
                    out+=`<input type="checkbox" id="mycheck" onclick="check();" ><label>${i.title}</label><br><hr>`;
                }
                else{
                    out+=`<input type="checkbox"  checked disabled class="checkbox checkbox-primary"><label>${i.title}</label><br><hr>`;
                }
            });
            document.getElementById("chk").innerHTML=out;
            document.getElementById("chk").style.padding="6%";
        }
    };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    
}
todo();

function check(){
    // cnt++;
    // console.log("inside");
    // console.log(cnt);
    //     var prom = new Promise(function(resolve,reject){
    //     if(cnt>=5){
    //         resolve("completed");
    //     }
    //     else{
    //         reject();
    //     }
    //     });
    //     prom
    //     .then(function(a){
    //         alert(c);
    //     })
    //     .catch(function(){
    //         console.log("task not completed")
    //     });

    cnt++;
    console.log(cnt);
    var ch=document.getElementById("mycheck");
    console.log(ch);
    if(ch.checked==true){
        c++;
    }
    console.log(c);
    if(c>=5&&cnt>=5){
        flag=1;
        final();
    }   
}

function final(){
    var prom=new Promise(function(resolve,reject){
        if(flag==1){
            resolve(" Congrats. 5 Tasks have been Successfully Completed");
        }
        else{
            reject("not completed");
        }
    });

    prom
    .then(function(p){
        alert(p);
    })
    .catch(function(q){
        console.log(p);
    })
}