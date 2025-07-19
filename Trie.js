class TrieNode{
    constructor(value = null, endOfWord){
        this.value = value
        this.endOfWord = endOfWord
        this.children = {}
    }

    addWord(word){
        
        if(!word){
            this.endOfWord = true
            return
        }

        let char = word[0];

        if(!this.children[word[0]]){
            let node = new TrieNode(word[0], false);
            this.children[word[0]] = node;
        }
        let splicedWord = word.slice(1,word.length);
        this.children[char].addWord(splicedWord);
        
    }

    findWord(word){
        if(this.value === word && this.endOfWord){
            return true
        }

        if(this.value !== word[0]){
            return false
        }

        let splicedWord = word.splice(0,1)

    }

}

let root = new TrieNode();
root.addWord("hello")
console.log(root)

module.exports = TrieNode