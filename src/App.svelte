<script>
// @ts-nocheck

  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/+page.svelte";
  import Layout from "./routes/+layout.svelte";
  import Quizs from "./routes/quizs/+page.svelte"
  import Quiz from "./routes/quizs/quiz/+page.svelte"
  import Footer from "./Component/Footer/Footer.svelte";
</script>

<main>
  <Router>
      <slot />
      
    <div>
      <Route path="/" component={Home}/>
      <Route path="quizs" component={Quizs}/>
      <Route path="quizs/quiz/:slug" component={Quiz}/>
    </div>
  </Router>
</main>


