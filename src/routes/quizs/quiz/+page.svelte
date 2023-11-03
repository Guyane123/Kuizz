<script lang="ts">
    import Cta from "../../../lib/CTA/CTA.svelte";
    import Desc from "../../../lib/Desc/Desc.svelte";
    import Title from "../../../lib/Title/Title.svelte";
    import Logo from "../../../assets/kuizz.svg";
    import Quiz from "../../../assets/quiz.json";
    export let slug: string;

    let point: number;
    let selectedElements: Array<(HTMLInputElement & EventTarget) | null>;
    let i = -1;

    $: i;

    let hero: HTMLElement | null = null;

    let pages: HTMLDivElement | null = null;
    let result: HTMLElement | null = null;
    let currentFocusedElement: (EventTarget & HTMLInputElement) | null;
    let currentQuizSection: HTMLElement | null;
    let pointHTML: HTMLSpanElement | null;
    let resultDesc: HTMLSpanElement | null;
    let logoAnchor: HTMLAnchorElement | null;

    const currentQuiz = Quiz.find((quiz) => quiz.name == slug)!;

    function shuffle(arr: typeof currentQuiz.questions) {
        return arr.sort((a: any, b: any) => 0.5 - Math.random());
    }

    let nextBtn: HTMLDivElement | null;
    let prevBtn: HTMLDivElement | null;

    $: if (pages) {
        if (currentFocusedElement) {
            if (i !== -1) {
                selectedElements[i] = currentFocusedElement;
            }

            if (i <= currentQuiz!.questions.length) {
                nextBtn!.style.visibility = "visible";
            } else {
                nextBtn!.style.visibility = "hidden";
            }
            currentFocusedElement = null;
        } else {
            nextBtn!.style.visibility = "hidden";
        }

        if (i >= 0) {
            prevBtn!.style.visibility = "visible";
        } else {
            prevBtn!.style.visibility = "hidden";
        }

        if (i == -1) {
            hero!.style.display = "flex";
            currentQuizSection!.style.display = "none";

            logoAnchor!.style.visibility = "visible";
        } else if (i === currentQuiz!.questions.length) {
            nextBtn!.style.visibility = "hidden";
            prevBtn!.style.visibility = "hidden";

            let points = 0;

            logoAnchor!.style.visibility = "visible";

            selectedElements.map((el, k) => {
                const point = Number(el!.getAttribute("data-point"));
                if (el!.type == "text" || el!.type == "number") {
                    console.log(el);
                    if (currentQuiz!.questions[k].awaited) {
                        if (
                            el!.value ===
                            String(currentQuiz!.questions[k].awaited)
                        ) {
                            points += point;
                        }
                    } else {
                        points += Number(el!.value);
                    }
                } else {
                    points += point;
                }
            });

            resultDesc!.innerHTML = `<br />${String(points)} / ${
                currentQuiz.maxPoint
            }`;
            resultDesc!.innerHTML += `<br />${Math.floor(100 * currentQuiz.maxPoint / points)}% de bonnes réponses`;
            resultDesc!.innerHTML += `<br />${Math.floor(20 * currentQuiz.maxPoint /points)}/20 de bonnes réponses`;

            if (points >= currentQuiz!.minPoint) {
                resultDesc!.innerHTML += `<br />${currentQuiz!.resultText}`;
            }

            pointHTML!.innerText = String(points);

            result!.style.display = "block";
        } else {
            logoAnchor!.style.visibility = "hidden";
            hero!.style.display = "none";
            currentQuizSection!.style.display = "block";

            result!.style.display = "none";
        }

        const pagesArray = pages.querySelectorAll(".question");
        const prevEl = pagesArray[i - 1];
        const nextEl = pagesArray[i + 1];

        if (prevEl) {
            if (prevBtn!.classList.contains("right")) {
                prevEl.classList.remove("right");
            }
            prevEl.classList.add("left");
        }
        if (nextEl) {
            if (prevBtn!.classList.contains("next")) {
                nextEl.classList.remove("left");
            }
            nextEl.classList.remove("left");
            nextEl.classList.add("right");
        }
        pagesArray.forEach((page, k) => {
            if (i === k) {
                page.classList.add("active");
            } else {
                page.classList.remove("active");
            }
        });
    }

    selectedElements = Array(currentQuiz!.questions.length).fill(null);
</script>

<section class="hero" bind:this={hero}>
    <div class="body">
        <div>
            <Title>{currentQuiz.title}</Title>
            <Desc>{currentQuiz.desc}</Desc>
        </div>

        <Cta on:click={(e) => (i = 0)}>Commencer le quiz</Cta>
    </div>

    <img src={currentQuiz.image} class="img" alt="" width="600" height="400" />
</section>

<section class="currentQuiz" bind:this={currentQuizSection}>
    <form class="form">
        <div class="pages" bind:this={pages}>
            {#each currentQuiz.questions as question, i (i)}
                <div class={`${i} question right`}>
                    <div class="center">
                        <Title>{question.question}</Title>
                    </div>

                    <div class="answears">
                        {#each question.answear as answear}
                            <input
                                data-point={answear.value}
                                on:click={(e) =>
                                    (currentFocusedElement = e.currentTarget)}
                                type={answear.type}
                                value={answear.content}
                            />
                        {/each}
                    </div>
                    <p class="pageNbr">
                        {i + 1} / {currentQuiz.questions.length + 1}
                    </p>
                </div>
            {/each}
        </div>
    </form>
</section>

<section class="result" bind:this={result}>
    <div class="center">
        <Title>Vous avez <span bind:this={pointHTML} /> point !</Title>
        <Desc><span bind:this={resultDesc} /></Desc>
    </div>
</section>

<footer class="footer">
    <div bind:this={prevBtn} class="container">
        <Cta
            bgColor={"transparent"}
            borderColor={"gray"}
            color={"black"}
            width={200}
            height={32}
            fontSize={16}
            on:click={(e) => {
                e.preventDefault();

                i--;
            }}>Prev</Cta
        >
    </div>
    <a bind:this={logoAnchor} class="logo" href="/"
        ><img width={64} height={64} src={Logo} alt="" /></a
    >
    <div bind:this={nextBtn} class="container">
        <Cta
            color={"black"}
            borderColor={"#4556DB"}
            bgColor={"transparent"}
            width={200}
            height={32}
            fontSize={16}
            on:click={(e) => {
                e.preventDefault();
                i++;
            }}>Next</Cta
        >
    </div>
</footer>


<style lang="scss">
    @media (max-width: 536px) {
        input {
            width: 75vw !important;
        }
    }
    .container {
        margin: 16px;
    }
    .left {
        animation-name: slideinleft !important;
    }
    .question {
        animation: 0.4s ease-out forwards;
    }
    .right {
        animation-name: slideinright;
    }

    @keyframes slideinleft {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0%);
        }
    }
    @keyframes slideinright {
        from {
            transform: translateX(+100%);
        }
        to {
            transform: translateX(0%);
        }
    }
    .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 7px 0px;
    }
    .logo {
        visibility: hidden;
    }
    .logo:hover {
        cursor: pointer;
    }
    .img {
        margin-right: 32px;
    }
    .answears {
        margin-top: 32px;
        max-height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 1124px) {
        .answears {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        input[type="button"] {
            margin-right: 32px !important;
            margin-bottom: 32px !important;
        }
        input {
            font-size: 20px!important;
        }
    }
    .center {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }

    input[type="button"],
    input[type="text"],
    input[type="number"] {
        all: unset;

        margin-right: 16px;
        margin-left: 16px;

        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
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
        margin-top: 32px;
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
        justify-content: space-around;
        margin-bottom: 100px;
    }
    @media (max-width: 700px) {
        .img {
            width: 300px;
            height: 200px;
        }
        .page {
            margin-top: 0px;
        }
    }
    @media (max-width: 1280px) {
        .hero {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .body {
            justify-content: center;
            align-items: center;
        }
        .img {
            margin-top: 28px;
            margin-right: 0px;
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
