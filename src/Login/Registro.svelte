<script>
import {link, push} from 'svelte-spa-router'
import InputCustom from '../Componentes/InputCustom.svelte'
import File from '../Componentes/File.svelte'
import Swal from 'sweetalert2'
import axios from 'axios'

let pass = ''
let pass2 = ''
let email = ''
let show = false


function registrarse(){
    if (pass === pass2) {
        const form = document.getElementById('registroForm')
        axios.post('http://localhost/sveltephp/login/registro.php', new FormData(form))
        .then(res =>{
            console.log(res)
            if (res.data === 'success') {
                Swal.fire('Muy bien','Registrado correctamente','success')
                push('/')
            } else {
                Swal.fire('Ooops','Algo fallo en el registro','error')
                
            }
        })
    } else {
        Swal.fire('Ooops','Las password no son iguales','error')
    }
}



function validarEmail(){
    if(email != ''){
        const datosEmail = new FormData()
        datosEmail.append('email',email)
        axios.post('http://localhost/sveltephp/login/validarEmail.php', datosEmail)
        .then(res =>{
            console.log(res)
            if (res.data === 'success') {
                show = true
            } else {
                show = false
                Swal.fire('Ooops','El correo ya existe','error')
            }
        })
    }
}

</script>
<h1>Registro</h1>
<form on:submit|preventDefault={registrarse} id="registroForm" autocomplete="off" enctype="multipart/form-data" >
    <div class="input-field">
        <i class="material-icons prefix" >email</i>
        <input type="email" name="email" id="email" required bind:value={email} on:blur={validarEmail} >
        <label for="email">Email</label>
    </div>
    <InputCustom 
        type="password"
        id="pass"
        name="pass"
        label="Password"
        icon="https"
        value={pass}
        on:input={event => (pass = event.target.value) }
    />

    <InputCustom 
        type="password"
        id="pass2"
        name="pass2"
        label="Verificación de Password"
        icon="https"
        value={pass2}
        on:input={event => (pass2 = event.target.value) }
    />

    <InputCustom 
        id="usuario"
        name="usuario"
        label="Nombre de usuario"
        icon="account_circle"
    />

    <File />


    {#if show}
        <button type="submit" class="btn green" >Registrarse</button>
    {/if}
    <a href="/" use:link class="btn blue"  >Login</a>
</form>