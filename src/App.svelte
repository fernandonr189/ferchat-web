<script>
    import { navigate } from "svelte5-router";
    import { Router, Route } from "svelte5-router";
    import MainScreen from "./lib/MainScreen.svelte";
    import Login from "./lib/Login.svelte";
    import ProfileScreen from "./lib/ProfileScreen.svelte";
    import { get } from "./lib/js/util/requests";
    import { session_check, SESSION_STATUS } from "./lib/js/api/http";

    export let url = "/auth";

    async function checkSession() {
        const sessionCheck = await session_check();
        switch (sessionCheck.status) {
            case SESSION_STATUS.OK:
                navigate("/");
                break;
            case SESSION_STATUS.USER_DOES_NOT_EXIST:
                navigate("/auth");
                break;
            case SESSION_STATUS.USER_IS_DISABLED:
                navigate("/auth");
                break;
            case SESSION_STATUS.USER_DOES_NOT_HAVE_A_PROFILE:
                navigate("/profile");
                break;
            case SESSION_STATUS.UNKNOWN_ERROR:
                alert("Unknown error");
                break;
            case SESSION_STATUS.SERVER_ERROR:
                alert("Server error");
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
