import TrieNode from "./Trie/Trie.js";
const root = new TrieNode();
import { validateWord } from "./validation.js";

function add(){
    let word = document.getElementById('word-input').value
    let message = document.getElementById('message')
    message.innerHTML = "";
    message.className = "";
    let wordCount = document.getElementById('word-count');
    if(root.findWord(word)){
        return;
    }

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

    wordCount.textContent = parseInt(wordCount.textContent) + 1;

}

function showSuggestions(){
    let prefix = document.getElementById('prefix-input').value;
    let suggestionsDiv = document.getElementById('suggestions');
    if(prefix.length === 0){
        suggestionsDiv.innerHTML = "";
        suggestionsDiv.className = "";
        return;
    }
    let suggestions = root.predictWords(prefix.toLowerCase());
    suggestionsDiv.innerHTML = "";
    suggestionsDiv.className = "suggestions";
    if(suggestions.length === 0){
        suggestionsDiv.textContent = "No suggestions found";
        return;
    }
    suggestions.forEach(word => {
        let suggestion = document.createElement('div');
        suggestion.textContent = word;
        suggestionsDiv.appendChild(suggestion);
    });



}


document.addEventListener('DOMContentLoaded',() => {
    let addButton = document.getElementById('add-button');
    addButton.addEventListener('click', add);
    let prefixInput = document.getElementById('prefix-input');
    prefixInput.addEventListener('input', showSuggestions);
    
})