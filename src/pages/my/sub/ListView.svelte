<script>
  import _ from 'lodash';
  export let list;
  export let onClickAddList;
  export let onClickRemoveList;
</script>

<section class='style'>
  {#if list.length > 0}
    {#each list as drug, index}
    <div class='drug-el'
    style={`border-bottom: ${index !== list.length - 1 ? '1px rgb(235, 235, 235) solid' : ''}`}
    on:click={() => onClickAddList(drug)}
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
        <button on:click={() => onClickRemoveList(drug[0])}>
          <img src='/assets/icon/delete.png' alt='delete-icon' />
        </button>
      </div>
    {/each}
  {:else}
    <h1>검색을 통해 약을 추가해주세요!</h1>
  {/if}
</section>

<style lang='scss'>
  .style {
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85vw;
    overflow-y: scroll;
    margin: 32px 0 160px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    .drug-el {
      display:flex;
      flex-direction: row;
      width: 75vw;
      margin: 10px 0;
      .drug-info {
        width: 85vw;
        display:flex;
        flex-direction: column;
        h1 {
          font-size: 14px;
          word-break: keep-all;
          margin: 12px 12px 6px;
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
        button {
        }
      }
      button {
        position: static;

        background-color: rgba(0, 0, 0, 0);
        border: none;
        img {
          width: 12px;
          height: 12px;
        }
      }
    }
  }
  .style::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
</style>