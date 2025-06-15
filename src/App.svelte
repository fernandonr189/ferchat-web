<script>
    import Sidebar from "./lib/components/Sidebar.svelte";
    import Sidemenu from "./lib/components/Sidemenu.svelte";
    import Chat from "./lib/components/Chat.svelte";
    let sideMenuOpen = $state(false);
</script>

<main>
    <Sidebar bind:sideMenuOpen />
    <Sidemenu show={sideMenuOpen} />
    <Chat />
</main>

<style>
</style>
