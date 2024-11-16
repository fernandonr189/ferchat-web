<script>
    import { link, Link } from "svelte-routing";
    import Fa from "svelte-fa";
    import {
        faBars,
        faRightToBracket,
    } from "@fortawesome/free-solid-svg-icons";
</script>

<nav>
    <div class="sm:hidden">
        <div class="navbar bg-slate-900">
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
            <div class="flex-none">
                <Link to="/login" class="btn btn-square btn-ghost">
                    <Fa icon={faRightToBracket} />
                </Link>
            </div>
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
                <Link to="/login" class="btn btn-square btn-ghost">
                    <Fa icon={faRightToBracket} />
                </Link>
            </div>
        </div>
    </div>
</nav>
