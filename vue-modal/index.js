/**
 * Created by zhengzhaozhao on 2016/10/9.
 */
Vue.component('modal', {
  template: '#modal-template'
})

new Vue({
  el: '#app',
  data: {
    showModal: false
  }
})