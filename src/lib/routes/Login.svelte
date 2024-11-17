<script>
    import { userPrefs } from "../stores/UserPrefs.svelte";
    import { userData } from "../stores/UserData.svelte";
    import TextInput from "../components/TextInput.svelte";
    import { Link } from "svelte-routing";

    let emailInput = "";
    let passwordInput = "";

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
        if(data.status === 200) {
            let jsonData = await data.json()
            // Login correct
            userData.set({
                username: jsonData.data.Model.username,
                email: jsonData.data.Model.email,
                jwt_tk: jsonData.data.Model.token
            })
            userPrefs.set({
                isLogedIn: true
            })
            window.location.href = "/"
        }
        else {
            // Login incorrect
        }
    }
</script>

<div class="bg-slate-800 flex items-center justify-center h-fit">
    <div
        class="bg-slate-900 p-6 rounded-lg shadow-lg m-5 flex flex-col sm:flex-row">
        <div class="m-4">
            <img
                class="w-full h-auto rounded-md shadow"
                src="login_background.jpg"
                alt="babck" />
        </div>

        <div class="flex flex-col ml-5 mr-3 justify-center items-center">
            <TextInput
                bind:value={emailInput}
                hint="example@example.com"
                label="Email" />
            <TextInput
                bind:value={passwordInput}
                hint="Very safe password"
                type="password"
                label="Password" />
            <button onclick={handleLogin} class="btn btn-outline">
                Login
            </button>
            <div class="mt-4 flex flex-col items-center">
                <p class="py-2">Not a member?</p>
                <Link to="/signup" class="btn btn-outline">Signup!</Link>
            </div>
        </div>
    </div>
</div>
