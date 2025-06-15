<script>
    import Sidebar from "./lib/components/Sidebar.svelte";
    import SideMenu from "./lib/components/SideMenu.svelte";
    import Chat from "./lib/components/Chat.svelte";
    import { options } from "./lib/js/sidemenuOptions.js";
    let sideMenuOption = $state(options.MESSAGES);
    let sideMenuOpen = $state(false);
</script>

<main>
    <Sidebar bind:sideMenuOpen bind:selectedOption={sideMenuOption} />
    <SideMenu show={sideMenuOpen} selectedOption={sideMenuOption} />
    <Chat />
</main>
