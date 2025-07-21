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

    it("should handle adding an empty string", () => {
        const root = new TrieNode();
        root.addWord("");
        expect(Object.keys(root.children).length).toBe(0);
    });

    it("should handle adding a single character", () => {
        const root = new TrieNode();
        root.addWord("a");
        expect(root.children['a']).toBeDefined();
        expect(root.children['a'].endOfWord).toBe(true);
    });

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

//tests for _getRemainingTree method
describe("_getRemainingTree", () => {
    it("should return the remaining tree for a given prefix", () => {
        const root = new TrieNode();
        root.addWord("hello");
        const remainingTree = root._getRemainingTree("he", root);
        expect(remainingTree.children['l']).toBeDefined();
        expect(remainingTree.children['l'].children['l'].children['o'].endOfWord).toBe(true);
    });

    it("should return null if the prefix does not exist", () => {
        const root = new TrieNode();
        root.addWord("hello");
        const remainingTree = root._getRemainingTree("hi", root);
        expect(remainingTree).toBeNull();
    });

    it("should return the root node if the prefix is empty", () => {
        const root = new TrieNode();
        root.addWord("hello");
        const remainingTree = root._getRemainingTree("", root);
        expect(remainingTree).toBe(root);
    });

    it("should handle prefixes that match multiple words", () => {
        const root = new TrieNode();
        root.addWord("hello");
        root.addWord("hell");
        const remainingTree = root._getRemainingTree("he", root);
        expect(remainingTree.children['l']).toBeDefined();
        expect(remainingTree.children['l'].children['l'].endOfWord).toBe(true);
        expect(remainingTree.children['l'].children['l'].children['o'].endOfWord).toBe(true);
    });
});

//tests for _allWordsHelper method
describe("_allWordsHelper", () => {
    it("should return an array containing all words in the Trie for a given prefix", () => {
        const root = new TrieNode();
        root.addWord("hello");
        root.addWord("hell");
        root.addWord("heaven");
        const allWords = [];
        root._allWordsHelper("", root, allWords);
        expect(allWords).toContain("hello");
        expect(allWords).toContain("hell");
        expect(allWords).toContain("heaven");
    });

    it("should return an empty array if no words exist", () => {
        const root = new TrieNode();
        const allWords = [];
        root._allWordsHelper("", root, allWords);
        expect(allWords.length).toBe(0);
    });

    it("should handle a Trie with only one word", () => {
        const root = new TrieNode();
        root.addWord("hello");
        const allWords = [];
        root._allWordsHelper("", root, allWords);
        expect(allWords).toContain("hello");
    });

});

//tests for predictWords method
describe("predictWords", () => {
    it("should return all words that start with a given prefix", () => {
        const root = new TrieNode();
        root.addWord("hello");
        root.addWord("hell");
        root.addWord("heaven");
        const predictions = root.predictWords("he");
        expect(predictions).toContain("hello");
        expect(predictions).toContain("hell");
        expect(predictions).toContain("heaven");
    });

    it("should return an empty array if no words match the prefix", () => {
        const root = new TrieNode();
        root.addWord("hello");
        const predictions = root.predictWords("hi");
        expect(predictions.length).toBe(0);
    });

    it("should handle a Trie with only one word", () => {
        const root = new TrieNode();
        root.addWord("hello");
        const predictions = root.predictWords("he");
        expect(predictions).toContain("hello");
    });

    it("should return an empty array if the Trie is empty", () => {
        const root = new TrieNode();
        const predictions = root.predictWords("he");
        expect(predictions.length).toBe(0);
    });
});

//unit tests for entire flow of adding, finding, and completing words
describe("Trie full flow", () => {
    it("should add, find, and complete words correctly", () => {
        const root = new TrieNode();
        root.addWord("apple");
        root.addWord("app");
        root.addWord("banana");

        expect(root.findWord("apple")).toBe(true);
        expect(root.findWord("app")).toBe(true);
        expect(root.findWord("banana")).toBe(true);
        expect(root.findWord("orange")).toBe(false);

        const completions = root.predictWords("ap");
        expect(completions).toContain("apple");
        expect(completions).toContain("app");
        expect(completions.length).toBe(2);
    });
});