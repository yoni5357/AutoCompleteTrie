require("./Trie")

//write tests for Trie.addWord
const TrieNode = require("./Trie");

describe("addWord", () => {
    it("should add a word to the Trie", () => {
        const root = new TrieNode();
        root.addWord("hello");
        expect(root.children['h']).toBeDefined();
        expect(root.children['h'].children['e']).toBeDefined();
        expect(root.children['h'].children['e'].children['l']).toBeDefined();
        expect(root.children['h'].children['e'].children['l'].children['l']).toBeDefined();
        expect(root.children['h'].children['e'].children['l'].children['l'].children['o']).toBeDefined();
        expect(root.children['h'].children['e'].children['l'].children['l'].children['o'].endOfWord).toBe(true);
    });

    it("should use existing pahts if possible", () => {
        const root = new TrieNode();
        root.addWord("hello");
        root.addWord("hell");
        expect(root.children['h'].children['e'].children['l'].children['l'].endOfWord).toBe(true);
        expect(root.children['h'].children['e'].children['l'].children['l'].children['o'].endOfWord).toBe(true);
        expect(Object.keys(root.children['h'].children['e'].children['l'].children['l'].children).length).toBe(1);
    })
})

