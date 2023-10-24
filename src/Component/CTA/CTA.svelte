
<script lang="ts">
    export let bgColor: string | undefined = "#4556DB";
    export let borderColor: string |undefined = "transparent";
    export let fontSize: number |undefined = 32;
    export let color: string |undefined = "white";

    export let width: number |undefined = 400;
    export let height: number |undefined = 65;
    export let link: string | undefined |null = undefined;
</script>


{#if link}
    <div class="btn">
        <a class="a" href={link}>
            <slot></slot>
        </a>
    </div>
{:else}
    <button class="btn" on:click style={`color: ${color};font-size: ${fontSize}px;background-color: ${bgColor}; border: solid 2px ${borderColor}; height: ${height}px; width: ${width}px`}>
        <slot></slot>
    </button>

{/if}

<style lang="scss">
    @media(max-width: 536px) {
        .btn {
            width: 100%!important;
        }
    }
    .btn {
        all: unset;
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
        & {
            cursor: pointer;
        }
    }
    .a {
        all: unset;
        color: white;
    }
</style>
