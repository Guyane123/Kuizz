<script>
    import Cta from "../Component/CTA/CTA.svelte";
    import Desc from "../Component/Desc/Desc.svelte";
    import QuizList from "../Component/QuizList/QuizList.svelte";
    import Title from "../Component/Title/Title.svelte";

</script>


<div class="page">

    
    <section class="hero">
        <div class="body">
            <div>
                <Title>Vous vous posez des questions ?</Title>
                <Desc>Testez-vous sur des quiz à thème divers et variés.</Desc>
            </div>

            <Cta text="Voir les quiz !" link="/quiz">ddd</Cta>

        </div>
    
        <p class="logo"><span class="e">!</span><span class="q">?</span></p>
    </section>


    

    <section class="quiz">
        <div class="center">
            <Title>Quiz</Title>
        </div>
        <QuizList />
    </section>
</div>


<style lang="scss">
    .hero {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        margin-bottom: 100px;
    }
    .logo {
        color: var(--main);
        font-size: 768px;
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
            margin-top: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
        
        }
        .body {
            text-align: center;
            justify-content: center;
            align-items: center;
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
    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
