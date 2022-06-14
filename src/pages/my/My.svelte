<script>
  import List from './sub/List.svelte';
  import Button from './sub/Button.svelte';
  import LoadingView from './sub/LoadingView.svelte';
  import Search from './sub/Search.svelte';
  import StatusView from './sub/StatusVeiw.svelte';
  import { isLoading, myList, currentStep } from '../../store';
  import { fly } from 'svelte/transition';
  import * as Constant from '../../constant/Constant';

  const onClickOpenSearch = () => {
    currentStep.update(() => Constant.STEP.SEARCH);
  };
  const onClickGoToMy = () => {
    currentStep.update(() => Constant.STEP.MY);
  };
</script>

<article>
  {#if $currentStep === Constant.STEP.MY}
    <h1>MediMedi</h1>
  {:else if $currentStep === Constant.STEP.RESULT}
    <div class="back-icon" on:click={onClickGoToMy}>
      <img src="/assets/icon/left-arrow.png" alt="left-arrow-icon" />
    </div>
  {/if}
  {#if $currentStep !== Constant.STEP.SEARCH}
    <StatusView />
    {#if $currentStep === Constant.STEP.MY}
      <div class="search-icon" on:click={onClickOpenSearch}>
        <img class="icon" src="/assets/icon/search.png" alt="search-icon" />
      </div>
    {/if}
    <List />
    {#if $currentStep === Constant.STEP.MY && $myList.size > 1}
      <Button />
    {/if}
  {:else if $currentStep === Constant.STEP.SEARCH}
    <div class="search" transition:fly={{ x: window.innerWidth > 414 ? 414 : window.innerWidth }}>
      <Search />
    </div>
  {/if}
  {#if $isLoading}
    <LoadingView />
  {/if}
</article>

<style lang="scss">
  article {
    max-width: 414px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 0 0 120px;
    min-height: calc(100vh - 120px);
    height: 100%;
    h1 {
      margin-bottom: 0;
    }
    .back-icon {
      position: absolute;
      top: 24px;
      left: 24px;
      img {
        width: 18px;
      }
    }
    .search-icon {
      position: absolute;
      top: 24px;
      right: 24px;
      img.icon {
        width: 24px;
      }
    }
    .search {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
