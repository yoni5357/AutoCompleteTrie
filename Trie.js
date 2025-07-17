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

        if(!this.children[word[0]]){
            // let node;
            // if(word.lentgh > 1){
            //     node = new TrieNode(chars[i], false);
            // }
            let node = new TrieNode(chars[i], false);
            this.children[chars[i]] = node;
        }

        let splicedWord = chars.splice(i,1).join("");
        this.children[word[0]].addWord(splicedWord);
        
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

module.exports = TrieNode