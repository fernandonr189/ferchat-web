let socket;

export function getSocket() {
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    socket = new WebSocket("ws://localhost:8080/api/socket");
  }
  return socket;
}
