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
    let signupUsername = $state("");
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
            username: signupUsername,
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
                navigate("/");
                break;
            case 400:
                alert("Login failed");
                break;
        }
    }
</script>

<div>
    <header class="login-header">
        <h3>Ferchat</h3>
    </header>
    <div class="login-form">
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
            <p>Username</p>
            <input
                bind:value={signupUsername}
                class="default-input"
                type="text"
                placeholder="Username"
            />
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
    <footer class="login-footer"></footer>
</div>

<style>
    .default-input {
        border: none;
        outline: none;
        background-color: #323333;
        color: #fff;
        font-size: 1em;
        height: 2.5em;
        border-radius: 0.8em;
        padding: 0 0.5em;
    }
    .login-form {
        border-radius: 0.8em;
        background-color: #1d1f1f;
        padding: 3em;
        border: 1px solid #323333;
        display: flex;
        flex-direction: column;
        height: 32em;
        width: 24em;
        height: calc(100% - 8em);
        overflow-y: scroll;
        gap: 1em;
        text-align: start;
    }
    p {
        padding: 0;
        margin: 0;
    }
    .login-footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4em;
        background-color: #1d1f1f;
        border-top: 1px solid #323333;
        display: flex;
        align-items: center;
        padding: 0.8em;
        box-sizing: border-box;
    }
    .login-header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4em;
        background-color: #1d1f1f;
        border-bottom: 1px solid #323333;
        display: flex;
        align-items: center;
        padding: 0.8em;
        box-sizing: border-box;
    }
</style>
