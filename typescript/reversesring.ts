let reverseString = (a:string) => {
    let out:string;
    let arr = []
     arr = a.split('').reverse();
     out = arr.join('');
     return console.log(out)
}

reverseString("carry")