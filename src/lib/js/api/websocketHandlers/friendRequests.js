import { setFriendRequests } from "../../../state/friendRequests.svelte";

export function handleFriendRequestResult(results) {
  console.log(results.results);
  setFriendRequests(results.results);
}
