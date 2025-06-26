<script>
    import { get } from "./lib/js/repository";
    import { navigate } from "svelte5-router";
    import { Router, Route } from "svelte5-router";
    import MainScreen from "./lib/MainScreen.svelte";
    import Login from "./lib/Login.svelte";
    import ProfileScreen from "./lib/ProfileScreen.svelte";

    export let url = "/auth";

    async function checkSession() {
        const response = await get("http://localhost:8080/api/session");
        switch (response.status) {
            case -1:
                alert("No connection to the server");
                navigate("/auth");
                return;
            case 200:
                navigate("/");
                break;
            case 401:
                // Unauthorized, no cookie, or its invalid
                alert("Invalid cookie");
                navigate("/auth");
                break;
        }
    }

    checkSession();
</script>

<main>
    <Router {url}>
        <Route path="/" component={MainScreen} />
        <Route path="/auth" component={Login} />
        <Route path="/profile" component={ProfileScreen} />
    </Router>
</main>
