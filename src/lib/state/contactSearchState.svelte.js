export let contactsSearchState = $state({
  contacts: [],
});

export function setContacts(contacts) {
  contactsSearchState.contacts = contacts;
}
