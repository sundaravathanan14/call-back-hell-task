var div=document.createElement('div');
var h1= document.createElement('h1');
div.append(h1);
document.body.append(div);
setTimeout(()=>{
    h1.innerHTML="10";
    setTimeout(()=>{
        h1.innerHTML="9"; 
        setTimeout(()=>{
            h1.innerHTML="8"; 
            setTimeout(()=>{
                h1.innerHTML="7"; 
                setTimeout(()=>{
                    h1.innerHTML="6"; 
                    setTimeout(()=>{
                        h1.innerHTML="5"; 
                        setTimeout(()=>{
                            h1.innerHTML="4"; 
                            setTimeout(()=>{
                                h1.innerHTML="3"; 
                                setTimeout(()=>{
                                    h1.innerHTML="2"; 
                                    setTimeout(()=>{
                                        h1.innerHTML="1"; 
                                        setTimeout(()=>{
                                            h1.innerHTML="Happy Independance day"; 
                                        },3000)
                                    },3000)
                                },3000)
                            },3000)
                        },3000)
                    },3000)
                },3000)
            },3000)
        },3000)
    },3000)
},1000)