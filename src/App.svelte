<script>
    import Router from 'svelte-spa-router'
    import routes from './routes.js' // importante poner ./routes.js  no olvidarse el ./
    import Menu from './Componentes/Menu.svelte'
</script>

<Menu />

<div class="container">
    <Router {routes} />
</div>