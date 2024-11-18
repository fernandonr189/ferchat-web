<script>
    import ContactOption from "../components/ContactOption.svelte";
    import SideMenu from "../components/SideMenu.svelte";
    import { userData } from "../stores/UserData.svelte";
    import { get } from "svelte/store";

    let user = get(userData).username;
    let inputValue = $state("");

    userData.subscribe((value) => {
        user = value.username;
    });

    let users = $state([]);

    async function handleFindUsers() {
        let data = await fetch(
            "".concat("http://localhost:8000/friends/find/", inputValue),
            {
                method: "GET",
            },
        );
        if (data.status === 200) {
            let jsonData = await data.json();
            users = jsonData.data.Model.map((item) => item);
            console.log(users);
        }
    }
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
                <div class="flex sm:hidden justify-center">
                    <p class="btn btn-ghost text-xl my-1">Ferchat</p>
                </div>
                <div class="p-2">
                    <label
                        class="input input-bordered flex items-center gap-2 bg-slate-800">
                        <input
                            bind:value={inputValue}
                            type="text"
                            class="grow"
                            placeholder="Search"
                            onkeydown={(event) => {
                                console.log(inputValue);
                                if (event.key === "Enter") {
                                    handleFindUsers();
                                }
                            }} />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            class="h-4 w-4 opacity-70">
                            <path
                                fill-rule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clip-rule="evenodd" />
                        </svg>
                    </label>
                </div>
                {#each users as user}
                    <li>
                        <ContactOption
                            username={user.username}
                            msg={user.email} />
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>
