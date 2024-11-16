<script>
    let {
        value = $bindable(),
        label = "",
        topRight = "",
        bottomLeft = "",
        bottomRight = "",
        hint = "",
        type = "text",
    } = $props();
</script>

<label class="form-control">
    <div class="label">
        <span class="label-text">{label}</span>
        <span class="label-text-alt">{topRight}</span>
    </div>
    <input bind:value {type} placeholder={hint} class="input input-bordered bg-slate-800" />
    <div class="label">
        <span class="label-text-alt">{bottomLeft}</span>
        <span class="label-text-alt">{bottomRight}</span>
    </div>
</label>
