let leapyear = (year:number) =>
{
    let out:boolean;
    if( (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)){
        out = true
    }
    else{
       out = false
    }
    return out
}

leapyear(1996)