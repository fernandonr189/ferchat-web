<script>
    import TextInput from "../components/TextInput.svelte";

    let usernameInput = "";
    let passwordInput = "";
    let passwordConfirmationInput = "";
    let emailInput = "";

    async function handleSignup() {
        if(passwordInput === passwordConfirmationInput) {
            let data = await fetch(
                "http://backend:8000/signup",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'username': usernameInput,
                        'password': passwordInput,
                        'emal': emailInput
                    })
                }
            )
            console.log(data)
        }
    }
</script>

<div class="bg-slate-800 flex items-center justify-center h-fit">
    <div
        class="bg-slate-900 p-6 rounded-lg shadow-lg m-5 flex flex-col sm:flex-row">
        <div class="m-4">
            <img class="w-full h-auto rounded-md shadow" src="/public/login_background.jpg" alt="babck">
        </div>

        <div class="flex flex-col ml-5 mr-3 justify-center items-center">
            <TextInput
                bind:value={usernameInput}
                hint="CoolUsername93"
                label="Username" />
            <TextInput
                bind:value={emailInput}
                hint="example@example.com"
                label="Email" />
            <TextInput
                bind:value={passwordInput}
                hint="Very safe password"
                type="password"
                label="Password" />
            <TextInput
                bind:value={passwordConfirmationInput}
                hint="Re-type password"
                type="password"
                label="Confirm password" />

            <button onclick={handleSignup} class="btn btn-outline">
                Login                
            </button>
        </div>
    </div>
</div>
