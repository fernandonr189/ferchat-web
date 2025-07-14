export let friendsState = $state({
  friends: [],
  initialized: false,
});

export function setFriends(friends) {
  friendsState.friends = friends;
}
