<script>
  import Fa from "svelte-fa";
  import { faCheck } from "@fortawesome/free-solid-svg-icons";

</script>

<div class="py-4 text-base flex flex-row">
    <div class="avatar">
        <div class="mask mask-squircle h-12 w-12">
            <img
                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                alt="Avatar Tailwind CSS Component" />
        </div>
    </div>
    <div class="flex flex-col">
      <p class="text-lg">Fernando Ismael Navarrete Ruiz</p>
      <div class="flex flex-row">
        <p class="text-sm">This is the last message received</p>
        <Fa class="px-3" icon={faCheck}/>
      </div>
    </div>
</div>
