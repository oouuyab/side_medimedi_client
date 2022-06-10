<script>
  import List from './sub/List.svelte'
  import Button from './sub/Button.svelte';
  import LoadingView from './sub/LoadingView.svelte';
  import Search from './sub/Search.svelte';
  import StatusView from './sub/StatusVeiw.svelte';
  import { isLoading, isSearch } from '../../store';
  import { fly } from 'svelte/transition';
  import * as Constant from '../../constant/Constant';

  const onClickOpenSearch = () => {
    isSearch.update(() => true);
  }

  const onClickCloseSearch = () => {
    isSearch.update(() => false);
  }
</script>

<article>
  {#if !$isSearch}
    <h1>MediMedi</h1>
    <StatusView />
    <div class='search-icon' on:click={onClickOpenSearch}>
      <img class='icon' src='/assets/icon/search.png' alt='search-icon' />
    </div>
  {/if}
  {#if $isSearch}
    <div class='search' transition:fly={{x: window.innerWidth}}>
      <Search onClickCloseSearch={onClickCloseSearch} />
    </div>
  {:else}
    <List step={Constant.STEP.LIST}/>
    <Button />
    {/if}
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
    .search-icon {
      position: fixed;
      top: 24px;
      right: 24px;
      img.icon {
        width: 24px;
      }
    }
    .search {
      position:absolute;
      top: 0;
      left: 0;
    }
  }
</style>