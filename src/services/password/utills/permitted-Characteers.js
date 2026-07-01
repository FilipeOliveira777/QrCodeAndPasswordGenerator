async function permittedCharacteers() {
    let permitted = []

    if(process.env.UPERCASE_LETTERS === "true"){
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }


    if(process.env.LOWERCASE_LETTERS === "true"){
        permitted.push(..."abcdefghijklmnopqrstuvwxyz");
    }

    if(process.env.NUMBERS === "true"){
        permitted.push(..."0123456789");
    }


     if(process.env.SPECIAL_CARACTERS === "true"){
        permitted.push(..."!@#$%^&*()-_");
    }
    
    return permitted;

}

export default permittedCharacteers;