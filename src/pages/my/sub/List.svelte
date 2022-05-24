<script>
  export let list;

  const onClickRemoveList = (data) => {
    if (list.has(data.drugCodeA)) {
      list.delete(data.drugCodeA);
    }
  }
</script>

<section>
  {#each [... list] as drug}
    <p>{drug}</p>
  {/each}
</section>

<style></style>