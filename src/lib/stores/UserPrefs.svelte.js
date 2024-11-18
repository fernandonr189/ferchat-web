import { persisted } from "svelte-persisted-store";

export const userPrefs = persisted("user_prefs_pref", {
    isLogedIn: false,
});
