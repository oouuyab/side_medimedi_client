<script>
  import * as API from '../../api/Api';
  import SearchBar from './sub/SeachBar.svelte'

  // $: list.subscribe(value => )
  // = new Map();

  // const onClickAddList = (data) => {
  //   if (!list.has(data.drugCodeA)) {
  //     list.set(data.drugCodeA, data);
  //     list = [];
  //   }
  // }

  // const onClickRemoveList = (data) => {
  //   if (list.has(data.drugCodeA)) {
  //     list.delete(data.drugCodeA);
  //   }
  // }
</script>

<article>
  <SearchBar list={list} />
  <!-- 선택한 약 리스트 -->
  <!-- <ul class='selected-list'>
    {#each [... list] as data, index}
    <div class='selected'>{data}</div>
    {/each}
  </ul> -->
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