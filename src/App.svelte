<script>
    import { Router, Link, Route } from "svelte-routing";
    import Home from "./lib/routes/Home.svelte";
    import Nav from "./lib/components/Nav.svelte";
    import About from "./lib/routes/About.svelte";
    import Signup from "./lib/routes/Signup.svelte";
    import Footer from "./lib/components/Footer.svelte";
    import Login from "./lib/routes/Login.svelte";

    let { url } = $props();
</script>

<Router {url}>
    <Nav />
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Footer />
</Router>
