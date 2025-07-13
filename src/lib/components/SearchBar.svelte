<script>
    import Fa from "svelte-fa";
    import { faSearch } from "@fortawesome/free-solid-svg-icons";

    let { onSearch } = $props();

    let input = $state("");

    function onSubmit() {
        onSearch(input);
    }

    function onKeyDown(event) {
        if (event.key === "Enter") {
            onSearch(input);
        }
    }
</script>

<div class="search-bar">
    <button class="search-icon" onclick={onSubmit}>
        <Fa icon={faSearch} />
    </button>
    <input bind:value={input} type="text" onkeydown={onKeyDown} />
</div>

<style>
    .search-bar {
        display: flex;
        margin: 0 0.8em;
        border-radius: 0.8em;
        height: 2.5em;
        border: none;
        background-color: #323333;
        align-content: center;
        justify-content: start;
    }
    .search-icon:hover {
        border: none;
    }
    .search-icon {
        background-color: #323333;
        border-radius: 0.8em;
        width: 2.5em;
        height: 2.5em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .search-bar input {
        border: none;
        outline: none;
        border-radius: 0.8em;
        width: calc(100% - 3em);
        background-color: #323333;
        color: #fff;
        font-size: 1em;
    }
</style>
