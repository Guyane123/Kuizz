<script>
    import Quiz from "../Quiz/Quiz.svelte";
</script>

<div class="quiz">
    <Quiz
        link="quizs/quiz/bourgeoisie"
        title="Test de bourgeoisie"
        desc="Suis-je un bourgeois ?"
        img="https://thispersondoesnotexist.com"
    />
    <Quiz
        link="quizs/quiz/bourgeoisie"
        title="Test de bourgeoisie"
        desc="Suis-je un bourgeois ?"
        img="https://thispersondoesnotexist.com"
    />
    <Quiz
        link="quizs/quiz/bourgeoisie"
        title="Test de bourgeoisie"
        desc="Suis-je un bourgeois ?"
        img="https://thispersondoesnotexist.com"
    />
    <Quiz
        link="quizs/quiz/bourgeoisie"
        title="Test de bourgeoisie"
        desc="Suis-je un bourgeois ?"
        img="https://thispersondoesnotexist.com"
    />
</div>

<style lang="scss">
    .quiz {
        margin-top: 64px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-items: center;
    }
    @media (max-width: 1944px) {
        .quiz {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    @media (max-width: 1550px) {
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
        .quiz {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 1124px) {
        .quiz {
            display: grid;
            grid-template-columns: 1fr;
        }
    }
</style>
