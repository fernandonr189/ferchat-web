<script>
    import ContactOption from "../components/ContactOption.svelte";
    import SideMenu from "../components/SideMenu.svelte";
    import { userData } from "../stores/UserData.svelte";
    import { get } from "svelte/store";

    let user = get(userData).username;

    userData.subscribe((value) => {
        user = value.username;
    });
</script>

<div class="bg-slate-800 h-screen flex flex-row">
    <SideMenu />
    <div class="drawer sm:drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
            <!-- Page content here -->
            <div class="flex flex-col">
                <p>This is the page content</p>
            </div>
        </div>
        <div class="drawer-side">
            <label
                for="my-drawer-2"
                aria-label="close sidebar"
                class="drawer-overlay"></label>
            <ul class="menu bg-slate-900 text-base-content min-h-full w-70 p-4">
                <!-- Sidebar content here -->
                <li><ContactOption /></li>
                <li><ContactOption /></li>
            </ul>
        </div>
    </div>
</div>
