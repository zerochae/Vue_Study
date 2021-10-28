import axios from "axios";
import { createStore } from "vuex";
const store = createStore({
    state() {
        return {
            name: "zerochae",
            likes: 302,
            liked: false,
            more: {},
        };
    },
    mutations: {
        setMore(state, data) {
            state.more = data;
        },
        like(state) {
            if (state.liked == false) {
                state.likes++;
                state.liked = true;
            }
            else {
                state.likes--;
                state.liked = false;
            }
        },
    },
    actions: {
        getData(context) {
            axios
                .get("https://codingapple1.github.io/vue/more0.json")
                .then((result) => {
                context.commit("setMore", result.data);
            });
        },
    },
});
export default store;
//# sourceMappingURL=store.js.map