<script>
    import profilePic from "../../assets/profile_pic.jpg";
    import background from "../../assets/chat_background.jpg";
    import ChatInput from "./ChatInput.svelte";
</script>

<div class="chat-header">
    <img class="profile-pic" src={profilePic} alt="profile_picture" />
    <h3>John Doe</h3>
</div>
<img class="chat-background" src={background} alt="" />
<div class="message-input">
    <ChatInput />
</div>

<style>
    @media only screen and (max-width: 1000px) {
        .chat-header {
            left: 4em !important;
            width: calc(100% - 4em) !important;
        }
        .chat-background {
            left: 4em !important;
            width: calc(100% - 4em) !important;
        }
        .message-input {
            left: 4em !important;
            width: calc(100% - 4em) !important;
        }
    }
    .message-input {
        position: absolute;
        bottom: 0;
        left: 36em;
        width: calc(100% - 36em);
        height: 4em;
        padding: 0 0.8em;
        box-sizing: border-box;
    }
    .chat-header {
        display: flex;
        position: absolute;
        top: 0;
        left: 36em;
        width: calc(100% - 36em);
        height: calc(4em - 1px);
        border-bottom: 1px solid #323333;
        align-items: center;
        padding: 0 0.8em;
        box-sizing: border-box;
    }
    .chat-header h3 {
        margin-left: 1em;
        font-size: 1.2em;
        font-weight: 500;
    }
    .profile-pic {
        width: 3em;
        height: 3em;
        border-radius: 50%;
        object-fit: cover;
    }
    .chat-background {
        position: absolute;
        top: 4em;
        left: 36em;
        width: calc(100% - 36em);
        height: calc(100% - 4em);
        filter: brightness(0.5);
        object-fit: cover;
    }
</style>
