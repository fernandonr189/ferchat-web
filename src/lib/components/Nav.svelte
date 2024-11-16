<script>
    import { Link } from "svelte-routing";
    import Fa from "svelte-fa";
    import { faBars, faEllipsis } from "@fortawesome/free-solid-svg-icons";
</script>

<div>
    <div class="sm:hidden">
        <div class="navbar bg-base-100">
            <div class="flex-none">
                <div class="dropdown dropdown-bottom">
                    <div
                        tabindex="0"
                        role="button"
                        class="btn btn-ghost rounded-btn">
                        <Fa icon={faBars} />
                    </div>
                    <ul
                        class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
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
                <button class="btn btn-square btn-ghost">
                    <Fa icon={faEllipsis} />
                </button>
            </div>
        </div>
    </div>

    <div class="hidden sm:flex">
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <p class="btn btn-ghost text-xl">Ferchat</p>
            </div>
            <div class="flex-none">
                <li><a>Hello world</a></li>
                <button class="btn btn-square btn-ghost">
                    <Fa icon={faEllipsis} />
                </button>
            </div>
        </div>
    </div>
</div>
