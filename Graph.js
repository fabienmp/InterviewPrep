$(document).ready(function () {
  console.log("Graph ready!");

  window.onerror = function (msg, url, lineNo) {
    $('#errorDiv').text(msg);
    return false;
  }

  class Graph {
    constructor() {
      this.numberOfNodes = 0;
      this.adjacentList = {

      };
    }
    addVertex(node) {
      if (this.adjacentList[node] === undefined) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
      }
    }
    addEdge(node1, node2) {
      //undirected Graph 
      var key = node1;
      if (this.adjacentList[node1] !== undefined && this.adjacentList[node2] === undefined) {
        key = node1;
      } else if (this.adjacentList[node2] !== undefined && this.adjacentList[node1] === undefined) {
        key = node2;
      } else if (this.adjacentList[node2] === undefined && this.adjacentList[node1] === undefined) {

        this.addVertex(node1);
        key = node1;
      }

      if (this.adjacentList[key] !== undefined) {
        if (this.adjacentList[key].indexOf(node2) === -1) {
          this.adjacentList[key].push(node2);
        }
      }

    }

    showConnections() {
      var connectionsString = '';
      const allNodes = Object.keys(this.adjacentList);
      for (let node of allNodes) {
        let nodeConnections = this.adjacentList[node];
        let connections = "";
        let vertex;
        for (vertex of nodeConnections) {
          connections += vertex + " ";
        }
        console.log(node + "-->" + connections + '//');
        connectionsString += node + "-->" + connections + '//';
      }
      return connectionsString;
    }
  }

  const myGraph = new Graph();
  myGraph.addVertex('0');
  myGraph.addVertex('1');
  myGraph.addVertex('2');
  myGraph.addVertex('3');
  myGraph.addVertex('4');
  myGraph.addVertex('5');
  myGraph.addVertex('6');
  myGraph.addEdge('3', '1');
  myGraph.addEdge('3', '4');
  myGraph.addEdge('4', '2');
  myGraph.addEdge('4', '5');
  myGraph.addEdge('1', '2');
  myGraph.addEdge('1', '0');
  myGraph.addEdge('0', '2');
  myGraph.addEdge('6', '5');

  $('#graphDiv').text(myGraph.showConnections());

  //Answer:
  // 0-->1 2 
  // 1-->3 2 0 
  // 2-->4 1 0 
  // 3-->1 4 
  // 4-->3 2 5 
  // 5-->4 6 
  // 6-->5

});