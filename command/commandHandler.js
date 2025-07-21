const TrieNode = require("../Trie/Trie")
const root = new TrieNode()

function add(word){
    if(!word){
        console.log("please enter a word to add to the dictionary")
    }
    else{
        root.addWord(word)
    }
}

function find(word){
    if(!root.findWord(word)){
        console.log(`✗ ${word} not found in dictionary`)
    }
    else{
        console.log(`✓ ${word} exists in dictionary`)
    }
}

function complete(prefix){

}


module.exports = {add,find}