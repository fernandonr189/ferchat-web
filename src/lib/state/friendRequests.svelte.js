export let friendRequestsState = $state({
  friendRequests: [],
  initialized: false,
});

export function setFriendRequests(friendRequests) {
  friendRequestsState.friendRequests = friendRequests;
}
