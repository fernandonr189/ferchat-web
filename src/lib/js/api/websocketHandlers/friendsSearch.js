import { setFriends } from "../../../state/friends.svelte";

export function handleSearchFriendListResult(friend) {
  setFriends(friend.results);
}
