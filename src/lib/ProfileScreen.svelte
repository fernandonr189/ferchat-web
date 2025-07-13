<script>
    import { profile_update, PROFILE_UPDATE_STATUS } from "./js/api/http.js";
    import { navigate } from "svelte5-router";

    let username = $state("");
    let firstName = $state("");
    let lastName = $state("");
    let phoneNumber = $state("");
    let bio = $state("");

    async function submitProfile() {
        const profileUpdateResponse = await profile_update(
            firstName,
            lastName,
            username,
            phoneNumber,
            bio,
        );

        switch (profileUpdateResponse.status) {
            case PROFILE_UPDATE_STATUS.OK:
                navigate("/");
                break;
            case PROFILE_UPDATE_STATUS.PROFILE_ALREADY_EXISTS:
                alert("Profile already exists");
                break;
            case PROFILE_UPDATE_STATUS.USERNAME_ALREADY_EXISTS:
                alert("Username already exists");
                break;
            case PROFILE_UPDATE_STATUS.UNKNOWN_ERROR:
                alert("Unknown error");
                break;
            case PROFILE_UPDATE_STATUS.SERVER_ERROR:
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
