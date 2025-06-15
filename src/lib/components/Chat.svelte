<script>
    import profilePic from "../../assets/profile_pic.jpg";
    import background from "../../assets/chat_background.jpg";
    import ChatInput from "./ChatInput.svelte";

    const messages = [
        {
            text: "Hello, how are you?",
            sent: false,
        },
        {
            text: "Fine, and you?",
            sent: true,
        },
        {
            text: "Great!",
            sent: false,
        },
        {
            text: "I'm doing well, thanks!",
            sent: false,
        },
        {
            text: "Amazing!",
            sent: true,
        },
        {
            text: "Hello, how are you?",
            sent: false,
        },
        {
            text: "Fine, and you?",
            sent: true,
        },
        {
            text: "Great!",
            sent: false,
        },
        {
            text: "I'm doing well, thanks!",
            sent: false,
        },
        {
            text: "Amazing!",
            sent: true,
        },
        {
            text: "Hello, how are you?",
            sent: false,
        },
        {
            text: "Fine, and you?",
            sent: true,
        },
        {
            text: "Great!",
            sent: false,
        },
        {
            text: "I'm doing well, thanks!",
            sent: false,
        },
        {
            text: "Amazing!",
            sent: true,
        },
        {
            text: "Hello, how are you?",
            sent: false,
        },
        {
            text: "Fine, and you?",
            sent: true,
        },
        {
            text: "Great!",
            sent: false,
        },
        {
            text: "I'm doing well, thanks!",
            sent: false,
        },
        {
            text: "Amazing!",
            sent: true,
        },
        {
            text: "Hello, how are you?",
            sent: false,
        },
        {
            text: "Fine, and you?",
            sent: true,
        },
        {
            text: "Great!",
            sent: false,
        },
        {
            text: "I'm doing well, thanks!",
            sent: false,
        },
        {
            text: "Amazing!",
            sent: true,
        },
        {
            text: "Hello, how are you?",
            sent: false,
        },
        {
            text: "Fine, and you?",
            sent: true,
        },
        {
            text: "Great!",
            sent: false,
        },
        {
            text: "I'm doing well, thanks!",
            sent: false,
        },
        {
            text: "Amazing!",
            sent: true,
        },
        {
            text: "Hello, how are you?",
            sent: false,
        },
        {
            text: "Fine, and you?",
            sent: true,
        },
        {
            text: "Great!",
            sent: false,
        },
        {
            text: "I'm doing well, thanks!",
            sent: false,
        },
        {
            text: "Amazing!",
            sent: true,
        },
    ];
</script>

<div class="chat-header">
    <img class="profile-pic" src={profilePic} alt="profile_picture" />
    <h3>John Doe</h3>
</div>
<img class="chat-background" src={background} alt="" />
<div class="chat-messages">
    {#each messages as message}
        <div class="message" class:mine={message.sent}>
            <p>{message.text}</p>
        </div>
    {/each}
</div>
<div class="message-input">
    <ChatInput />
</div>

<style>
    @media only screen and (max-width: 1200px) {
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
        .chat-messages {
            left: 4em !important;
            width: calc(100% - 4em) !important;
        }
    }
    .mine {
        margin-left: auto !important;
        margin-right: 0 !important;
    }
    .message {
        border-radius: 0.5em;
        background-color: #1d1f1f;
        padding: 0.8em;
        margin: 0.2em;
        margin-right: auto;
        margin-left: 0;
    }
    .message p {
        padding: 0;
        margin: 0;
    }
    .chat-messages {
        position: absolute;
        top: 4em;
        left: 36em;
        width: calc(100% - 36em);
        height: calc(100% - 8.5em);
        overflow-y: scroll;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex: 0 0 auto;
        padding: 0.8em 5em;
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
