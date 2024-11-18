<script>
    import Fa from "svelte-fa";
    import { faMessage, faAddressBook, faUserGroup } from "@fortawesome/free-solid-svg-icons";
</script>




<ul class="menu bg-slate-900 text-lg">
    <li>
        <label for="my-drawer-2" class="justify-center my-2">
            <Fa icon={faMessage}/>
        </label>
    </li>
    <li>
        <div class="justify-center my-2">
            <Fa icon={faAddressBook}/>
        </div>
    </li>
    <li>
        <div class="justify-center my-2">
            <Fa icon={faUserGroup}/>
        </div>
    </li>
</ul>
