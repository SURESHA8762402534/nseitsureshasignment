var reverseString =  (a) => {
    var out;
    var arr = [];
    arr = a.split('').reverse()
    out = arr.join('')

    return console.log(out);
};
reverseString("carry");
