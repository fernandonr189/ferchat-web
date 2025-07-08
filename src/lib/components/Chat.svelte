<script>
    import profilePic from "../../assets/profile_pic.jpg";
    import background from "../../assets/chat_background.jpg";
    import ChatInput from "./ChatInput.svelte";
    import Fa from "svelte-fa";
    import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

    let ws;
    let input = $state("");
    let messages = $state([]);

    function connect() {
        ws = new WebSocket("ws://localhost:8080/api/socket");

        ws.onopen = () => {
            console.log("Connected!");
            messages.push({
                text: "✅ Connected to server",
                sent: true,
            });
        };

        ws.onmessage = (event) => {
            console.log("Server says:", event.data);
            messages.push({
                text: `🟢 ${event.data}`,
                sent: false,
            });
        };

        ws.onclose = () => {
            messages.push({
                text: "❌ Disconnected from server",
                sent: true,
            });
        };

        ws.onerror = (err) => {
            console.error("WebSocket error:", err);
        };
    }

    function sendMessage() {
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(input);
            messages = [
                ...messages,
                {
                    text: `🔵 You: ${input}`,
                    sent: true,
                },
            ];
            input = "";
        }
    }

    connect();
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
    <ChatInput bind:message={input} />
</div>
<button class="send-button">
    <Fa icon={faPaperPlane} />
</button>

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
            width: calc(100% - 8em) !important;
        }
        .chat-messages {
            left: 4em !important;
            width: calc(100% - 4em) !important;
        }
    }
    .send-button {
        background-color: #1d1f1f;
        position: absolute;
        right: 0;
        bottom: 1.5em;
        width: 3.2em;
        padding: 0 0.1em 0 0;
        height: 2.5em;
        margin: 0 1.6em 0 0.8em;
        box-sizing: border-box;
    }
    .message-input {
        transition:
            left 0.3s ease-in-out,
            width 0.3s ease-in-out;
        position: absolute;
        bottom: 1.5em;
        left: 36em;
        right: 4em;
        width: calc(100% - 40em);
        height: 2.5em;
        padding: 0 0.8em;
        box-sizing: border-box;
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
        transition:
            left 0.3s ease-in-out,
            width 0.3s ease-in-out;
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
    .chat-header {
        transition:
            left 0.3s ease-in-out,
            width 0.3s ease-in-out;
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
        transition:
            left 0.3s ease-in-out,
            width 0.3s ease-in-out;
        position: absolute;
        top: 4em;
        left: 36em;
        width: calc(100% - 36em);
        height: calc(100% - 4em);
        filter: brightness(0.5);
        object-fit: cover;
    }
</style>
