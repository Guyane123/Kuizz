<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/+home.svelte";
  import Layout from "./routes/__layout.svelte";
  import Quiz from "./routes/+quiz.svelte";
</script>

<main>
  <Router>
    <Layout>

      
    </Layout>
    <div>
      <Route path="/" component={Home}/>
      <Route path="quiz" component={Quiz}/>
    </div>
  </Router>
</main>