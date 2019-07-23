import Vue from 'vue'
import App from './ToDoList.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    list:[],
    filterType:'All',
    btns:[{type:'All',cls:'none'},
          {type:'Active',cls:'none'},
          {type:'Complete',cls:'none'}
        ]
  },
  getters:{
    getList(state){
      return state.list;
    },
    getFilterType(state){
      return state.filterType;
    },
    getBtns(state){
      return state.btns;
    }
  },
  mutations:{
    setList(state,item){
      state.list.push(item);
    },
    changeType(state,type){
      state.btns.forEach(btn=>{
        btn.cls=btn.type===type?'selected':'none';
      })
      state.filterType=type;
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
