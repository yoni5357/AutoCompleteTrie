const PromptSync = require("prompt-sync")
const prompt = PromptSync();
const {add,find,complete,help,exit} = require("./command/commandHandler");

function run(){

    displayWelcome()

    while(true){
        let [command, word] = prompt('> ').split(" ");

        switch(command){
            case "add":
                add(word)
                break;
            case "find":
                find(word)
                break;
            case "complete":
                complete(word)
                break;
            case "help":
                help()
                break;
            case "exit":
                exit()
                return;
            default:
                console.log("Invalid Command");
        }
    }
}

function displayWelcome(){
    console.log(`=== AutoComplete Trie Console ===\nType 'help' for commands`);
}



run()


