
<script>
    import Navbar from "../../lib/Navbar/Navbar.svelte";
    import QuizList from "../../lib/QuizList/QuizList.svelte";
    import Title from "../../lib/Title/Title.svelte";

</script>


<div class="page">

    <Navbar />
    <section class="quiz">
        <div class="center">
            <Title>Quiz</Title>
        </div>
        <QuizList />
    </section>
</div>

<style lang="scss">
    .page {
        margin-top: 100px;
    }
    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
