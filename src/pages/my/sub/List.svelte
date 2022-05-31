<script>
  import { list } from '../../../store';

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
  {#each [... $list] as drug}
  <div class='drug-el'>
    <div class='drug-info'>
      <h1>{drug[1].drugName}</h1>
      <h2>{drug[1].drugCompany}</h2>
    </div>
    <button on:click={() => onClickRemoveList(drug[0])}></button>
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
      width: 75vw;
      border-radius: 24px;
      box-shadow: 0 4px 6px 0 #171717;
      margin: 10px 0;
      .drug-info {
        width: 80vw;
        display:flex;
        flex-direction: column;
        h1 {
          font-size: 24px;
          margin: 12px 12px;
          color:#343a40;
          font-weight: 400;
        }
        h2 {
          font-size: 22px;
          text-align: right;
          margin: 12px 12px;
          color: #495057;
        }
      }
    }
  }
</style>