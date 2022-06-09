<script>
  import SearchBar from './SeachBar.svelte';

  export let onClickCloseSearch;
</script>

<article class='search'>
  <button on:click={onClickCloseSearch}>
    <img src='/assets/icon/left-arrow.png' alt='left-arrow-icon' />
  </button>
  <SearchBar />
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
    button {
      margin-top: 12px;
      background-color: rgba(0, 0, 0, 0);
      border: none;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
</style>