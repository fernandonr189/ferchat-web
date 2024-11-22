<script>
    import { userPrefs } from "../stores/UserPrefs.svelte";
    import { userData } from "../stores/UserData.svelte";
    import { Link } from "svelte-routing";
    import Fa from "svelte-fa";
    import {
        faBars,
        faRightFromBracket,
    } from "@fortawesome/free-solid-svg-icons";

    let showLogoutButton;

    userPrefs.subscribe((value) => {
        showLogoutButton = value.isLogedIn;
    });

    function handleLogout() {
        userData.reset();
        userPrefs.reset();
    }
</script>

<nav class="sm:nav bg-slate-900">
    <div class="sm:hidden">
        <div class="navbar">
            <div class="flex-none">
                <div class="dropdown dropdown-bottom">
                    <div
                        tabindex="0"
                        role="button"
                        class="btn btn-ghost rounded-btn">
                        <Fa icon={faBars} />
                    </div>
                    <ul
                        class="dropdown-content menu bg-slate-900 rounded-box z-[1] w-52 p-2 shadow">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex-1">
                <p class="btn btn-ghost text-xl">Ferchat</p>
            </div>
            {#if showLogoutButton}
                <button
                    onclick={handleLogout}
                    class="btn btn-square btn-ghost px-8">
                    <Fa icon={faRightFromBracket} />
                </button>
            {:else}
                <Link to="/login" class="btn btn-square btn-ghost px-8">
                    Login!
                </Link>
            {/if}
        </div>
    </div>

    <div class="hidden sm:flex">
        <div class="navbar bg-slate-900">
            <div class="flex-1">
                <Link to="/" class="btn btn-ghost text-xl">Ferchat</Link>
            </div>
            <div class="flex-none">
                <Link to="/" class="btn btn-square btn-ghost px-8">Home</Link>
                <Link to="/about" class="btn btn-square btn-ghost px-8"
                    >About</Link>

                {#if showLogoutButton}
                    <button
                        onclick={handleLogout}
                        class="btn btn-square btn-ghost px-8">
                        <Fa icon={faRightFromBracket} />
                    </button>
                {:else}
                    <Link to="/login" class="btn btn-square btn-ghost px-8">
                        Login!
                    </Link>
                {/if}
            </div>
        </div>
    </div>
</nav>
