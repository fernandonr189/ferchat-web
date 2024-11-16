<script>
  let count = $state(0)
  const increment = () => {
    count += 1
  }
</script>

<button onclick={increment} class="bg-slate-900">
  count is {count}
</button>
