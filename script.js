function converterParaRomano(num) {

    let romano= "";
    let numero= num;

    const ALGARISMOS= {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    };

    for(let i in ALGARISMOS) {
        if(numero >= ALGARISMOS[i]){

            let qntd;
            let index= Object.keys(ALGARISMOS).indexOf(i);
            let ant= Object.keys(ALGARISMOS)[index+1];
            let prox= Object.keys(ALGARISMOS)[index-1];
      
            const calculaNumero= x => x % ALGARISMOS[i];
            const calculaQntd= (x,k) => parseInt(x/ALGARISMOS[k]);
      
            if(['M','C','X','I'].includes(i)){
        
                qntd= calculaQntd(numero, i);
                numero= calculaNumero(numero);

                if(qntd===4)
                    romano+= i; 
                else
                    for(let j=0; j<qntd; j++)
                        romano+= i;         
        
            }else{ //'D','L','V'

                numero= calculaNumero(numero);
                qntd= calculaQntd(numero, ant);

                if(qntd===4)
                    romano+= ant;
                else{          
                    romano+= i;
                    for(let j=0; j<qntd; j++)
                        romano+= ant; 
                }

                numero-= qntd*ALGARISMOS[ant];
            }

            if(qntd===4)
                romano+= prox; 
        }     
    }
  
    return romano;
}