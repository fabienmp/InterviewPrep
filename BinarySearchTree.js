$(document).ready(function () {
  console.log("BST ready!");

  window.onerror = function (msg, url, lineNo) {
    $('#errorDiv').text(msg);
    return false;
  }

  class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }

  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    insertInternal(node, value) {
      if (value > node.value) {
        if (node.right == null) {
          node.right = new Node(value);
        } else {
          this.insertInternal(node.right, value);
        }
      } else if (value <= node.value) {
        if (node.left == null) {
          node.left = new Node(value);
        } else {
          this.insertInternal(node.left, value);
        }
      }
    }

    insert(value) {
      if (this.root == null) {
        this.root = new Node(value);
      } else {
        this.insertInternal(this.root, value);
      }
    }


    lookup(value) {

      return this.lookupInternal(this.root, value);

    }

    lookupInternal(node, value) {

      if (node == null) {
        return null;
      } else if (node.value == value) {
        return node;
      }

      if (value > node.value) {
        return this.lookupInternal(node.right, value);
      } else if (value < node.value) {
        return this.lookupInternal(node.left, value);
      }
    }

    traverseInorder() {
      var array = [];
      this.traverseInorderInternal(this.root);

    }

    traverseInorderInternal(node) {
      if (node == null)
        return;

      traverseInorderInternal(node.left);
      console.log(node.value);
      traverseInorderInternal(node.right);
    }

    remove(value) {

      this.removeInternal(null, this.root, value);

    }

    removeInternal(parentNode, node, value) {

      if (value > node.value) {
        this.removeInternal(node, node.right, value);
      } else if (value < node.value) {
        this.removeInternal(node, node.left, value);
      } else if (value == node.value) {
        //We have a match!



      }

      //return null;

    }

  }

  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  console.log(JSON.stringify(traverse(tree.root)));
  var currentDisplayText = "TREE: " + JSON.stringify(traverse(tree.root));
  $('#insertDiv').text(currentDisplayText);

  currentDisplayText = "NODE LOOKUP 20: " + JSON.stringify(tree.lookup(20));
  currentDisplayText += "\rNODE LOOKUP 9: " + JSON.stringify(tree.lookup(9));
  currentDisplayText += "\rNODE LOOKUP 15: " + JSON.stringify(tree.lookup(15));
  currentDisplayText += "\rNODE LOOKUP 546: " + JSON.stringify(tree.lookup(546));
  $('#lookupDiv').text(currentDisplayText);

  function traverse(node) {
    const tree = {
      value: node.value
    };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }


});