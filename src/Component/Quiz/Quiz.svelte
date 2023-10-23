<script lang="ts">

    export let title: string;
    export let link: string;
    export let desc: string;
    export let img: string;
</script>


<a class="card" href={link}>
    <img src={img} alt="" class="img"/>
    

    <div class="body">
        <div class="title">{title}</div>
        <p class="desc">{desc}</p>
    </div>


</a>

<style lang="scss">
    .card {
        all: unset;
        height: 300px;
        width: 400px;
        
        background-color: white;
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        border-radius: 8px;
        margin-right: 15px;
        margin-bottom: 26px;
        &:hover {
            cursor: pointer;
        }
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
        font-weight: 400;
    }
</style>
