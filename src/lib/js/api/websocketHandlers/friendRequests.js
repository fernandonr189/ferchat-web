import { setFriendRequests } from "../../../state/friendRequests.svelte";

export function handleFriendRequestResult(results) {
  setFriendRequests(results.results);
}
