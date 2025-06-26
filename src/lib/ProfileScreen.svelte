<script>
    import { post } from "./js/repository.js";
    import { navigate } from "svelte5-router";

    let username = $state("");
    let firstName = $state("");
    let lastName = $state("");
    let phoneNumber = $state("");
    let bio = $state("");

    async function submitProfile() {
        const response = await post("http://localhost:8080/api/profile", {
            first_name: firstName,
            last_name: lastName,
            username: username,
            phone_number: phoneNumber,
            bio: bio,
        });
        switch (response.status) {
            case -1:
                alert("There was a problem with the request");
                return;
            case 200:
                alert("Profile updated");
                navigate("/");
                break;
            case 400:
                alert("Profile update failed");
                break;
        }
    }
</script>

<div>
    <header class="header">
        <h3>Ferchat</h3>
    </header>
    <div class="form">
        <p>Username</p>
        <input
            bind:value={username}
            class="default-input"
            type="text"
            placeholder="Username"
        />
        <p>First Name</p>
        <input
            bind:value={firstName}
            class="default-input"
            type="text"
            placeholder="First Name"
        />
        <p>Last Name</p>
        <input
            bind:value={lastName}
            class="default-input"
            type="text"
            placeholder="Last Name"
        />
        <p>Phone Number</p>
        <input
            bind:value={phoneNumber}
            class="default-input"
            type="tel"
            placeholder="Phone Number"
        />
        <p>Bio</p>
        <textarea bind:value={bio} class="default-input" placeholder="Bio"
        ></textarea>
        <button onclick={submitProfile}>Login</button>
    </div>
    <footer class="footer"></footer>
</div>

<style>
    p {
        padding: 0;
        margin: 0;
    }
</style>
