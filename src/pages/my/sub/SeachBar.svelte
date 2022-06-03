<script>
  import * as API from '../../../api/Api';
  import { list } from '../../../store';

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
        resolve(res.data);
      } catch (err) {
        alert(err.stack);
        reject(err.stack);
      }
    })
  }

  const onClickAddList = (data) => {
    if (!$list.has(data.drugCode)) {
      list.update(list => {
        list.set(data.drugCode, data);
        return list;
      })
    }

    closeResultList();
  }

</script>

<section class='style'>
  <div class='search-bar'>
    <input id='search-bar-input' on:keyup={onClickChange} on:keypress={onKeyPressSearch} on:focus={closeResultList} placeholder='약 이름을 입력해주세요'>
    <button on:click={() => promise = handleClick(keyword)} >
      <img alt='search' src='/assets/icon/search.png' />
    </button>
  </div>
  <!-- 검색 결과 리스트 -->
  {#if isOpenResultList}
  {#await promise}
  <!-- pending -->
  <p class='search-result-list-inprogress'>검색중</p>
  {:then results}
  <ul class='search-result-list'>
    {#if results.length > 0}
      {#each results as result, index}
        <div class='search-result'
        style={`border-bottom: ${index !== results.length - 1 ? '1px rgb(77, 83, 99) solid' : ''}`}
        on:click={() => onClickAddList(result)}
        >
          <p class='name'>{result.drugName}</p>
          <p class='company'>{result.drugCompany}</p>
        </div>
      {/each}
    {:else if results.length > 0}
        <div>검색 결과가 없습니다.</div>
    {/if}
    </ul>
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
    .search-bar {
      width: 90%;
      padding: 0 8px;
      margin: 32px auto 0;
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
    .search-result-list-inprogress {
      position: absolute;
      width: 77%;
      min-height: 24px;
      max-height: 50%;
      z-index: 65535;
      overflow-y: scroll;
      padding: 0;
      margin-top: 67px;
      box-shadow: 0 4px 6px 0 #171717;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      background-color: #fff;
      text-align: center;
      padding:12px 0;
    }
    .search-result-list {
      position: absolute;
      width: 77%;
      min-height: 24px;
      max-height: 50%;
      z-index: 65535;
      overflow-y: scroll;
      padding: 0;
      margin-top: 67px;
      box-shadow: 0 4px 6px 0 #171717;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      background-color: #fff;
      .search-result {
        // width: 100%;
        font-size: 14px;
        margin: 0 8px;
        margin-bottom: 4px;
        .name {
          font-weight: bold;
          margin-bottom: 4px;
          word-break: keep-all;
        }
        .company {
          font-size: 12px;
          color:rgb(77, 83, 99);
          margin-top: 0px;
          text-align: right;
        }
      }
    }
    .search-result-list::-webkit-scrollbar {
          display: none;
    }
    // Hide scrollbar for IE, Edge and Firefox
    .search-result-list {
      -ms-overflow-style: none;  // IE and Edge
      scrollbar-width: none;  // Firefox
    }
  }
  </style>
