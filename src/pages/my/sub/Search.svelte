<script>
  import SearchBar from './SeachBar.svelte';

  export let onClickCloseSearch;
</script>

<article class='search'>
  <SearchBar onClickCloseSearch={onClickCloseSearch} />
</article>

<style lang='scss'>
  .search {
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
</style>