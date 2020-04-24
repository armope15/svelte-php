import { token } from './store.js'
import { push } from 'svelte-spa-router'

const Sesion = {
    session: function() {
        const ls = localStorage.getItem('token')
        if (ls != null) {
            token.set(1)
        } else {
            token.set(0)
            push('/')
        }
    }
}

export default Sesion