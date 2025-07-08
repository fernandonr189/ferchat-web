<script>
    import Sidebar from "./components/Sidebar.svelte";
    import SideMenu from "./components/SideMenu.svelte";
    import Chat from "./components/Chat.svelte";
    import { options } from "./js/sidemenuOptions.js";
    import { getSocket } from "./js/socket";

    let sideMenuOption = $state(options.MESSAGES);
    let sideMenuOpen = $state(false);
    let messages = $state([]);
    let input = $state("");
    let chat_component;
    let ws;

    function connect() {
        ws = getSocket();

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
            chat_component.autoScroll();
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
            let message = {
                type: "SendMessage",
                message: input,
            };
            ws.send(JSON.stringify(message));
            messages = [
                ...messages,
                {
                    text: `🔵 You: ${input}`,
                    sent: true,
                },
            ];
            input = "";
        }
        chat_component.autoScroll();
    }

    connect();
</script>

<div>
    <Sidebar bind:sideMenuOpen bind:selectedOption={sideMenuOption} />
    <SideMenu show={sideMenuOpen} selectedOption={sideMenuOption} />
    <Chat
        {messages}
        sendMessageFunction={sendMessage}
        bind:input
        bind:this={chat_component}
    />
</div>
