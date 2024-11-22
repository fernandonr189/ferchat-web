<script>
    import { Link } from "svelte5-router";
    import TextInput from "../components/TextInput.svelte";
    import { userData } from "../stores/UserData.svelte";
    import { userPrefs } from "../stores/UserPrefs.svelte";

    let usernameInput = "";
    let passwordInput = "";
    let passwordConfirmationInput = "";
    let emailInput = "";

    async function handleSignup() {
        if (passwordInput === passwordConfirmationInput) {
            let data = await fetch("http://localhost:8000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: usernameInput,
                    password: passwordInput,
                    email: emailInput,
                }),
            });
            if (data.status === 200) {
                handleLogin();
            }
        }
    }

    async function handleLogin() {
        let data = await fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: emailInput,
                password: passwordInput,
            }),
        });
        if (data.status === 200) {
            let jsonData = await data.json();
            // Login correct
            userData.set({
                username: jsonData.data.Model.username,
                email: jsonData.data.Model.email,
                jwt_tk: jsonData.data.Model.token,
            });
            userPrefs.set({
                isLogedIn: true,
            });
            window.location.href = "/";
        } else {
            // Login incorrect
        }
    }
</script>

<div class="page">
    <div class="hero bg-slate-800 py-4">
        <div class="hero-content flex-col lg:flex-row-reverse px-12">
            <!-- svelte-ignore a11y_label_has_associated_control -->
            <div class="card bg-slate-900 w-full max-w-sm shrink-0 shadow-2xl">
                <form class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Username</span>
                        </label>
                        <input
                            bind:value={usernameInput}
                            type="text"
                            placeholder="username"
                            class="input input-bordered"
                            required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input
                            bind:value={emailInput}
                            type="email"
                            placeholder="email"
                            class="input input-bordered"
                            required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input
                            bind:value={passwordInput}
                            type="password"
                            placeholder="password"
                            class="input input-bordered"
                            required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text"
                                >Password confirmation</span>
                        </label>
                        <input
                            bind:value={passwordConfirmationInput}
                            type="password"
                            placeholder="repeat password"
                            class="input input-bordered"
                            required />
                    </div>
                    <div class="form-control mt-6">
                        <button type="button" onclick={handleSignup} class="btn btn-primary"
                            >Signup</button>
                    </div>
                    <div class="form-control mt-1">
                        <label class="label">
                            <p class="label-text-alt">
                                Already have an account?
                            </p>
                        </label>
                        <Link to="/login" class="btn btn-primary">Login</Link>
                    </div>
                </form>
            </div>
            <div class="lg:text-right lg:visible invisible">
                <h1 class="text-5xl font-bold">Register now!</h1>
                <p class="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                </p>
            </div>
        </div>
    </div>
</div>
