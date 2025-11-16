let arrPass = "ewqrqer43rrrfvrwg4t359358290580514958jvzdvns!@#$#%&*(??><>L`~dP:L{{}|+_+==";

let pass = "";

// console.log(arrPass[3]);

function userPassword() {
    for (let i = 0; i < 12; i++) {
        // let num  =()
        let randomNum = (Math.round(Math.random() * arrPass.length));
        // let onlyOneNum = Math.floor(num)
        pass += arrPass[randomNum]
    }
    document.writeln("Pasword --> ",pass);
}