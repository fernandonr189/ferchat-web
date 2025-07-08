<script>
    let { message = $bindable(""), onSubmit } = $props();

    function submit(event) {
        if (event.key === "Enter") {
            onSubmit();
            message = "";
        }
    }
</script>

<div class="chat-input">
    <input type="text" bind:value={message} onkeydown={submit} />
</div>

<style>
    .chat-input {
        display: flex;
        margin: 0 0.8em;
        border-radius: 0.8em;
        height: 2.5em;
        border: none;
        background-color: #323333;
        align-content: center;
        justify-content: center;
    }
    .chat-input input {
        border: none;
        outline: none;
        border-radius: 0.8em;
        width: calc(100% - 2em);
        background-color: #323333;
        color: #fff;
        font-size: 1em;
    }
</style>
