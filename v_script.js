
var app = new Vue({
  el: '#ani',
  data: {
    message: 'Tic-tac-toe'
  }
})

var plx = new Vue({
  el: '#playerX',
  data: {
    rows: [
      { id: "X", time: "23 sec", score: '1' },
    ]
  }
});

var plo = new Vue({
  el: '#playerO',
  data: {
    rows: [
      { id: "O", time: "34 sec", score: '0' },

    ]
  }
});

var arr = new Vue({
  el: '#tags',
  data: {
    tags: ['1','2','3','4','5','6','7','8','9']
  }
})

new Vue({
  el: '#art',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})

