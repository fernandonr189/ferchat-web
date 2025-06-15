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
        width: calc(32em - 1px);
        height: 8em;
        border-right: 1px solid #323333;
        text-align: left;
    }
    .sidemenu-header h2 {
        padding-left: 0.8em;
    }
    .contacts-container {
        position: absolute;
        top: 8em;
        left: 4em;
        width: calc(32em - 1px);
        height: calc(100vh - 8em);
        border-right: 1px solid #323333;
        overflow-y: scroll;
    }
</style>
