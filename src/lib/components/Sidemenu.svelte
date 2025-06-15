<script>
    import { faSearch } from "@fortawesome/free-solid-svg-icons";
    import profile_pic from "../../assets/profile_pic.jpg";
    import Fa from "svelte-fa";

    const contacts = [
        {
            name: "John Doe",
            lastMessage: "Hello",
        },
        {
            name: "Jane Doe",
            lastMessage: "Hi",
        },
        {
            name: "Alice Smith",
            lastMessage: "Hey",
        },
        {
            name: "Bob Johnson",
            lastMessage: "How are you?",
        },
        {
            name: "Charlie Brown",
            lastMessage: "What's up?",
        },
    ];
</script>

<div class="sidemenu">
    <h2 class="title">Ferchat</h2>
    <div class="search-bar">
        <div class="search-icon">
            <Fa icon={faSearch} />
        </div>
        <input type="text" />
    </div>
    {#each contacts as contact}
        <div class="contact-container">
            <img class="profile-pic" src={profile_pic} alt="Profile Picture" />
            <div>
                <h4>{contact.name}</h4>
                <p>{contact.lastMessage}</p>
            </div>
        </div>
    {/each}
</div>

<style>
    .sidemenu {
        display: flex;
        flex-direction: column;
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 4em;
        height: 100%;
        width: 32em;
        border-style: none solid none none;
        border-color: #323333;
        border-width: 1px;
    }
    .title {
        align-self: self-start;
        padding: 0 0.8em;
    }
    .search-bar {
        display: flex;
        margin: 0 0.8em;
        border-radius: 0.8em;
        height: 2.5em;
        border: none;
        background-color: #323333;
        align-content: center;
        justify-content: start;
    }
    .search-icon {
        width: 2.5em;
        height: 2.5em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .search-bar input {
        border: none;
        outline: none;
        border-radius: 0.8em;
        width: calc(100% - 3em);
        background-color: #323333;
        color: #fff;
        font-size: 1em;
    }
    .contact-container {
        display: flex;
        align-items: center;
        justify-content: start;
        height: 3em;
        margin: 0.8em 0.8em 0 0.8em;
        padding: 0.8em;
        border-radius: 0.8em;
        transition: background-color 0.1s;
    }
    .contact-container div {
        display: flex;
        flex-direction: column;
        margin-left: 1em;
    }
    .contact-container:hover {
        background-color: #323333;
    }
    .contact-container h4 {
        font-size: 1em;
        font-weight: 500;
        margin: 0;
        color: #fff;
    }
    .contact-container p {
        font-size: 0.8em;
        margin: 0;
        font-weight: 400;
        color: #fff;
        align-self: self-start;
    }
    .profile-pic {
        width: 3em;
        height: 3em;
        border-radius: 50%;
        object-fit: cover;
    }
</style>
