const student = {
    name : "Sumit",
    age : 20,
    eng : 89,
    math : 80,
    phy : 90,
    getavg() {
        console.log(this)
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(avg)
    }
}

function getavg(){
    console.log(this)
}

// console.log(student.getavg());
console.log(getavg());
console.log(window.alert("hello"))