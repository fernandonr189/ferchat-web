<script>
    import SearchBar from "./SearchBar.svelte";
    import CardContainer from "./CardContainer.svelte";

    const notifications = [
        {
            name: "John Doe",
            content: "Has reacted to your message",
        },
        {
            name: "Jane Doe",
            content: "Added you to a group",
        },
        {
            name: "Alice Smith",
            content: "Added you to a group",
        },
        {
            name: "Bob Johnson",
            content: "Invited you to a comunity",
        },
        {
            name: "John Doe",
            content: "Has reacted to your message",
        },
        {
            name: "Jane Doe",
            content: "Added you to a group",
        },
        {
            name: "Alice Smith",
            content: "Added you to a group",
        },
        {
            name: "Bob Johnson",
            content: "Invited you to a comunity",
        },
        {
            name: "John Doe",
            content: "Has reacted to your message",
        },
        {
            name: "Jane Doe",
            content: "Added you to a group",
        },
        {
            name: "Alice Smith",
            content: "Added you to a group",
        },
        {
            name: "Bob Johnson",
            content: "Invited you to a comunity",
        },
        {
            name: "John Doe",
            content: "Has reacted to your message",
        },
        {
            name: "Jane Doe",
            content: "Added you to a group",
        },
        {
            name: "Alice Smith",
            content: "Added you to a group",
        },
        {
            name: "Bob Johnson",
            content: "Invited you to a comunity",
        },
    ];
</script>

<div class="contacts-header">
    <h2>Notificaciones</h2>
    <div class="search-bar-container">
        <SearchBar />
    </div>
</div>
<div class="scroll-vertical">
    {#each notifications as notification}
        <CardContainer
            title={notification.name}
            subtitle={notification.content}
        />
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
