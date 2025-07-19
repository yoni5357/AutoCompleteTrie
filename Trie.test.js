require("./Trie")

//tests for Trie.addWord method
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

//tests for Trie.findWord Method
describe("findWord", () => {
    it("should return true for a word that exists in the Trie", () => {
        const root = new TrieNode();
        root.addWord("hello");
        expect(root.findWord("hello")).toBe(true);
    });

    it("should return false for a word that does not exist in the Trie", () => {
        const root = new TrieNode();
        root.addWord("hello");
        expect(root.findWord("hell")).toBe(false);
    });

    it("should return false for an empty string", () => {
        const root = new TrieNode();
        root.addWord("hello");
        expect(root.findWord("")).toBe(false);
    });
});

