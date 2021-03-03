const db =`
12345;Juana Perez;juanaperez@gmail.com;20;2345678901;F;Calle 123,
76543;Juan Rodriguez;jrodriguez@gmail.com;30;2345678901;M;Calle 123,
231456;Marcia Pumarejo;mpumarejo@gmail.com;25;2345678901;F;Calle 123,
657546;Carlos Perez;carperez@gmail.com;19;2345678901;M;Calle 123,
64565;Ana Manrrique;amanrri@gmail.com;9;2345678901;F;Calle 123,
42342;Pedro Gomez;pgomez@gmail.com;50;2345678901;M;Calle 123
`;

const lines = db.split("\n");
let arrangedLines = lines.slice( 1, lines.length-1 );

let totalUsersWithP = 0;
let mediaAge = 0;

for (let i = 0; i < arrangedLines.length; i++) {
   

    let fieldsArr = line.split(';');
    let fullname = fieldsArr[1];
    let surname = fullname.split(' ')[1];

    if( surname.slice(0, 1) === 'P' ) {
        totalUsersWithP++;
        mediaAge = mediaAge + parseInt( fieldsArr[3] );
    }
}

console.log( 'El promedio de edad de las personas cuyo apellido comienza por la letra "P" es: '+(mediaAge/totalUsersWithP));