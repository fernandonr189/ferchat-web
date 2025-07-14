<script>
    import SearchBar from "./SearchBar.svelte";
    import CardContainer from "./CardContainer.svelte";
    import { sendData } from "../js/api/websocket";
    import { onMount } from "svelte";
    import { friendsState } from "../state/friends.svelte";

    const onSearch = (input) => {
        const query = input.toLowerCase();
        sendData({
            type: "SearchFriendList",
            query: query,
        });
    };
</script>

<div class="contacts-header">
    <h2>Ferchat</h2>
    <div class="search-bar-container">
        <SearchBar {onSearch} />
    </div>
</div>
<div class="scroll-vertical">
    {#each friendsState.friends as friend}
        <CardContainer title={friend.username} id={friend.id} />
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
