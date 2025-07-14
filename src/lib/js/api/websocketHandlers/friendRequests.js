import {
  addFriendRequest,
  setFriendRequests,
} from "../../../state/friendRequests.svelte";

export function handleFriendRequestResult(results) {
  setFriendRequests(results.results);
}

export function handleFriendRequestReceived(eventJson) {
  addFriendRequest({
    id: eventJson.sender_id,
    username: eventJson.sender_name,
  });
}
