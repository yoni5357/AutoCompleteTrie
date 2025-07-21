const TrieNode = require("../Trie/Trie")
const root = new TrieNode()
const {validateWord} = require("../validation")

function add(word){
    try{
        validateWord(word)
    }catch(err){
        console.log(err.message)
    }
    root.addWord(word.toLowerCase());
    console.log(`✓ Added ${word.toLowerCase()} to dictionary`)
}

function find(word){
    try{
        validateWord(word)
    }catch(err){
        console.log(err.message)
    }
    if(!root.findWord(word.toLowerCase())){
        console.log(`✗ ${word} not found in dictionary`);
    }
    else{
        console.log(`✓ ${word} exists in dictionary`);
    }
}

function complete(prefix){
    try{
        validateWord(prefix)
    }catch(err){
        console.log("Enter a valid prefix")
    }
    const suggestions = root.predictWords(prefix.toLowerCase());
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