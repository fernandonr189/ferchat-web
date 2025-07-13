export let messagesState = $state({
  messages: [],
});

export function addMessage(message) {
  messagesState.messages.push(message);
  messagesState.messages = messagesState.messages;
}
