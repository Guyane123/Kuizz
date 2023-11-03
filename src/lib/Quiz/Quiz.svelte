<script lang="ts">
    import { Link } from "svelte-routing";

    export let title: string;
    export let link: string;
    export let desc: string;
    export let img: string;
</script>

<div class="card">
    <Link to={link}>
        <img src={img} alt="" class="img" />

        <div class="body">
            <div class="title">{title}</div>
            <p class="desc">{desc}</p>
        </div>
    </Link>
</div>

<style lang="scss">
    .card {
        all: unset;

        position: relative;
        height: 400px;
        width: 25%;

        background-color: white;
        color: black;
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
            0 8px 10px -6px rgb(0 0 0 / 0.1);
        border-radius: 8px;
        margin-right: 15px;
        margin-bottom: 26px;
        transition: 0.3s;
        &:hover {
            cursor: pointer;
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }
    }

    @media(max-width: 1280px) {
        .card{
          width: 50%;  
        } 
    }
    @media(max-width: 800px) {
        .card{
          width: 75%;  
        } 
    }
    .title {
        color: black;
        overflow-x: hidden;
    }
    .img {
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        width: 100%;
        height: 200px;
    }
    .body {
        padding: 8px;
    }
    .desc {
        color: black;
        font-weight: 400;
        max-height: 80px;
        overflow: hidden;
    }
</style>
