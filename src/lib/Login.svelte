<script>
    const options = {
        LOGIN: "LOGIN",
        SIGNUP: "SIGNUP",
    };

    let selectedOption = $state(options.LOGIN);

    function switchOption(option) {
        selectedOption = option;
    }
</script>

<div>
    <header class="login-header">
        <h3>Ferchat</h3>
    </header>
    <div class="login-form">
        {#if selectedOption === options.LOGIN}
            <p>Email</p>
            <input class="default-input" type="email" placeholder="Email" />
            <p>Password</p>
            <input
                class="default-input"
                type="password"
                placeholder="Password"
            />
            <button>Login</button>
            <p>Not a member?</p>
            <button onclick={() => switchOption(options.SIGNUP)}>SignUp</button>
        {:else if selectedOption === options.SIGNUP}
            <p>Email</p>
            <input class="default-input" type="email" placeholder="Email" />
            <p>Password</p>
            <input
                class="default-input"
                type="password"
                placeholder="Password"
            />
            <p>Confirm password</p>
            <input
                class="default-input"
                type="password"
                placeholder="Confirm Password"
            />
            <button>Signup</button>
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
