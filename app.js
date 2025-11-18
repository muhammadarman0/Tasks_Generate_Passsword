function GeneratePassword(){

    let password = "fmevqroafsfm34i9942eifj%^&*&(%$#$!))+_?><:{}|xzkmcsalcaBSE"
    let pass = ""

 
    for (let i = 0;i<12;i++){

       pass += password[Math.floor(Math.random() * password.length)]

        
    }
    let input = document.getElementById("pass")

   input.innerHTML = `Password:  ${pass} `

 console.log("Random pass",pass);
 
    
} 
 