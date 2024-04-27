function getcomputedchoice(){
    let random_number=Math.floor(Math.random()*3)+1;
    
    switch(random_number){
        case 1: 
            return 'piedra';
        case 2:
            return 'papel';
        case 3:
            return 'tijeras';
    }
}


function one_round(user_choice){
    let cpuChoice = getcomputedchoice();
    if (cpuChoice=='tijeras'){
        switch(user_choice){
            case 'tijeras':
                resultado.textContent="La computadora elige tijeras. Empate";
                return 'empate'
            case 'piedra':
                resultado.textContent="La computadora elige tijeras. Victoria la piedra rompe las tijeras.";
                return 'victoria'
            case 'papel':
                resultado.textContent="La computadora elige tijeras. Derrota las tijeras cortan el papel";
                return 'derrota'
        }
    }else if (cpuChoice=='papel'){
        switch(user_choice){
            case 'tijeras':
                resultado.textContent="La computadora elige papel. Victoria las tijeras cortan el papel.";
                return 'victoria'
            case 'piedra':
                resultado.textContent="La computadora elige papel. Derrota el papel envuelve a la piedra";
                return 'derrota'
            case 'papel':
                resultado.textContent="La computadora elige papel. Empate";
                return 'empate'
        }
    }else{
        switch(user_choice){
            case 'tijeras':
                resultado.textContent="La computadora elige piedra. Derrota la piedra rompe las tijeras";
                return 'derrota'
            case 'piedra':
                resultado.textContent="La computadora elige piedra. Empate";
                return 'empate'
            case 'papel':
                resultado.textContent="La computadora elige piedra. Victoria el papel envuelve a la piedra";
                return 'victoria'
        }
    }
}


let band = true;

const piedra = document.querySelector(".piedra");
const papel = document.querySelector(".papel");
const tijeras = document.querySelector(".tijeras");
const resultado = document.querySelector(".resultado");
const CeldaUser= document.querySelector(".user");
const CeldaCpu= document.querySelector(".cpu");

let ConteoUser=0;
let ConteoCpu=0;

piedra.addEventListener("click",()=>{
    if(ConteoUser == 5 ){
        resultado.textContent="Ha acumlado 5 puntos. Ha GANADO!!! :)"
        ConteoCpu=0;
        ConteoUser=0;
        CeldaCpu.textContent=ConteoCpu;
        CeldaUser.textContent=ConteoUser;
}else if(ConteoCpu == 5){
        resultado.textContent="La computadora ha acumulado 5 puntos. Ha perdido :(";
        ConteoCpu=0;
            ConteoUser=0;
            CeldaCpu.textContent=ConteoCpu;
            CeldaUser.textContent=ConteoUser;
}else{
    let message=one_round('piedra');
    if (message == 'victoria'){
        ConteoUser++;
        CeldaUser.textContent=ConteoUser;
    }else if(message == 'derrota'){
        ConteoCpu++;
        CeldaCpu.textContent=ConteoCpu;
    }
}
});

papel.addEventListener("click",()=>{
    if(ConteoUser == 5 ){
        resultado.textContent="Ha acumlado 5 puntos. Ha GANADO!!! :)"
        ConteoCpu=0;
        ConteoUser=0;
        CeldaCpu.textContent=ConteoCpu;
        CeldaUser.textContent=ConteoUser;
}else if(ConteoCpu == 5){
        resultado.textContent="La computadora ha acumulado 5 puntos. Ha perdido :(";
        ConteoCpu=0;
            ConteoUser=0;
            CeldaCpu.textContent=ConteoCpu;
            CeldaUser.textContent=ConteoUser;
}else{
    let message=one_round('papel');
    if (message == 'victoria'){
        ConteoUser++;
        CeldaUser.textContent=ConteoUser;
    }else if(message == 'derrota'){
        ConteoCpu++;
        CeldaCpu.textContent=ConteoCpu;
    }
}
});

tijeras.addEventListener("click",()=>{
    if(ConteoUser == 5 ){
        resultado.textContent="Ha acumlado 5 puntos. Ha GANADO!!! :)"
        ConteoCpu=0;
        ConteoUser=0;
        CeldaCpu.textContent=ConteoCpu;
        CeldaUser.textContent=ConteoUser;
}else if(ConteoCpu == 5){
        resultado.textContent="La computadora ha acumulado 5 puntos. Ha perdido :(";
        ConteoCpu=0;
            ConteoUser=0;
            CeldaCpu.textContent=ConteoCpu;
            CeldaUser.textContent=ConteoUser;
}else{
    let message=one_round('tijeras');
    if (message == 'victoria'){
        ConteoUser++;
        CeldaUser.textContent=ConteoUser;
    }else if(message == 'derrota'){
        ConteoCpu++;
        CeldaCpu.textContent=ConteoCpu;
    }
}
});

