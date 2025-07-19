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
        if(this.endOfWord){
            return true
        }
        else if(this.children[word[0]]){
            let slicedWord = word.slice(1,word.length)
            return this.children[word[0]].findWord(slicedWord)
        }
        else{
            return false
        }
    }
}

let root = new TrieNode();
root.addWord("hello")
root.findWord("hello")
// console.log(root)

module.exports = TrieNode