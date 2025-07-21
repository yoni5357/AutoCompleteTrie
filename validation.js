
function validateWord(word){
    if(!word){
        throw new Error("Missing word argument")
    }

    if(!/^[a-zA-Z]+$/.test(word)){
        throw new Error("Invalid Word")
    }
}


module.exports = {validateWord}