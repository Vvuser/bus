import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
	state:{
		cityName:'北京',
		start:'',
		end:''
	},
	mutations:{
		setCity:(state,name)=>{
			state.cityName = name
		},
		setStart:(state,start)=>{
			state.start = start
		},
		setEnd:(state,end)=>{
			state.end = end
		}
	},
	getters:{
		cityName:(state)=>{
			return state.cityName
		},
		start:(state)=>{
			return state.start
		},
		end:(state)=>{
			return state.end
		}
	}
})
