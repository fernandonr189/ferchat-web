<script>
    import OpenChats from "./OpenChats.svelte";
    import ContactsMenu from "./ContactsMenu.svelte";
    import NotificationsMenu from "./NotificationsMenu.svelte";
    import { options } from "../js/sidemenuOptions";

    let { show = false, selectedOption = options.MESSAGES } = $props();
</script>

<dir>
    {#if selectedOption === options.CONTACTS}
        <ContactsMenu {show} />
    {:else if selectedOption === options.MESSAGES}
        <OpenChats {show} />
    {:else if selectedOption === options.NOTIFICATIONS}
        <NotificationsMenu {show} />
    {:else}
        <div>No menu selected</div>
    {/if}
</dir>
