<script>
    import {
        login,
        LOGIN_STATUS,
        signup,
        SIGNUP_STATUS,
    } from "./js/api/http.js";
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
            alert("Passwords don't match");
            return;
        }
        const signupResponse = await signup(signupEmail, signupPassword);
        switch (signupResponse.status) {
            case SIGNUP_STATUS.OK:
                alert("Signup successful");
                break;
            case SIGNUP_STATUS.EMAIL_ALREADY_EXISTS:
                alert("Email already taken");
                break;
            case SIGNUP_STATUS.UNKNOWN_ERROR:
                alert("An unknown error occurred");
                break;
            case SIGNUP_STATUS.SERVER_ERROR:
                alert("An unknown error occurred");
                break;
        }
    }

    // Login
    let loginPassword = $state("");
    let loginEmail = $state("");

    async function submitLogin() {
        const loginResponse = await login(loginEmail, loginPassword);
        switch (loginResponse.status) {
            case LOGIN_STATUS.OK:
                navigate("/");
                break;
            case LOGIN_STATUS.USER_HAS_NO_PROFILE:
                navigate("/profile");
                break;
            case LOGIN_STATUS.USER_DOES_NOT_EXIST:
                alert("User does not exist");
                break;
            case LOGIN_STATUS.USER_INACTIVE:
                alert("User is inactive");
                break;
            case LOGIN_STATUS.INCORRECT_PASSWORD:
                alert("Incorrect password");
                break;
            case LOGIN_STATUS.UNKNOWN_ERROR:
                alert("An unknown error occurred");
                break;
            case LOGIN_STATUS.SERVER_ERROR:
                alert("Server error");
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
