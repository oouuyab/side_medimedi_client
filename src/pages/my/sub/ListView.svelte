<script>
  import _ from 'lodash';
  import * as Constant from '../../../constant/Constant';
  import { myList } from '../../../store';

  export let step;
  export let list;
  export let onClickAddList;
  export let onClickRemoveList

  const onClickAddOrRemove = (drug) => {
    if (step === Constant.STEP.SEARCH) {
        if ($myList.has(drug[0])) {
          onClickRemoveList(drug[0])
        } else {
          onClickAddList(drug)
        }
      }
  }
</script>

<section class='style'>
  {#if list.length > 0}
    {#each list as drug, index}
    <div class='drug-el'
    style={`border-bottom: ${index !== list.length - 1 ? '1px rgb(235, 235, 235) solid' : ''}`}
    on:click={() => onClickAddOrRemove(drug)}
    >
      <div class='drug-info'>
        <h1>{drug[1].drugName}</h1>
        <h2>{drug[1].drugCompany}</h2>
        {#if !_.isEmpty(drug[1].durInfo)}
        <button>
          <img src='/assets/icon/down-arrow.png' alt='down-arrow-icon' />
        </button>
        {/if}
      </div>
      <div class='drug-icon'>
        {#if step === Constant.STEP.LIST}
          <button on:click={() => onClickRemoveList(drug[0])}>
            ❌
          </button>
        {:else if step === Constant.STEP.SEARCH}
          {#if $myList.has(parseInt(drug[0]))}
            <div>✅</div>
          {/if}
        {/if}
      </div>
    </div>
    {/each}
  {:else}
    {#if step === Constant.STEP.LIST}
      <h1>검색을 통해 약을 추가해주세요💊</h1>
    {/if}
  {/if}
</section>

<style lang='scss'>
  .style {
    min-height: 80px;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85vw;
    overflow-y: scroll;
    margin: 0 0 60px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    .drug-el {
      display:flex;
      flex-direction: row;
      width: 75vw;
      margin: 10px 0;
      .drug-info {
        width: 90%;
        display:flex;
        flex-direction: column;
        h1 {
          font-size: 14px;
          word-break: keep-all;
          margin: 6px 12px;
          color:#343a40;
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: 0.3px;
        }
        h2 {
          font-size: 12px;
          margin: 6px 12px 12px;
          color: #495057;
        }
      }
      .drug-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          background-color: rgba(0, 0, 0, 0);
          border: none;
        }
        // div {

        // }
      }
    }
  }
  .style::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
</style>