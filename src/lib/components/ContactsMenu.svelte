<script>
    import SearchBar from "./SearchBar.svelte";
    import CardContainer from "./CardContainer.svelte";

    const contacts = [
        {
            name: "John Doe",
        },
        {
            name: "Jane Doe",
        },
        {
            name: "Alice Smith",
        },
        {
            name: "Bob Johnson",
        },
        {
            name: "Charlie Brown",
        },
        {
            name: "John Doe",
        },
        {
            name: "Jane Doe",
        },
        {
            name: "Alice Smith",
        },
        {
            name: "Bob Johnson",
        },
        {
            name: "Charlie Brown",
        },
        {
            name: "John Doe",
        },
        {
            name: "Jane Doe",
        },
        {
            name: "Alice Smith",
        },
        {
            name: "Bob Johnson",
        },
        {
            name: "Charlie Brown",
        },
        {
            name: "John Doe",
        },
        {
            name: "Jane Doe",
        },
        {
            name: "Alice Smith",
        },
        {
            name: "Bob Johnson",
        },
        {
            name: "Charlie Brown",
        },
        {
            name: "John Doe",
        },
        {
            name: "Jane Doe",
        },
        {
            name: "Alice Smith",
        },
        {
            name: "Bob Johnson",
        },
        {
            name: "Charlie Brown",
        },
        {
            name: "John Doe",
        },
        {
            name: "Jane Doe",
        },
        {
            name: "Alice Smith",
        },
        {
            name: "Bob Johnson",
        },
        {
            name: "Charlie Brown",
        },
        {
            name: "John Doe",
        },
        {
            name: "Jane Doe",
        },
        {
            name: "Alice Smith",
        },
        {
            name: "Bob Johnson",
        },
        {
            name: "Charlie Brown",
        },
    ];
</script>

<div class="contacts-header">
    <h2>Contactos</h2>
    <div class="search-bar-container">
        <SearchBar />
    </div>
</div>
<div class="scroll-vertical">
    {#each contacts as contact}
        <CardContainer title={contact.name} />
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
