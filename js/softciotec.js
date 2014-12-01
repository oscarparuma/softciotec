$(function(){ // on dom ready

var elesJson = {
  nodes: [
    { data: { id: 'a', foo: 3, bar: 5, baz: 7 } },
    { data: { id: 'b', foo: 7, bar: 1, baz: 3 } },
    { data: { id: 'c', foo: 2, bar: 7, baz: 6 } },
    { data: { id: 'd', foo: 9, bar: 5, baz: 2 } },
    { data: { id: 'e', foo: 2, bar: 4, baz: 5 } }
  ], 

  edges: [
    { data: { id: 'ae', weight: 1, source: 'a', target: 'e' } },
    { data: { id: 'ab', weight: 3, source: 'a', target: 'b' } },
    { data: { id: 'be', weight: 4, source: 'b', target: 'e' } },
    { data: { id: 'bc', weight: 5, source: 'b', target: 'c' } },
    { data: { id: 'ce', weight: 6, source: 'c', target: 'e' } },
    { data: { id: 'cd', weight: 2, source: 'c', target: 'd' } },
    { data: { id: 'de', weight: 7, source: 'd', target: 'e' } }
  ]
};

// Social Network Source Code Repository
var elesJsonSNSCR = {
  nodes: [
    { data: { id: 'dev1', foo: 3, bar: 5, baz: 7 } },
    { data: { id: 'dev2', foo: 7, bar: 1, baz: 3 } },
    { data: { id: 'dev3', foo: 2, bar: 7, baz: 6 } },
    { data: { id: 'dev4', foo: 9, bar: 5, baz: 2 } },
    { data: { id: 'dev5', foo: 2, bar: 4, baz: 5 } }
  ], 

  edges: [
    { data: { id: 'dev1dev5', weight: 1, source: 'dev1', target: 'dev5' } },
    { data: { id: 'dev1dev2', weight: 3, source: 'dev1', target: 'dev2' } },
    { data: { id: 'dev2dev5', weight: 4, source: 'dev2', target: 'dev5' } },
    { data: { id: 'dev2dev3', weight: 5, source: 'dev2', target: 'dev3' } },
    { data: { id: 'dev3dev5', weight: 6, source: 'dev3', target: 'dev5' } },
    { data: { id: 'dev3dev4', weight: 2, source: 'dev3', target: 'dev4' } },
    { data: { id: 'dev4dev5', weight: 7, source: 'dev4', target: 'dev5' } }
  ]
};

// Source Code Repository
var elesJsonSCR = {
  nodes: [
    { data: { id: 'file1', foo: 3, bar: 5, baz: 7 } },
    { data: { id: 'file2', foo: 7, bar: 1, baz: 3 } },
    { data: { id: 'file3', foo: 2, bar: 7, baz: 6 } },
    { data: { id: 'file4', foo: 9, bar: 5, baz: 2 } },
    { data: { id: 'file5', foo: 2, bar: 4, baz: 5 } }
  ], 

  edges: [
    { data: { id: 'file1file5', weight: 1, source: 'file1', target: 'file5' } },
    { data: { id: 'file1file2', weight: 3, source: 'file1', target: 'file2' } },
    { data: { id: 'file2file5', weight: 4, source: 'file2', target: 'file5' } },
    { data: { id: 'file2file3', weight: 5, source: 'file2', target: 'file3' } },
    { data: { id: 'file3file5', weight: 6, source: 'file3', target: 'file5' } },
    { data: { id: 'file3file4', weight: 2, source: 'file3', target: 'file4' } },
    { data: { id: 'file4file5', weight: 7, source: 'file4', target: 'file5' } }
  ]
};

var elesJsonML = {
  nodes: [
    { data: { id: 'dev1', foo: 3, bar: 5, baz: 7 } },
    { data: { id: 'tester1', foo: 7, bar: 1, baz: 3 } },
    { data: { id: 'dev2', foo: 2, bar: 7, baz: 6 } },
    { data: { id: 'user1', foo: 9, bar: 5, baz: 2 } },
    { data: { id: 'user2', foo: 2, bar: 4, baz: 5 } }
  ], 

  edges: [
    { data: { id: 'dev1user2', weight: 1, source: 'dev1', target: 'user2' } },
    { data: { id: 'dev1tester1', weight: 3, source: 'dev1', target: 'tester1' } },
    { data: { id: 'tester1user2', weight: 4, source: 'tester1', target: 'user2' } },
    { data: { id: 'tester1dev2', weight: 5, source: 'tester1', target: 'dev2' } },
    { data: { id: 'dev2user2', weight: 6, source: 'dev2', target: 'user2' } },
    { data: { id: 'dev2user1', weight: 2, source: 'dev2', target: 'user1' } },
    { data: { id: 'user1user2', weight: 7, source: 'user1', target: 'user2' } }
  ]
};

var elesJsonIT = {
  nodes: [
    { data: { id: 'dev1', foo: 3, bar: 5, baz: 7 } },
    { data: { id: 'tester1', foo: 7, bar: 1, baz: 3 } },
    { data: { id: 'dev2', foo: 2, bar: 7, baz: 6 } },
    { data: { id: 'user1', foo: 9, bar: 5, baz: 2 } },
    { data: { id: 'tester2', foo: 2, bar: 4, baz: 5 } }
  ], 

  edges: [
    { data: { id: 'dev1tester2', weight: 1, source: 'dev1', target: 'tester2' } },
    { data: { id: 'dev1tester1', weight: 3, source: 'dev1', target: 'tester1' } },
    { data: { id: 'tester1tester2', weight: 4, source: 'tester1', target: 'tester2' } },
    { data: { id: 'tester1dev2', weight: 5, source: 'tester1', target: 'dev2' } },
    { data: { id: 'dev2tester2', weight: 6, source: 'dev2', target: 'tester2' } },
    { data: { id: 'dev2user1', weight: 2, source: 'dev2', target: 'user1' } },
    { data: { id: 'user1tester2', weight: 7, source: 'user1', target: 'tester2' } }
  ]
};

$('#cy').cytoscape({
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
		'background-color': '#76B37E',
        'width': 'mapData(baz, 0, 10, 10, 40)',
        'height': 'mapData(baz, 0, 10, 10, 40)',
        'content': 'data(id)'
      })
    .selector('edge')
      .css({
        'line-color': '#B1F2BA',
        'target-arrow-color': '#B1F2BA',
        'width': 2,
        'target-arrow-shape': 'circle',
        'opacity': 0.8
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black',
        'opacity': 1
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),
  
  elements: elesJsonSNSCR,
  
  layout: {
    name: 'circle',
    padding: 10
  },
  
  ready: function(){
    // ready 1
  }
});

$('#cy2').cytoscape({
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'background-color': '#6272A3',
        'shape': 'rectangle',
        'width': 'mapData(foo, 0, 10, 10, 30)',
        'height': 'mapData(bar, 0, 10, 10, 50)',
        'content': 'data(id)'
      })
    .selector('edge')
      .css({
        'width': 'mapData(weight, 0, 10, 3, 9)',
        'line-color': '#B1C1F2',
        'target-arrow-color': '#B1C1F2',
        'target-arrow-shape': 'triangle',
        'opacity': 0.8
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black',
        'opacity': 1
      }),
  
  elements: elesJsonSCR,
  
  layout: {
    name: 'breadthfirst',
    directed: true,
    padding: 10
  },
  
  ready: function(){
    // ready 2
  }
});

$('#cy3').cytoscape({
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
		'background-color': '#76B37E',
        'width': 'mapData(baz, 0, 10, 10, 40)',
        'height': 'mapData(baz, 0, 10, 10, 40)',
        'content': 'data(id)'
      })
    .selector('edge')
      .css({
        'line-color': '#B1F2BA',
        'target-arrow-color': '#B1F2BA',
        'width': 2,
        'target-arrow-shape': 'circle',
        'opacity': 0.8
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black',
        'opacity': 1
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),
  
  elements: elesJsonML,
  
  layout: {
    name: 'circle',
    padding: 10
  },
  
  ready: function(){
    // ready 1
  }
});

$('#cy5').cytoscape({
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
		'background-color': '#76B37E',
        'width': 'mapData(baz, 0, 10, 10, 40)',
        'height': 'mapData(baz, 0, 10, 10, 40)',
        'content': 'data(id)'
      })
    .selector('edge')
      .css({
        'line-color': '#B1F2BA',
        'target-arrow-color': '#B1F2BA',
        'width': 2,
        'target-arrow-shape': 'circle',
        'opacity': 0.8
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black',
        'opacity': 1
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),
  
  elements: elesJsonIT,
  
  layout: {
    name: 'circle',
    padding: 10
  },
  
  ready: function(){
    // ready 1
  }
});

}); // on dom ready