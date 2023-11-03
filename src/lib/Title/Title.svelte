<h2 class="title">
    <slot />
</h2>

<style>
    .title {
        font-size: 48px;
        font-weight: bold;
        margin: 0px;
    }
    @media(max-width: 800px) {
        .title {
            font-size: 24px!important;
        }
    }
</style>
