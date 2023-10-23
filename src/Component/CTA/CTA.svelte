<script lang="ts">
    export let text: string;
    export let link: string;

</script>

<div class="btn">
    <a class="a" href={link}>
        {text}
    </a>
</div>


<style lang="scss">
    .btn {
        height: 65px;
        width: 400px;
        background-color: var(--secondary);
        color: white;
        display: flex;
        font-size: 32px;
        font-weight: bold;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        border-radius: 8px;
        &{
            cursor: pointer;
        }
    }
    .a {
        all: unset;
        color: white;
    }
</style>



