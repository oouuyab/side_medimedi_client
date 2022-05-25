<script>
  import * as API from '../../api/Api';
  import SearchBar from './sub/SeachBar.svelte'
  import List from './sub/List.svelte'
</script>

<article>
  <SearchBar />
  <List />
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