<script>
    import OpenChats from "./OpenChats.svelte";
    import ContactsMenu from "./ContactsMenu.svelte";
    import NotificationsMenu from "./NotificationsMenu.svelte";
    import { options } from "../js/sidemenuOptions";

    let { show = false, selectedOption = options.MESSAGES } = $props();
</script>

<dir class="sidemenu" class:open={show}>
    {#if selectedOption === options.CONTACTS}
        <ContactsMenu />
    {:else if selectedOption === options.MESSAGES}
        <OpenChats />
    {:else if selectedOption === options.NOTIFICATIONS}
        <NotificationsMenu />
    {:else}
        <div>No menu selected</div>
    {/if}
</dir>

<style>
    @media only screen and (max-width: 1200px) {
        .sidemenu {
            transform: translateX(-100%);
            opacity: 0;
            z-index: -1;
        }
    }
    .open {
        transform: translateX(0);
        opacity: 1;
        z-index: 1;
    }
    .sidemenu {
        padding: 0;
        margin: 0;
        position: absolute;
        top: 0;
        left: 4em;
        height: 100%;
        width: 32em;
        box-sizing: border-box;
        border-right: 1px solid #323333;
        display: flex;
        flex-direction: column;
        background-color: #161717;
        transition:
            transform 0.3s ease-in-out,
            opacity 0.3s ease-in-out;
    }
</style>
