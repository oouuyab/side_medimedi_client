<script>
  import { myList } from '../../../store';
  import ListView from './ListView.svelte';
  export let step;

  const onClickRemoveList = (drugCode) => {
    if ($myList.has(drugCode)) {
      myList.update(list => {
        list.delete(drugCode);
        return list
      })
    }
  }
</script>

<section class='style'>
  <ListView step={step} list={[... $myList]} onClickAddList={() => {}} onClickRemoveList={onClickRemoveList}/>
</section>

<style lang='scss'>
</style>