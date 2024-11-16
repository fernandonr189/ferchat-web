<script>
  import { Router, Link, Route } from "svelte-routing"
  import Counter from './lib/components/Counter.svelte'
  import Home from "./lib/routes/Home.svelte";

  let url = $state("")
</script>


<Router {url}>
  <Route path="/" component={Home}/>
</Router>