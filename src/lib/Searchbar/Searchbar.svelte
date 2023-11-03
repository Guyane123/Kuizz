<script lang="ts">

    import searchLogo from "../../assets/search.svg"
    export let search : string | undefined;
</script>

<div class="searchbar">
    <img src={searchLogo} alt="search logo" width="32" height="32" class="searchLogo">

    <input type="text" id="searchInput" name="searchInput" placeholder="search..." bind:value={search}>

</div>

<style lang="scss">
    .searchbar {
        position: relative;
        left: 50%;
        right: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 75%;
        border: 2px solid black;
        border-radius: 90px;
        height: 64px;
    }
    #searchInput {
        all: unset;
        width: 75%;
    }
</style>