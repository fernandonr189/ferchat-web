<script>
    import Nav from "../components/Nav.svelte";
    import { userData } from "../stores/UserData.svelte";
    import { get } from "svelte/store";

    let user = get(userData)
</script>


<div>
    <Nav />
    <div class="bg-slate-800 h-screen">
        <p>This is the Home page {user.username}</p>
    </div>
</div>
