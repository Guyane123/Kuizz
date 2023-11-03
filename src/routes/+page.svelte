<script lang="ts">
    import Cta from "../lib/CTA/CTA.svelte";
    import Desc from "../lib/Desc/Desc.svelte";
    import Navbar from "../lib/Navbar/Navbar.svelte";
    import QuizList from "../lib/QuizList/QuizList.svelte";
    import Title from "../lib/Title/Title.svelte";
    import Searchbar from "../lib/Searchbar/Searchbar.svelte";

    let searchContent: string | undefined = undefined

</script>


<div class="page">

    <Navbar />
    
    <section class="hero">
        
        <div class="body">
            <div>
                <Title>Vous vous posez des questions ?</Title>
                <Desc>Testez-vous sur des quiz à thème divers et variés.</Desc>
            </div>

            <div class="btn">
                <Cta link="/quizs">Voir les quiz !</Cta>
            </div>
            

        </div>

        <p class="logo"><span class="e">!</span><span class="q">?</span></p>
    
        
    </section>


    

    <section class="quiz">
        <div class="center">
            <Title>Quiz</Title>
        </div>

        <Searchbar  bind:search={searchContent}/> 

        


        <QuizList kuizz={searchContent} />
    </section>
</div>


<style lang="scss">
    .body {
        display: flex;
    }
    .hero {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        margin-bottom: 100px;
    }
    .logo {
        color: var(--main);
        font-size: 40vw;
        font-weight: bold;
        margin: 0;
        display: flex;
    }
    .e, .q {
        display: flex;
        flex-direction: column-reverse;
    }
    .e {
        
        color: var(--secondary);
    }
    @media(max-width: 1280px) {
        .hero {
            flex-direction: column;
            align-items: center;

        }
        .logo {
            font-size: 70vw;
        }
        .body {
            justify-content: center;
        }
        .btn {
            margin-top: 100px;
            display: flex;
            justify-content: center;
        }
    }
    .page {
        margin-top: 100px;
    }
    .body {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
    }
</style>
