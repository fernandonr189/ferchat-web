export let friendRequestsState = $state({
  friendRequests: [],
  initialized: false,
});

export function setFriendRequests(friendRequests) {
  friendRequestsState.friendRequests = friendRequests;
}

export function addFriendRequest(friendRequest) {
  friendRequestsState.friendRequests.push(friendRequest);
  friendRequestsState.friendRequests = friendRequestsState.friendRequests;
}
