<script lang="ts">
    import Quiz from "../Quiz/Quiz.svelte";
    import quizList from "../../assets/quiz.json";

    export let kuizz: string | undefined = undefined;

    function getFilteredKuizz(quizz: typeof quizList, stringToMatch: string | undefined) {
        if (stringToMatch) {
            return quizz.filter((el) => {
                return el.title
                    .toLowerCase()
                    .includes(stringToMatch.toLowerCase());
            });
        } else {
            return quizList
        }
    }
</script>

<div class="quiz">
    {#each getFilteredKuizz(quizList, kuizz) as quiz}
        <Quiz
            title={quiz.title}
            link={quiz.link}
            desc={quiz.desc}
            img={quiz.image}
        />
    {/each}
</div>

<style lang="scss">
    .quiz {
        margin-top: 100px;

        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>
