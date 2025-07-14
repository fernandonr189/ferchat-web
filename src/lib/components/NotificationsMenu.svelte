<script>
    import SearchBar from "./SearchBar.svelte";
    import CardContainer from "./CardContainer.svelte";
    import { sendData } from "../js/api/websocket";
    import { friendRequestsState } from "../state/friendRequests.svelte";
    import { onMount } from "svelte";

    const onSearch = (input) => {
        console.log(input);
        sendData({
            type: "GetFriendRequests",
        });
    };

    function acceptFriendRequest(id) {
        sendData({
            type: "HandleFriendRequest",
            target_profile: id,
            accepted: true,
        });
        onSearch("");
    }
    function denyFriendRequest(id) {
        sendData({
            type: "HandleFriendRequest",
            target_profile: id,
            accepted: false,
        });
        onSearch("");
    }
</script>

<div class="contacts-header">
    <h2>Notificaciones</h2>
    <div class="search-bar-container">
        <SearchBar {onSearch} />
    </div>
</div>
<div class="scroll-vertical">
    {#each friendRequestsState.friendRequests as friendRequest}
        <CardContainer
            id={friendRequest.sender_id}
            title={friendRequest.username}
            topButton={{
                label: "Aceptar",
                action: acceptFriendRequest,
            }}
            bottomButton={{
                label: "Denegar",
                action: denyFriendRequest,
            }}
        />
    {/each}
</div>

<style>
    .contacts-header {
        display: flex;
        flex-direction: column;
        text-align: start;
    }
    .contacts-header h2 {
        margin: 0;
        padding: 0.8em;
    }
    .search-bar-container {
        padding-bottom: 1em;
    }
</style>
