<script>
    import Sidebar from "./lib/components/Sidebar.svelte";
    import Sidemenu from "./lib/components/Sidemenu.svelte";
    import Chat from "./lib/components/Chat.svelte";
</script>

<main>
    <Sidebar />
    <Sidemenu />
    <div class="main-content"><Chat /></div>
</main>

<style>
    .main-content {
        position: absolute;
        top: 0;
        left: 36em;
        width: calc(100% - 36em);
        height: 100%;
    }
</style>
