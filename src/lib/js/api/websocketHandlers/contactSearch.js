import { setContacts } from "../../../state/contactSearchState.svelte";

export function handleContactSearchResult(results) {
  setContacts(results.results);
}
