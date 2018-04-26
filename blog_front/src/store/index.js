import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

export default new Vuex.Store({
   state:{
        indexData:null
   },
   actions:{
        get_data({commit}){
            this._vm.axios.get("/api/back/class/getOneClass").then((data)=>{
                if(data.data.code=='2021'){
                 commit('get_data_M', data.data.data)
                }
              })
        }
   },
   mutations:{
        get_data_M(state,datas){
            state.indexData = datas
        }
   }
})