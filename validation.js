const validCommands = ["add", "find", "complete", "help", "exit"]

function validateWord(word){
    if(!word){
        throw new Error("Missing word argument")
    }
}

function validateCommand(command){
    if(!command){
        throw new Error("Missing command argument")
    }
    if(!validCommands.contains(command.toLowerCase())){
        throw new Error("Invalid Command")
    }

}

function validateArgs(word, command){
    validateWord(word)
    validateCommand(command)
}

module.exports = {validateWord, validateCommand}