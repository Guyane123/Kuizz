<script>
    import Quiz from "../Quiz/Quiz.svelte";
    import quizList from "../../assets/quiz.json";
</script>

<div class="quiz">
    {#each quizList as quiz}
        <Quiz
            title={quiz.name}
            link={quiz.link}
            desc={quiz.desc}
            img={quiz.image}
        />
    {/each}
</div>

<style lang="scss">
    .quiz {
        margin-top: 100px;

        display: grid;

        justify-items: center;

        grid-column-gap: 12px;
        grid-row-gap: 6px;

        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        align-items: center;
        align-content: space-around;
        justify-content: center;
    }
</style>
