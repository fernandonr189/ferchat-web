<script>
    import Sidebar from "./components/Sidebar.svelte";
    import SideMenu from "./components/SideMenu.svelte";
    import Chat from "./components/Chat.svelte";
    import { options } from "./js/sidemenuOptions.js";
    import { configureSocket, getSocket, sendData } from "./js/api/websocket";

    let sideMenuOption = $state(options.MESSAGES);
    let sideMenuOpen = $state(false);

    let ws = getSocket();
    configureSocket(ws);
</script>

<div>
    <Sidebar bind:sideMenuOpen bind:selectedOption={sideMenuOption} />
    <SideMenu show={sideMenuOpen} selectedOption={sideMenuOption} />
    <Chat />
</div>
