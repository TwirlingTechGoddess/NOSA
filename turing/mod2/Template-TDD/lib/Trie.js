import Node from './Node.js'

export default class Trie {
  constructor() {
    this.rootNode = new Node();
    this.count = 0;
    this.suggestions = []
  }

  insert(data) {
    let letters = [...data.toLowerCase()];
    let currentNode = this.rootNode;

    letters.forEach(letter => {
      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new Node(letter)
      }
      currentNode = currentNode.children[letter]
    })

    currentNode.completedWord = data;
    this.count++;
  }

  suggest(prefix) {
    let suggestions = [];
    let currentNode = this.rootNode;
    prefix = [...prefix.toLowerCase()];

    prefix.forEach(letter => {
      currentNode = currentNode.children[letter]
    })

    const search = (node => {
      if (node.completedWord) {
        suggestions.push(node.completedWord)
      }

      let nodeKeys = Object.keys(node.children);

      nodeKeys.forEach(key => {
        search(node.children[key])
      })
    })
      search(currentNode);
      return suggestions
  }

  wordCount(count) {
    return this.count
  }

  populate(dictionaryArray) {
    dictionaryArray.forEach(word => this.insert(word));
  }

  contains(word) {
    let currentNode = this.rootNode;
      const wordArray = [...word]
      wordArray.forEach(letter => {
          currentNode = currentNode.children[letter];
      })
    return currentNode.completedWord === word;
  }

}