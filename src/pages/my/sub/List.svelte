<script>
  import { list } from '../../../store';
  import ListView from './ListView.svelte';
  export let step;
  const onClickRemoveList = (drugCode) => {
    if ($list.has(drugCode)) {
      list.update(list => {
        list.delete(drugCode);
        return list
      })
    }
  }
</script>

<section class='style'>
  <ListView step={step} list={[... $list]} onClickAddList={() => {}} onClickRemoveList={onClickRemoveList} />
</section>

<style lang='scss'>
</style>