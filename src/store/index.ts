import { createStore } from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default createStore({
	state: {
		userInfo: JSON.parse(localStorage.getItem("userInfo") as string) || {}
	},
	getters,
	mutations,
	actions,
})