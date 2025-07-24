import TrieNode from "./Trie/Trie.js";
const root = new TrieNode();
import { validateWord } from "./validation.js";

function add(){
    let word = document.getElementById('word-input').value
    let message = document.getElementById('message')
    try{
        validateWord(word)
    }catch(err){
        message.textContent = "✕ Cannot add empty word"
        message.className = "error-message"
        return;
    }
    root.addWord(word.toLowerCase());
    message.textContent = `✓ Added ${word.toLowerCase()} to dictionary`
    message.className = "success-message"
}


document.addEventListener('DOMContentLoaded',() => {
    let addButton = document.getElementById('add-button')
    addButton.addEventListener('click', add)
})

