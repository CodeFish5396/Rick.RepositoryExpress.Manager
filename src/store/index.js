import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {		
		hasLogin: false,
		userName: "",
	},
	mutations: {
		userLogin(state, userInfo) {
			state.userName = userInfo.userName;
			state.hasLogin = true;
			localStorage.setItem('username', userInfo.userName);
		},
		userLogout(state) {
			state.userName = "";
			state.hasLogin = false;
			localStorage.removeItem('username');
		}
	}
})

export default store