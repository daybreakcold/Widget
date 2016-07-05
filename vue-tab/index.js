/**
 * Created by zhengzhaozhao on 16/7/5.
 */

var demo = new Vue({
  
  el: '#main',
  
  data: {
    active: 'home'
  },
  
  methods: {
    makeActive: function(item){
      this.active = item;
    }
  }
});
