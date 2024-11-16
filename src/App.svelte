<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./lib/routes/Home.svelte";
  import Nav from "./lib/components/Nav.svelte";
  import About from "./lib/routes/About.svelte";

  let { url } = $props();
</script>

<Router {url}>
  <Nav />
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
</Router>
