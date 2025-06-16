<script>
    import Sidebar from "./components/Sidebar.svelte";
    import SideMenu from "./components/SideMenu.svelte";
    import Chat from "./components/Chat.svelte";
    import { options } from "./js/sidemenuOptions.js";
    let sideMenuOption = $state(options.MESSAGES);
    let sideMenuOpen = $state(false);
</script>

<div>
    <Sidebar bind:sideMenuOpen bind:selectedOption={sideMenuOption} />
    <SideMenu show={sideMenuOpen} selectedOption={sideMenuOption} />
    <Chat />
</div>
