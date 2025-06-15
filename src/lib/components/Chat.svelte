<script>
    import background from "../../assets/chat_background.jpg";
</script>

<div class="chat-header"></div>
<img class="chat-background" src={background} alt="" />

<style>
    .chat-background {
        position: absolute;
        top: 4em;
        left: calc(36em);
        width: calc(100% - 36em);
        height: calc(100% - 4em);
        filter: brightness(0.5);
        object-fit: cover;
    }
    .chat-header {
        display: flex;
        position: absolute;
        top: 0;
        left: 36em;
        width: calc(100% - 36em);
        height: calc(4em - 1px);
        border-bottom: 1px solid #323333;
    }
</style>
