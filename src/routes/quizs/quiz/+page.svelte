<script lang="ts">
    import Cta from "../../../Component/CTA/CTA.svelte";
    import Desc from "../../../Component/Desc/Desc.svelte";
    import Title from "../../../Component/Title/Title.svelte";

    export let slug: string;

    let point: number;
    let i = -1;

    $: i;

    let hero: HTMLElement | null = null;

    let pages: HTMLDivElement | null = null;
    let result: HTMLElement | null = null;
    let currentFocusedElement: EventTarget | null;
    let currentQuizSection: HTMLElement | null;

    let nextBtn: HTMLButtonElement | null;
    let prevBtn: HTMLButtonElement | null;

    $: if (pages) {
        console.log(currentFocusedElement);

        if (currentFocusedElement) {
            if (i >= 0) {
                nextBtn.style.visibility = "";
            } else if (i >= currentQuiz.questions.length) {
                nextBtn.style.visibility = "hidden";
            }
        }

        if (i == -1) {
            hero.style.display = "flex";
            currentQuizSection.style.display = "none";
        } else {
            hero.style.display = "none";
            currentQuizSection.style.display = "block";

            if (i == currentQuiz.questions.length) {
                result.style.display = "block";
            } else {
                result.style.display = "none";
            }
        }

        console.log(pages);
        console.log(i);
        pages.querySelectorAll(".question").forEach((page, k) => {
            if (i === k) {
                page.classList.add("active");
            } else {
                page.classList.remove("active");
            }
        });

        console.log(pages.querySelector("input:focus"));
    }

    const quizs = [
        {
            name: "number",
            image: "https://cdn.pixabay.com/photo/2023/10/15/13/59/walnuts-8316999_1280.jpg",
            title: "Number title",
            desc: "Calculate !",
            questions: [
                {
                    id: "1",
                    question: "Est-ce que 1 + 1 fait 2 ?",
                    answear: [
                        { type: "button", content: "oui" },
                        { type: "button", content: "non" },
                    ],
                },
                {
                    id: "2",
                    question: "Combien fait 1 + 1 ?",
                    answear: [
                        { type: "number", content: "Combien fait 1 + 1 ?" },
                    ],
                },
                {
                    id: "3",
                    question: "Combien fait 1 + 1 ?",
                    answear: [
                        { type: "button", content: "1" },
                        { type: "button", content: "2" },
                        { type: "button", content: "3" },
                    ],
                },
            ],
        },
    ];

    const currentQuiz = quizs.find((quiz) => quiz.name == slug);
</script>

<section class="hero" bind:this={hero}>
    <div class="body">
        <div>
            <Title>{currentQuiz.title}</Title>
            <Desc>{currentQuiz.desc}</Desc>
        </div>

        <button class="btn" on:click={(e) => (i = 0)}>Commencer le quiz</button>
    </div>

    <img src={currentQuiz.image} class="logo" alt="" width="600" height="400" />
</section>

<section class="currentQuiz" bind:this={currentQuizSection}>
    <form class="form">
        <div class="pages" bind:this={pages}>
            {#each currentQuiz.questions as question}
                <div class={`${question.id} question`}>
                    <div class="center">
                        <Title>{question.question}</Title>
                    </div>

                    <div class="answears">
                        {#each question.answear as answear}
                            <input
                                on:click={(e) =>
                                    (currentFocusedElement = e.target)}
                                type={answear.type}
                                value={answear.content}
                            />
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </form>
</section>

<section class="result" bind:this={result}>Vous avez {point} point !</section>
<p class="pageNbr">{i + 1} / {currentQuiz.questions.length + 1}</p>

<footer class="footer">
    <button
        bind:this={prevBtn}
        class="prev"
        on:click|preventDefault={(e) => i--}>Prev</button
    >
    <button
        bind:this={nextBtn}
        class="next"
        on:click|preventDefault={(e) => i++}>Next</button
    >
</footer>

<!-- <div class="page">
    <p>
        Suis-je un bourgeois ? Comment savoir si je suis un bourgeois ? Vous
        vous êtes déjà posé ces questions ? Si vous souhaitez y répondre, vous
        êtes au bonne endroit.
    </p>

    {data.text}

    <a href="/quiz">Commencer le quiz !</a>
</div> -->

<style lang="scss">
    .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;

        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 7px 0px;
    }
    .logo {
        margin-right: 32px;
    }
    .prev,
    .next {
        all: unset;
        visibility: hidden;
        margin: 16px;
        height: 30px;
        width: 200px;
        border: 2px solid var(--secondary);
        color: black;
        display: flex;
        font-size: 16px;
        font-weight: bold;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        border-radius: 8px;
        & {
            cursor: pointer;
        }
    }
    .prev {
        border: gray 2px solid;
    }
    .answears {
        margin-top: 500px;
        display: flex;
        justify-content: space-between;
    }
    .center {
        text-align: center;
    }
    input[type="button"] {
        all: unset;
        height: 65px;
        width: 400px;
        color: black;
        display: flex;
        border: 2px solid var(--secondary);
        font-size: 32px;
        font-weight: bold;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        border-radius: 8px;
        &:hover {
            cursor: pointer;
        }
        &:focus {
            border: 2px solid var(--main);
        }
    }
    .result {
        display: none;
    }
    .question {
        display: none;
    }
    .hidden {
        visibility: hidden;
    }
    .active {
        display: block;
    }
    .pageNbr {
        display: flex;
        justify-content: space-around;
    }
    .btn {
        all: unset;
        height: 65px;
        width: 400px;
        background-color: var(--secondary);
        color: white;
        display: flex;
        font-size: 32px;
        font-weight: bold;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        border-radius: 8px;
        & {
            cursor: pointer;
        }
    }
    .hero {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        margin-bottom: 100px;
    }
    @media (max-width: 1280px) {
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
        justify-content: space-between;
    }
    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
