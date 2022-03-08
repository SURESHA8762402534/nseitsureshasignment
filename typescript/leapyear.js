var leapyear = function (year) {
    var out;

   
    if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
        out = true;
    }
    else {
        out = false;
    }
    return console.log(out);
};
leapyear(1997);
