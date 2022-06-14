<script>
  import * as Constant from '../../../constant/Constant';
  import { myList, resultList, currentStep } from '../../../store';
  import ListView from './ListView.svelte';

  const onClickRemoveList = (drugCode) => {
    if ($myList.has(drugCode)) {
      myList.update((list) => {
        list.delete(drugCode);
        return list;
      });
    }
  };
</script>

<section class="style">
  {#if $myList.size > 0 || $resultList.length > 0}
    <ListView onClickAddList={() => {}} {onClickRemoveList} />
  {/if}
</section>

<style lang="scss">
</style>
