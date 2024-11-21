<script>
    let { start, message } = $props();
</script>

<div>
    {#if start}
        <div class="chat chat-start">
            <div class="chat-bubble">
                {message}
            </div>
        </div>
    {:else}
        <div class="chat chat-end">
            <div class="chat-bubble">{message}</div>
        </div>
    {/if}
</div>
