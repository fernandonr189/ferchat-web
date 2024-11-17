import { persisted } from "svelte-persisted-store";

export const userData = persisted('user_data_pref', {
    username: "",
    email: "",
    jwt_tk: ""
});