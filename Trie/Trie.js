export class TrieNode{
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

        if(!this.children[char]){
            let node = new TrieNode(char, false);
            this.children[char] = node;
        }
        let slicedWord = word.slice(1);
        this.children[char].addWord(slicedWord);
        
    }

    findWord(word){
        if(this.endOfWord && word.length === 0){
            return true
        }
        else if(this.children[word[0]]){
            let slicedWord = word.slice(1)
            return this.children[word[0]].findWord(slicedWord)
        }
        else{
            return false
        }
    }

    predictWords(prefix){
        let node = this._getRemainingTree(prefix, this)
        if(!node){
            return []
        }
        return node._allWordsHelper(prefix,node,[])
    }

    _getRemainingTree(prefix, node){
        if(!prefix){
            return node
        }
        if(node.children[prefix[0]]){
            let sliced = prefix.slice(1,prefix.length)
            return node._getRemainingTree(sliced, node.children[prefix[0]])
        }
        else{
            return null
        }
    }

    _allWordsHelper(prefix, node, allWords){
        if(node.endOfWord){
            allWords.push(prefix)
        }
        for(let child in node.children){
            this._allWordsHelper(prefix + child, node.children[child], allWords)
        }
        return allWords
    }
}

// module.exports = TrieNode
export default TrieNode