import { expect } from 'chai';
import Trie from '../lib/Trie.js';
import Node from '../lib/Node.js';
import fs from 'fs';



describe('Trie', function () {
  let trie;
  // setup
  // execute
  // expect

  beforeEach(() => {
    trie = new Trie();
  });

  it('should start with a word count of zero', () => {
    expect(trie.count).to.equal(0);
  })

  it('should be a Trie with a root node', () => {
    expect(trie.rootNode).to.deep.equal(new Node());
  });

  describe('insert', () => {
    it('should be able to add a node to the Trie', () => {
      trie.insert('dog')
      trie.insert('dogs')
      trie.insert('doggie')
      // console.log(JSON.stringify(trie, null, 4))
      expect(trie.rootNode.children.d.value).to.equal('d');
    })

    it('should be able to add a word', () => {

    })

    it('should be able to take multiple words', () => {

    })
  })
  describe('suggest', () => {
    it('should take a prefix', () => {
      trie.insert('dog');
      trie.insert('doggo');
      trie.insert('dogs');
      trie.insert('do');
      // console.log(JSON.stringify(trie, null, 4))
      // console.log(trie.suggestions)
      expect(trie.suggest('D')).to.deep.equal([ 'do', 'dog', 'doggo', 'dogs' ]);
    })
  })

  describe('wordCount', () => {
    it('should return the number of words entered', () => {
      trie.insert('cat');
      trie.insert('hello');
      trie.insert('cups');
      trie.insert('pixel');
      let ourCount = trie.wordCount();
      expect(ourCount).to.equal(4);
    })
  })

  describe('populate', () => {  
    it('should take an array of words from the dictionary', () => {
      const text = "/usr/share/dict/words";
      const dictionary = fs.readFileSync(text).toString().trim().split('\n');
      let trie  = new Trie();
      trie.populate(dictionary);
      trie.wordCount();
      expect(trie.wordCount()).to.deep.equal(235886)
    })
  })

  describe('contains', () => {
    it('should return true if word is found in trie', () => {
      trie.insert('catch')
      expect(trie.contains('catch')).to.equal(true)
    })
  })
})