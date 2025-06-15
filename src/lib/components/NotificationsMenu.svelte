<script>
    import SearchBar from "./SearchBar.svelte";
    import CardContainer from "./CardContainer.svelte";

    const contacts = [
        {
            name: "John Doe",
            content: "Reaccionó a tu mensaje",
        },
        {
            name: "Jane Doe",
            content: "Reaccionó a tu mensaje",
        },
        {
            name: "Alice Smith",
            content: "Compartió una encuesta",
        },
        {
            name: "Bob Johnson",
            content: "Reaccionó a tu mensaje",
        },
        {
            name: "Charlie Brown",
            content: "Reaccionó a tu mensaje",
        },
        {
            name: "John Doe",
            content: "Reaccionó a tu mensaje",
        },
        {
            name: "Jane Doe",
            content: "Has sido agregado al grupo",
        },
        {
            name: "Alice Smith",
            content: "Has sido agregado al grupo",
        },
        {
            name: "Bob Johnson",
            content: "Has sido agregado al grupo",
        },
        {
            name: "Charlie Brown",
            content: "Has sido agregado al grupo",
        },
        {
            name: "John Doe",
            content: "Has sido agregado al grupo",
        },
        {
            name: "Jane Doe",
            content: "Has sido agregado al grupo",
        },
    ];

    let { show = false } = $props();
</script>

<div class="sidemenu-header" class:open={show}>
    <h2 class="title">Notificaciones</h2>
    <SearchBar />
</div>
<div class="contacts-container" class:open={show}>
    {#each contacts as contact}
        <CardContainer title={contact.name} subtitle={contact.content} />
    {/each}
</div>

<style>
    .open {
        opacity: 1 !important;
        transform: translateX(0%) !important;
        z-index: 1 !important;
        background-color: #161717;
    }
    @media only screen and (max-width: 1200px) {
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
