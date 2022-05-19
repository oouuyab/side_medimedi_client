<script>
  import * as API from '../../api/Api';

  let keyword = '';
  $: result = [
    {
        "drugNameA": "타이레놀정500밀리그람(아세트아미노펜)(수출명:TylenolExtraStrengthCaplets)",
        "drugCompanyA": "(주)한국얀센",
        "drugCodeA": "199303108"
    },
    {
        "drugNameA": "어린이용타이레놀정80밀리그람(아세트아미노펜)",
        "drugCompanyA": "(주)한국얀센",
        "drugCodeA": "199303109"
    },
    {
        "drugNameA": "타이레놀정160밀리그람(아세트아미노펜)",
        "drugCompanyA": "(주)한국얀센",
        "drugCodeA": "199402278"
    },
    {
        "drugNameA": "어린이타이레놀현탁액",
        "drugCompanyA": "(주)한국얀센",
        "drugCodeA": "199603002"
    },
    {
        "drugNameA": "타이레놀8시간이알서방정(아세트아미노펜)(수출명:Tylenol Arthritis Tablet,Tylenol8Hours,Tylenol8hour,Tylenol ER extended release Caplet,Tylenol8 Hour Extended Release Caplet)",
        "drugCompanyA": "(주)한국얀센",
        "drugCodeA": "199603003"
    },
    {
        "drugNameA": "타이레놀8시간이알서방정325밀리그람(아세트아미노펜)",
        "drugCompanyA": "(주)한국얀센",
        "drugCodeA": "199903739"
    },
    {
        "drugNameA": "우먼스타이레놀정",
        "drugCompanyA": "(주)한국얀센",
        "drugCodeA": "200202893"
    },
    {
        "drugNameA": "타이레놀콜드-에스정(수출명:TylenolColdTablet,TylenolColdCaplet)",
        "drugCompanyA": "(주)한국얀센",
        "drugCodeA": "200302348"
    },
    {
        "drugNameA": "어린이타이레놀산160밀리그램(아세트아미노펜)",
        "drugCompanyA": "한국존슨앤드존슨판매(유)",
        "drugCodeA": "202005623"
    },
    {
        "drugNameA": "타이레놀정500밀리그람(아세트아미노펜)",
        "drugCompanyA": "(주)한국얀센",
        "drugCodeA": "202106092"
    }
];

  const onClickSearch = async () => {
    if (!keyword) {
      return;
    }

    const res = await API.search(keyword);
    result = res.data;
  };

  const onKeyPressSearch = async (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    await onClickSearch();
  }

  const onClickChange = (event) => {
    keyword = event.target.value;
  }
</script>

<article>
  <div class='search-bar'>
    <input on:keyup={onClickChange} on:keypress={onKeyPressSearch} placeholder='약 이름을 입력해주세요'>
    <button on:click={onClickSearch} >
      <img alt='search' src='/assets/icon/search.png' />
    </button>
  </div>
  <!-- 추천 검색 리스트 -->
  <ul class='search-result-list'>
    {#each result as data}
      <div class='search-result'>
        <p class='name'>{
          data.drugNameA
            .replace(/\(수출명:.*$/, '')
            .replace(/\(/, ' (')
          }
        </p>
        <p class='company'>{data.drugCompanyA}</p>
      </div>
    {/each}
  </ul>

</article>

<style lang='scss'>
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 90%;
    height: calc(100vh - 32px);
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
    .search-result-list {
      z-index: 65535;
      width: 95%;
      height: 50%;
      overflow-y: scroll;
      padding-left: 0;
      margin-top: 0;
      box-shadow: 0 4px 6px 0 #171717;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      .search-result {
        // width: 100%;
        font-size: 14px;
        margin: 0 8px;
        margin-bottom: 4px;
        border-bottom: 1px rgb(77, 83, 99) solid;
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