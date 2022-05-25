<script>
  import { list } from '../../../store';

  const onClickRemoveList = (drugCodeA) => {
    if ($list.has(drugCodeA)) {
      list.update(list => {
        list.delete(drugCodeA);
        return list
      })
    }
  }
</script>

<section class='style'>
  {#each [... $list] as drug}
  <div class='drug-el'>
    <div class='drug-info'>
      <h1>{drug[1].drugNameA}</h1>
      <h2>{drug[1].drugCompanyA}</h2>
    </div>
    <button on:click={() => onClickRemoveList(drug[0])}>X</button>
  </div>
  {/each}
</section>

<style lang='scss'>
  .style {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    .drug-el {
      display:flex;
      flex-direction: row;
      width: 80vw;
      .drug-info {
        width: 80vw;
        display:flex;
        flex-direction: column;
        h1 {
          font-size: 32px;
          margin-bottom: 8px;
        }
        h2 {
          font-size: 24px;
          text-align: right;
        }
      }
    }
  }
</style>