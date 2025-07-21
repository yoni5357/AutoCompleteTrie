const TrieNode = require("../Trie/Trie")
const root = new TrieNode()

function add(word){
    if(!word){
        console.log("please enter a word to add to the dictionary");
    }
    else{
        root.addWord(word);
    }
}

function find(word){
    if(!root.findWord(word)){
        console.log(`✗ ${word} not found in dictionary`);
    }
    else{
        console.log(`✓ ${word} exists in dictionary`);
    }
}

function complete(prefix){
    const suggestions = root.predictWords(prefix);
    if(!suggestions){
        console.log(`No suggestions found for ${prefix}`)
    }
    else{
        console.log(`Suggestions for ${prefix}: ${suggestions}`)
    }
}

function help(){
    console.log(`Commands:
  add <word>      - Add word to dictionary
  find <word>     - Check if word exists
  complete <prefix> - Get completions
  help           - Show this message
  exit           - Quit program`)
}

function exit(){
    console.log("Goodbye!")
}


module.exports = {add,find,complete,help,exit}