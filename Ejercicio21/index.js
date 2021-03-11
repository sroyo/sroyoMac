const PASO1 = process.argv;
const PASO2 = PASO1.slice(2).join('');
console.log ('PASO2 = ' + PASO2); 
////Hola mundo => Holamundo => HOLAMUNDO => IPMBNVOEP => PEOVNBMPI//
const PASO3 = PASO2.toUpperCase();
console.log('PASO3 = ' + PASO3);
let temporal = PASO3.split('');
//console.log(temporal);//

for (let i = 0; i < temporal.length; i++) {
   // console.log(temporal[i]);//
    if (temporal[i]== 'H'){
        temporal[i] = 'I';
    }
    else if (temporal[i] == 'O'){
        temporal[i] = 'P';
    } 
    else if (temporal[i] == 'L'){
        temporal[i] = 'M';
    }
    else if (temporal[i] == 'A'){
        temporal[i] = 'B';
    }
    else if (temporal[i] == 'M'){
        temporal[i] = 'N';
    }
    else if (temporal[i] == 'U'){
        temporal[i] = 'V';
    }
    else if (temporal[i] == 'N'){
        temporal[i] = 'O';
    }
    else if (temporal[i] == 'D'){
        temporal[i] = 'E';
    }
}
//console.log(temporal);//
const PASO4 = temporal.reverse();
console.log('PASO4 = ' + PASO4);
const PASO5 = PASO4.join('');
console.log('PASO5 = '+ PASO5);
