Vue.filter('searchFor', function (value, searchString) {
  

  var result = [];
  
  if (!searchString) {
    return value;
  }
  
  searchString = searchString.trim().toLowerCase();
  
  result = value.filter(function (item) {
    if (item.title.toLowerCase().indexOf(searchString) !== -1) {
      return item;
    }
  })
  return result;
})


var demo = new Vue({
  el: '#main',
  data: {
    searchString: "",
    articles: [
      {
        "title": "圆通"
      },
      {
        "title": "中通"
      },
      {
        "title": "顺丰"
      },
      {
        "title": "韵达"
      },
      {
        "title": "申通"
      },
      {
        "title": "其它"

      }
    ],
    hide: true
  },
  methods: {
    keyup: function () {
      this.hide = false
      if (this.searchString == "") {
        this.hide = true
      }
    },
    setInputVal: function (event) {
      this.searchString = event.target.innerText;
      this.hide = true
    }
  }
});
