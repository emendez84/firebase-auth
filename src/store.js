import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { createStore } from 'vuex'

const store = createStore({
    state: {
        user: {
            loggedIn: false,
            data: null
        }
    },
    getters: {
        user(state){ 
            return state.user
        }
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value
        },
        SET_USER(state, value) {
            state.user.data = value
        }
    },
    actions: {
        async register(context,{email, password, name}) {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            if (response) {
                context.commit('SET_USER', response.user)
                response.user.updateProfile({displayName: name})
            } else {
                throw new Error('No se puede registrar al usuario')
            }
        },
        async login(context, {email, password}){
            const response = await signInWithEmailAndPassword(auth, email, password)
            if (response) {
                context.commit('SET_USER', response.user)
            } else {
                throw new Error('Fallo en el login')
            }
        },
        async logout(context) {

        },
        async fetchUser(context, user) {

        }
    }
})

export default store