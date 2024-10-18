function threeRuls()
{
    let tomb = [];
    szabaly = 0;
    for (let i = 1; i<= 50; i++){
        if(szabaly == 0 && i % 3 == 0)
        {
            szabaly += 1;
        }
        else if (szabaly == 1 && i % 3 == 0){
            tomb += i;
            szabaly += 1;
        }
        else if (szabaly == 2 && i % 3 == 0){
            szabaly+=1;
        }
        else if (szabaly == 3 && i % 3 == 0){
            tomb += i;
            szabaly += 1;
        }
        else if (szabaly == 4 && i % 3 == 0){
            tomb += i;
            szabaly += 1;
        }
        else if (szabaly == 5 && i % 3 == 0){
            szabaly = 0;
        }
        else{
            tomb += i;
        }
        tomb += ", "
    }
    return tomb;
}
console.log(threeRuls());

function seconds(time){
    let ido = time.split(':');
    let ora = parseInt(ido[0]) * 60 * 60;
    let perc = parseInt(ido[1]) * 60
    let mp = parseInt(ido[2])
    let oszzido = (24 * 60 * 60) - (ora + perc + mp)
    return oszzido
    }
console.log(seconds("24:00:00"));

function digitsAverage(number) {
    let osszeg = 0;

    //let szamstrinbe = toString(number);
    //console.log(szamstrinbe.length);

    //let szamjeg_szam = 1;
    //vege = false;
    //while (!vege){
     //   if ((number / 10) > 0)
     //       {
     //           szamjeg_szam++;
     //           number = number / 10;
     //   }
     //   else{
     //       vege = true;
     //   }
    // }

    for (let i = parseInt(number.length); i >= 0; i--){
        console.log(i);
        osszeg += parseInt(number[i-1]);
    }
    let szamj_atlag = osszeg / number.length;
    return szamj_atlag;
    }
console.log(digitsAverage(268));

function cuboid(a, b, c) {
    let felszin = parseFloat(2*(a*b + b*c + c*a));
    let terfogata = parseFloat(a*b*c);
    let tomb = [];
    tomb += felszin;
    tomb += ", "
    tomb += terfogata;
    return tomb;
    }
console.log(cuboid(10.4, 13.5, 8.2));