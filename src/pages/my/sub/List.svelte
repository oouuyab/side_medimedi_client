<script>
  import { list } from '../../../store';
  import ListView from './ListView.svelte';
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
  <ListView list={[... $list]} onClickAddList={() => {}} onClickRemoveList={onClickRemoveList} />
</section>

<style lang='scss'>
</style>