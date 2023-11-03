<script>
    import logo from "../../assets/kuizz.svg"
</script>

<nav class="nav">
    <a href="/" class="a"><img width="48" height="48" src={logo} class="logo" alt="" /></a>
</nav>

<slot />

<style lang="scss">
    .nav {
        background-color: var(--main);
        position: fixed;
        margin-top: 0px;
        display: flex;
        justify-content: center;
        margin-left: 0px;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100vw;
        height: 50px;
    }
</style>
