<script>
    import InputCustom from '../Componentes/InputCustom.svelte'


    function login(){}

</script>

<h1>Login</h1>

<form on:submit|preventDefault={login} id="loginForm" autocomplete="off">

    <InputCustom 
        type="email"
        id="email"
        name="email"
        label="email"
        icon="account_circle"
    />

     <InputCustom 
        type="password"
        id="pass"
        name="pass"
        label="password"
        icon="https"
    />

   


</form>
