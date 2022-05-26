<script>
  import SearchBar from './sub/SeachBar.svelte'
  import List from './sub/List.svelte'
  import Button from './sub/Button.svelte';
</script>

<article>
  <SearchBar />
  <List />
  <Button />
</article>

<style lang='scss'>
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 90%;
    height: calc(100vh - 32px);
  }
</style>