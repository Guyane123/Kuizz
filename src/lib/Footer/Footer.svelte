<script>
    import logo from "../../assets/kuizz.svg"

</script>

<footer class="footer">

    <div class="top">
        <div>
            <h4 class="sitemap">Sitemap</h4>
            <ul class="list">
                <li><a class="a" href="/">home</a></li>
                <li><a class="a" href="quiz">quiz</a></li>
            </ul>
        </div>
        <img src={logo} alt="">
    </div>
    <div class="bottom">
        <p class="copyright">By Guyane</p>
    </div>

</footer>

<style lang="scss">
    .copyright {
        font-size:24px;
        color: white;
        text-align: center;
    }
    .a {
        all: unset;
        &:hover {
            cursor: pointer;
        }
    }
    .sitemap {
        font-weight: bold;
        font-size: 32px;
    }
    .list li {
        list-style: none;
        font-weight: normal;
        font-size: 24px;
    }
    .top {
        margin-bottom: 100px;
        display: flex;
        justify-content: space-around;
    }
    .bottom {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 64px;
        background-color: black;
    }
    .footer {
        margin-top: 100px;
        position: absolute;
        left: 0px;
        width: 100%;
        background-color: var(--main);
    }
</style>