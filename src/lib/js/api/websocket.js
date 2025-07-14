import { handleContactSearchResult } from "./websocketHandlers/contactSearch";
import { handleFriendRequestResult } from "./websocketHandlers/friendRequests";
import { handleSearchFriendListResult } from "./websocketHandlers/friendsSearch";
import { handleNewMessage } from "./websocketHandlers/newMessage";

let socket;

export function getSocket() {
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    socket = new WebSocket("ws://localhost:8080/ws/socket");
  }
  return socket;
}

export function sendData(data) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(data));
  }
}

export function configureSocket(ws) {
  ws.onopen = () => {};

  ws.onmessage = (event) => {
    let eventJson = JSON.parse(event.data);
    switch (eventJson.type) {
      case "Text":
        handleNewMessage(eventJson);
        break;
      case "ContactSearchResult":
        handleContactSearchResult(eventJson);
        break;
      case "FriendRequestResult":
        handleFriendRequestResult(eventJson);
        break;
      case "SearchFriendListResult":
        handleSearchFriendListResult(eventJson);
        break;
      default:
    }
  };

  ws.onclose = () => {};

  ws.onerror = (err) => {
    console.error("WebSocket error:", err);
  };
}
