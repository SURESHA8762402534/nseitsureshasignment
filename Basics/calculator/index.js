
function click(){
           
    const  first= document.querySelector("#firstNumber").value;
    const second = document.querySelector('#secondNumber').value;
    const opt = document.querySelector('#opt').value;

    console.log(first)
    console.log(second)
    console.log(opt)

    const ans = document.querySelector('#phone').value
    console.log(ans)
}

document.querySelector('button').addEventListener('click', (e) => {
            e.preventDefault();
            click()
        })
