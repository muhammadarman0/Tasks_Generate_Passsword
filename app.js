let arrPass = "m.arman_fftfctdtrdytctrfctfvgtv%$%$#%#$%%@#0011";

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