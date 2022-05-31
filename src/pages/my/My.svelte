<script>
  import SearchBar from './sub/SeachBar.svelte'
  import List from './sub/List.svelte'
  import Button from './sub/Button.svelte';
  import LoadingView from './sub/LoadingView.svelte';
  import { isLoading } from '../../store';
</script>

<article>
  <SearchBar />
  <List />
  <Button />
  {#if $isLoading}
    <LoadingView />
  {/if}
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