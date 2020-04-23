import Inicio from './Principal/Inicio.svelte'
import Editar from './Principal/Editar.svelte'
import Guardar from './Principal/Guardar.svelte'
import Login from './Login/Login.svelte'
import Registro from './Login/Registro.svelte'
import ErrorRuta from './Login/ErrorRuta.svelte'

const routes = {
    '/': Login,
    '/Registro': Registro,
    '/Inicio': Inicio,
    '/Guardar': Guardar,
    '/Editar/:id': Editar,
    '*': ErrorRuta
}

export default routes