<script>
    import Fa from "svelte-fa";
    import {
        faMessage as faMessageSolid,
        faBell as faBellSolid,
        faAddressBook as faPeopleGroupSolid,
        faUser as faUserSolid,
        faGear as faGearSolid,
    } from "@fortawesome/free-solid-svg-icons";
    import {
        faMessage as faMessageRegular,
        faBell as faBellRegular,
        faAddressBook as faPeopleGroupRegular,
        faUser as faUserRegular,
    } from "@fortawesome/free-regular-svg-icons";

    const options = {
        MESSAGES: "MESSAGES",
        NOTIFICATIONS: "NOTIFICATIONS",
        CONTACTS: "CONTACTS",
        PROFILE: "PROFILE",
        SETTINGS: "SETTINGS",
    };
    let selectedOption = $state(options.MESSAGES);
</script>

<div class="sidebar">
    <div class="top-sidebar-icons">
        <button
            class="sidebar-icon"
            onclick={() => {
                selectedOption = options.MESSAGES;
            }}
        >
            <Fa
                icon={selectedOption === options.MESSAGES
                    ? faMessageSolid
                    : faMessageRegular}
            />
        </button>
        <button
            class="sidebar-icon"
            onclick={() => {
                selectedOption = options.NOTIFICATIONS;
            }}
        >
            <Fa
                icon={selectedOption === options.NOTIFICATIONS
                    ? faBellSolid
                    : faBellRegular}
            />
        </button>
        <button
            class="sidebar-icon"
            onclick={() => {
                selectedOption = options.CONTACTS;
            }}
        >
            <Fa
                icon={selectedOption === options.CONTACTS
                    ? faPeopleGroupSolid
                    : faPeopleGroupRegular}
            />
        </button>
    </div>
    <div class="bottom-sidebar-icons">
        <button
            class="sidebar-icon"
            onclick={() => {
                selectedOption = options.PROFILE;
            }}
        >
            <Fa
                icon={selectedOption === options.PROFILE
                    ? faUserSolid
                    : faUserRegular}
            />
        </button>
        <button
            class="sidebar-icon"
            onclick={() => {
                selectedOption = options.SETTINGS;
            }}
        >
            <Fa icon={faGearSolid} />
        </button>
    </div>
</div>

<style>
    .sidebar {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 0;
        left: 0;
        width: 4em;
        height: 100%;
        box-sizing: border-box;
        border-right: 1px solid #323333;
        background-color: #1d1f1f;
    }
    .sidebar-icon {
        background-color: transparent;
        padding: 0;
        border: none;
        height: 2.25em;
        width: 2.25em;
        margin: 0.4em 0 0.4em 0;
        border-radius: 50%;
        transition: background-color 0.3s;
        align-content: center;
    }
    .bottom-sidebar-icons {
        margin-top: auto;
    }
    .sidebar-icon:hover {
        background-color: #323333;
    }
</style>
