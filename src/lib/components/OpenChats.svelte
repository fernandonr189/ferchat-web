<script>
    import SearchBar from "./SearchBar.svelte";
    import CardContainer from "./CardContainer.svelte";

    const messages = [
        {
            name: "John Doe",
            lastMessage: "hellooo",
        },
        {
            name: "Jane Doe",
            lastMessage: "How are you?",
        },
        {
            name: "Alice Smith",
            lastMessage: "Yes!",
        },
        {
            name: "Bob Johnson",
            lastMessage: "No, i don't think so",
        },
        {
            name: "Charlie Brown",
            lastMessage: "",
        },
        {
            name: "John Doe",
            lastMessage: "hellooo",
        },
        {
            name: "Jane Doe",
            lastMessage: "How are you?",
        },
        {
            name: "Alice Smith",
            lastMessage: "Yes!",
        },
        {
            name: "Bob Johnson",
            lastMessage: "No, i don't think so",
        },
        {
            name: "Charlie Brown",
            lastMessage: "",
        },
        {
            name: "John Doe",
            lastMessage: "hellooo",
        },
        {
            name: "Jane Doe",
            lastMessage: "How are you?",
        },
        {
            name: "Alice Smith",
            lastMessage: "Yes!",
        },
        {
            name: "Bob Johnson",
            lastMessage: "No, i don't think so",
        },
        {
            name: "Charlie Brown",
            lastMessage: "",
        },
    ];
</script>

<div class="contacts-header">
    <h2>Ferchat</h2>
    <div class="search-bar-container">
        <SearchBar />
    </div>
</div>
<div class="scroll-vertical">
    {#each messages as message}
        <CardContainer title={message.name} subtitle={message.lastMessage} />
    {/each}
</div>

<style>
    .contacts-header {
        display: flex;
        flex-direction: column;
        text-align: start;
    }
    .contacts-header h2 {
        margin: 0;
        padding: 0.8em;
    }
    .search-bar-container {
        padding-bottom: 1em;
    }
</style>
