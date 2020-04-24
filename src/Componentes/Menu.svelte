<script>
import { link, push } from 'svelte-spa-router'
import axios from 'axios'
import {token} from '../store.js'

const ls = localStorage.getItem('token')
$: if(ls != null){
    push('/Inicio')
}

function salir(){
    console.log('SALIR')
    const tokenphp = JSON.parse(localStorage.getItem('token'))
    axios.post('http://localhost/sveltephp/login/salir.php?token=' + tokenphp)
    .then(res => {
        console.log('RESPUESTA :' + res.data)
        if(res.data === 'success'){
            console.log('SALIR')
            console.log('token vale' + ls)
            //console.log(res)
            localStorage.removeItem('token')
            token.set(0)
            console.log(localStorage.getItem('token')) 
            
            push('/')
        }
    })
}

</script>

<nav class="red" >
    <div class="nav-wrapper">
        <a href="#." class="brand-logo">CRUD Svelte-PHP</a>
        {#if $token === 1}
            <ul class="right hide-on-med-and-down">
                <li><a href="/Inicio" use:link >Inicio</a></li>
                <li><a href="/Guardar" use:link >Guardar</a></li>
                <li><a href="#." on:click={salir} >Salir</a></li>
            </ul>
        {/if}
    </div>
</nav>