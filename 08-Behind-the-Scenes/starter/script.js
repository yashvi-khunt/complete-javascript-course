'use strict';

// >> Hoiting <<
// console.log(a);  //undefined
// var a = 10; 

// console.log(ab());

// function ab(){
//     console.log("hello");
// }



// let add = function(){
//     return 2+3;
// }
// console.log(add())


// const sub = (a,b) => {
//     return(a-b);
// }
// console.log(sub(9,8))

/*x = 100;
function print(){
    //  x = 10;
    console.log(x)
}

console.log(x)
print();*/


// function print(){
//     x = 10;
//     console.log(x)
// }
// print()
// console.log(x)
// >> Hoisting <<

// >> This Keyword <<
/*let fname = "matilda";
let lname = 'abc';

const jonas = {
    fname : "jonas",
    lname : "sche",

    fullName: ()=>{
        return this.fname +  " " +this.lname;
    }
}
console.log(jonas.fullName());*/

const jonas = {
    fname: "jonas",
    lname: "sche",
    school: "abc",
    fullName: function () {
        let self = this
        const foo = function () {
            x = 10;
            console.log(self.school);
        }
        // return this.fname +  " " +this.lname;
        return foo.x;
    }
}

const john = {
    fname: "john"
}

// john.fullName = jonas.fullName;
console.log(jonas.fullName());
// >>This Keyword <<

// >> Regular Function v/s Arrow function <<
