function generateRandomNumber(min, max){
    const randomDecimal = Math.random() * ( max - min + 1) + min
    return Math.floor(randomDecimal)
}

function generatePassword(e) {
    /*
        31 - 47, 91 - 96 = symbols
        48 - 57 = numberic
        63 - 64 = ? @
        65 - 90 = capital
        97 - 122 = small
    */
    e.preventDefault();
    let passwd = '';
    const isCapitals = document.querySelector('form').capital.checked
    const isSmall = document.querySelector('form').small.checked
    const isNumber = document.querySelector('form').number.checked
    const isSymbols = document.querySelector('form').symbols.checked
    const passlen = document.querySelector('form').passlength.value

    while (passwd.length < passlen && (isCapitals || isSmall || isNumber || isSymbols) && (passlen > 0)) {
        const option = generateRandomNumber(1, 4)
        // console.log("option: ", option)
        switch (option) {
            case 1:
                if(isCapitals){
                    const num = generateRandomNumber(65, 90)
                    passwd += String.fromCharCode(num)
                }
                break;
            case 2:
                if(isSmall){
                    const num = generateRandomNumber(97, 122)
                    passwd += String.fromCharCode(num)
                }
                break;
            case 3:
                if(isNumber){
                    const num = generateRandomNumber(48, 57)
                    passwd += String.fromCharCode(num)
                }
                break;

            case 4:
                if(isSymbols){
                    const num = generateRandomNumber(33, 47)
                    passwd += String.fromCharCode(num)
                }
                break;
            default:
                break;  
        }
    }
    console.log(passwd)
}

module.exports = generatePassword