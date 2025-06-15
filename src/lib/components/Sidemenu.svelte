<script>
    import { faSearch } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
</script>

<div class="sidemenu">
    <h2 class="title">Ferchat</h2>
    <div class="search-bar">
        <div class="search-icon">
            <Fa icon={faSearch} />
        </div>
        <input type="text" />
    </div>
</div>

<style>
    .sidemenu {
        display: flex;
        flex-direction: column;
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 4em;
        height: 100%;
        width: 32em;
        border-style: none solid none none;
        border-color: #323333;
        border-width: 1px;
    }
    .title {
        align-self: self-start;
        padding: 0 0.8em;
    }
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
    .search-icon {
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
