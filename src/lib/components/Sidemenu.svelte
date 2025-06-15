<script>
    import { faSearch } from "@fortawesome/free-solid-svg-icons";
    import profile_pic from "../../assets/profile_pic.jpg";
    import Fa from "svelte-fa";

    const contacts = [
        {
            name: "John Doe",
            lastMessage: "Hello world!",
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

<div class="sidemenu-header">
    <h2 class="title">Ferchat</h2>
    <div class="search-bar">
        <div class="search-icon">
            <Fa icon={faSearch} />
        </div>
        <input type="text" />
    </div>
</div>
<div class="contacts-container">
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
    .sidemenu-header {
        position: fixed;
        top: 0;
        left: 4em;
        width: 32em;
        height: 8em;
        border-style: none solid none none;
        border-color: #323333;
        border-width: 1px;
        text-align: left;
    }
    .sidemenu-header h2 {
        padding-left: 0.8em;
    }
    .contacts-container {
        position: absolute;
        top: 8em;
        left: 4em;
        width: 32em;
        height: calc(100vh - 8em);
        border-style: none solid none none;
        border-color: #323333;
        border-width: 1px;
        overflow-y: scroll;
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
