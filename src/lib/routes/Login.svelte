<script>
    import TextInput from "../components/TextInput.svelte";

    let usernameInput = $state("");
    let passwordInput = $state("");
    let emailInput = $state("");
</script>

<div class="bg-slate-950 flex items-center justify-center h-fit">
    <div
        class="bg-slate-900 p-6 rounded-lg shadow-lg m-5 flex flex-col sm:flex-row">
        <div class="m-4">
            <img class="w-full h-auto rounded-md shadow" src="/public/login_background.jpg" alt="babck">
        </div>

        <div class="flex flex-col">
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
                bind:value={passwordInput}
                hint="Re-type password"
                type="password"
                label="Confirm password" />
        </div>
    </div>
</div>
