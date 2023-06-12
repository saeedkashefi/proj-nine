
var psone=document.querySelector("#p_one") ;
var btnone=document.querySelector("#button_one")

btnone.addEventListener("click", function(){

    pattern_one=new RegExp('[9]') ;
    countofnine=0 ;
    outputdigit=0 ;

    for(let i=0 ; i<=1000 ; i++){

            String=i.toString()
            if(String.match(pattern_one)){
                countofnine+=1 ;
            }
            if(i%9==0){
                outputdigit+=1 ;
            }

            index=("nine: "+ countofnine + " | " + "divi: "+ outputdigit)
            
           psone.innerHTML= index ;
           
    }
})


