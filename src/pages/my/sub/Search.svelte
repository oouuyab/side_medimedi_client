<script>
  import SearchBar from './SeachBar.svelte';
  import { currentStep } from '../../../store';
  import * as Constant from '../../../constant/Constant';

  const onClickCloseSearch = () => {
    currentStep.update(() => Constant.STEP.MY);
  };
</script>

<article class="search">
  <SearchBar {onClickCloseSearch} />
</article>

<style lang="scss">
  .search {
    max-width: 414px;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
</style>
