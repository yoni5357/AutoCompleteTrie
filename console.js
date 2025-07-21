const PromptSync = require("prompt-sync")
const prompt = PromptSync();
const {add,find,complete} = require("./command/commandHandler")

function run(){

    displayWelcome()

    while(true){
        let [command, word] = prompt('').split(" ");
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
        }
    }
}

function displayWelcome(){
    console.log(`=== AutoComplete Trie Console ===\nType 'help' for commands`)
}

function displayHelp(){
    console.log(`Commands:
  add <word>      - Add word to dictionary
  find <word>     - Check if word exists
  complete <prefix> - Get completions
  help           - Show this message
  exit           - Quit program`)
}

run()


