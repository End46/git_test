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

function getuserchoice (){
    do{
        let user_choice=prompt('Escoja:\npiedra,papel o tijeras.');
        user_choice=user_choice.toLowerCase();
        if (user_choice=='piedra'||user_choice=='tijeras'||user_choice=='papel'){
            return user_choice;
        }else{
            alert('\nPor favor elija entre piedra papel o tijeras.\n')
        }
    }while(true);
}

function one_round(){
    let user_choice=getuserchoice();
    if (getcomputedchoice()=='tijeras'){
        switch(user_choice){
            case 'tijeras':
                return 'Empate: Tijeras vs Tijeras'
            case 'piedra':
                return 'Victoria!: La Piedra rompe las Tijeras'
            case 'papel':
                return 'Derrota : Las Tijeras cortan el Papel'
        }
    }else if (getcomputedchoice()=='papel'){
        switch(user_choice){
            case 'tijeras':
                return 'Victoria!: las Tijeras cortan el Papel'
            case 'piedra':
                return 'Derrota : El Papel envuelve a la Piedra'
            case 'papel':
                return 'Empate: Papel vs Papel'
        }
    }else{
        switch(user_choice){
            case 'tijeras':
                return 'Derrota : La Piedra rompe las Tijeras'
            case 'piedra':
                return 'Empate: Piedra vs Piedra'
            case 'papel':
                return 'Victoria!: El Papel envuelve a la Piedra'
        }
    }
}

function get_rounds(){
    do{
        let rounds=prompt('Introduzca la cantidad de rondas que desea jugar.');
        if (isNaN(rounds)){
            alert('Por favor introduzca valor numérico.')
        }else{
            rounds= Number(rounds);
            return rounds;
        }
        }while(true);
}

function playGame(){
    const rounds=get_rounds();
    
    for(let i=0;i<rounds;i++){
        alert(one_round());
    }

    alert('Fin del juego.');
}

alert('Piedra,papel y tijeras.');
playGame();