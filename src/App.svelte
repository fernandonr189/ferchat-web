<script>
    import Sidebar from "./lib/components/Sidebar.svelte";
    import Sidemenu from "./lib/components/Sidemenu.svelte";
    import Chat from "./lib/components/Chat.svelte";
</script>

<main>
    <Sidebar />
    <div class="sidemenu"><Sidemenu /></div>
    <div class="main-content"><Chat /></div>
</main>

<style>
    .sidemenu {
        position: absolute;
        top: 0;
        left: 4em;
        height: 100%;
        width: 32em;
        border-style: none solid none none;
        border-width: 1px;
        border-color: #323333;
    }
    .main-content {
        position: absolute;
        top: 0;
        left: 36em;
        width: calc(100% - 36em);
        height: 100%;
    }
</style>
