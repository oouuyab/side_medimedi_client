<script>
  import * as API from '../../../api/Api';
  import * as Constant from '../../../constant/Constant';
  import { myList } from '../../../store';
  import ListView from './ListView.svelte';

  export let onClickCloseSearch;
  let keyword = '';
  let promise = Promise.resolve([]);
  $: isOpenResultList = false;

  const closeResultList = () => {
    isOpenResultList = false;
    keyword = ''

    document.querySelector('#search-bar-input').value = '';
    document.querySelector('#search-bar-input').focus();
  }

  const onClickChange = (event) => {
    keyword = event.target.value;
  }

  const onKeyPressSearch = async (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    promise = handleClick(keyword);
  }

  const handleClick = (keyword) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (keyword === '') {
          return alert('약 이름을 입력해주세요')
        }
        isOpenResultList = true;
        const res = await API.search(keyword);
        const drugList = res.data.map((drug) => [parseInt(drug.drugCode), drug])
        resolve(drugList);
      } catch (err) {
        alert(err.stack);
        reject(err.stack);
      }
    })
  }

  const onClickAddList = (data) => {
    if (!$myList.has(data[0])) {
      myList.update(list => {
        list.set(data[0], data[1]);
        return list;
      })
    }

    // closeResultList();
  }

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
  <div class='search-bar-wrp'>
    <button class='close-search-btn' on:click={onClickCloseSearch}>
      <img src='/assets/icon/left-arrow.png' alt='left-arrow-icon' />
    </button>
    <div class='search-bar'>
      <input id='search-bar-input'
      on:keyup={onClickChange}
      on:keypress={onKeyPressSearch}
      placeholder='약 이름을 입력해주세요'>
      <button on:click={() => promise = handleClick(keyword)} >
        <img alt='search' src='/assets/icon/search.png' />
      </button>
    </div>
  </div>
  <!-- 검색 결과 리스트 -->
  {#if isOpenResultList}
  {#await promise}
  <!-- pending -->
  <p class='search-result-list-inprogress'>검색중</p>
  {:then results}
  <ListView step={Constant.STEP.SEARCH} list={results} onClickAddList={onClickAddList} onClickRemoveList={onClickRemoveList} />
  {/await}
  {/if}
</section>

<style lang='scss'>
  .style {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 90%;
    // height: calc(100vh - 32px);
    .search-bar-wrp {
      display:flex;
      flex-direction: row;
      // justify-content: ;
      align-items: flex-end;
      width: 100vw;

      .close-search-btn {
        margin-bottom: 0;
        padding: 0 0 0 8px;
        // margin-top: 12px;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        img {
          width: 24px;
          height: 24px;
        }
      }
      .search-bar {
        width: 80%;
        padding: 0 8px;
        margin: 12px auto 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgb(77, 83, 99);
        input {
          border: none;
          margin-bottom: 0;
          width: calc(90% - 20px)
        }
        input:focus {
          outline: none;
        }
        button {
          margin-bottom: 0;
          background-color: rgba(0, 0, 0, 0);
          padding: 0;
          border: none;
          width: 20px;
          height: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      }
  }
</style>
