class stack{
    constructor(){
        this.item = [];
    }

    //push operation
    push(em){
        let arr = [...this.item, em];
        this.item = arr
        return this.item
        // this.item.push(em)
        // return this.item
    }


    // pop operation

    pope(){
        this.item.slice(0,-1)
        return console.log(this.item.pop())
    }

    //peek return top most most element from the stack
    peek(){
        // let a = this.item.splice(this.item.length-1, 1)
        // return console.log(a);
        return console.log(this.item[this.item.length-1])
    }
    //isempty
    isempty(){
        if(this.item.length == null){
            return 'empty'
        }
    }
    //print stack
    print(){
        let arr=[];
        this.item.map(id => {
            arr.concat(id)
       
        })
       return arr
    }

    //
}

var stac  = new stack();

stac.push(10)
stac.push(11)
stac.push(12)
stac.pope()
stac.peek()
stac.isempty()
// stac.print()

// let a = [1,2,3]
// let b = a.splice(a.length-1, 1)
// console.log(b)
