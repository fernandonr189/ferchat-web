<script>
    import { post } from "./js/repository.js";
    import { navigate } from "svelte5-router";
    const options = {
        LOGIN: "LOGIN",
        SIGNUP: "SIGNUP",
    };

    let selectedOption = $state(options.LOGIN);
    function switchOption(option) {
        selectedOption = option;
    }

    // Signup
    let signupPassword = $state("");
    let signupEmail = $state("");
    let signupPasswordConfirmation = $state("");

    async function submitSignup() {
        if (signupPassword !== signupPasswordConfirmation) {
            alert("Passwords dont match");
            return;
        }
        const response = await post("http://localhost:8080/auth/signup", {
            email: signupEmail,
            password: signupPassword,
        });
        switch (response.status) {
            case -1:
                alert("There was a problem with the request");
                return;
            case 200:
                alert("Signup succesful");
                break;
            case 400:
                alert("Signup failed");
                break;
        }
    }

    // Login
    let loginPassword = $state("");
    let loginEmail = $state("");

    async function submitLogin() {
        const response = await post("http://localhost:8080/auth/login", {
            email: loginEmail,
            password: loginPassword,
        });
        switch (response.status) {
            case -1:
                alert("There was a problem with the request");
                return;
            case 200:
                if (response.data.data.has_profile) {
                    navigate("/");
                } else {
                    navigate("/profile");
                }
                break;
            case 400:
                alert("Login failed");
                break;
        }
    }
</script>

<div>
    <header class="header">
        <h3>Ferchat</h3>
    </header>
    <div class="form">
        {#if selectedOption === options.LOGIN}
            <p>Email</p>
            <input
                bind:value={loginEmail}
                class="default-input"
                type="email"
                placeholder="Email"
            />
            <p>Password</p>
            <input
                bind:value={loginPassword}
                class="default-input"
                type="password"
                placeholder="Password"
            />
            <button onclick={submitLogin}>Login</button>
            <p>Not a member?</p>
            <button onclick={() => switchOption(options.SIGNUP)}>SignUp</button>
        {:else if selectedOption === options.SIGNUP}
            <p>Email</p>
            <input
                bind:value={signupEmail}
                class="default-input"
                type="email"
                placeholder="Email"
            />
            <p>Password</p>
            <input
                bind:value={signupPassword}
                class="default-input"
                type="password"
                placeholder="Password"
            />
            <p>Confirm password</p>
            <input
                bind:value={signupPasswordConfirmation}
                class="default-input"
                type="password"
                placeholder="Confirm Password"
            />
            <button onclick={submitSignup}>Signup</button>
            <p>Already a member?</p>
            <button onclick={() => switchOption(options.LOGIN)}>Login</button>
        {/if}
    </div>
    <footer class="footer"></footer>
</div>

<style>
    p {
        padding: 0;
        margin: 0;
    }
</style>
