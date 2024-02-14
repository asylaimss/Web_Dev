let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) alert( i );
}

function random(min, max) {
    return min + Math.random() * (max - min);
}
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
}
alert( randomInteger(1, 3) );