<script>
    import { faSearch } from "@fortawesome/free-solid-svg-icons";
    import SearchBar from "./SearchBar.svelte";
    import CardContainer from "./CardContainer.svelte";
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
    <SearchBar />
</div>
<div class="contacts-container">
    {#each contacts as contact}
        <CardContainer title={contact.name} subtitle={contact.lastMessage} />
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
</style>
