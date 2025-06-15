<script>
    import SearchBar from "./SearchBar.svelte";
    import CardContainer from "./CardContainer.svelte";

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

    let { show = false } = $props();
</script>

<div class="sidemenu-header" class:open={show}>
    <h2 class="title">Ferchat</h2>
    <SearchBar />
</div>
<div class="contacts-container" class:open={show}>
    {#each contacts as contact}
        <CardContainer title={contact.name} subtitle={contact.lastMessage} />
    {/each}
</div>

<style>
    .open {
        opacity: 1 !important;
        transform: translateX(0%) !important;
        z-index: 1 !important;
        background-color: #161717;
    }
    @media only screen and (max-width: 1000px) {
        .sidemenu-header {
            opacity: 0;
            transform: translateX(-100%);
            z-index: 0;
        }
        .contacts-container {
            opacity: 0;
            transform: translateX(-100%);
            z-index: 0;
        }
    }
    .sidemenu-header {
        transition:
            opacity 0.3s,
            transform 0.3s;
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
        transition:
            opacity 0.3s,
            transform 0.3s;
        position: absolute;
        top: 8em;
        left: 4em;
        width: calc(32em - 1px);
        height: calc(100vh - 8em);
        border-right: 1px solid #323333;
        overflow-y: scroll;
    }
</style>
