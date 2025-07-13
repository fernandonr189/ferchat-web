import { addMessage } from "../../../state/messagesState.svelte";

export function handleNewMessage(message) {
  addMessage({
    text: message.message,
    sent: false,
  });
}
