<script>
  import * as _ from 'lodash';
  import * as Constant from '../../../constant/Constant';
  import { resultList, currentStep } from '../../../store';

  export let index;
  const drug = $resultList[index];

  const openDurInfo = (index) => {
    if ($currentStep !== Constant.STEP.RESULT) {
      return;
    }

    resultList.update((list) => {
      list.splice(index, 1, [$resultList[index][0], { ...$resultList[index][1], isOpen: true }]);

      return list;
    });
  };

  const closeDurInfo = (index) => {
    if ($currentStep !== Constant.STEP.RESULT) {
      return;
    }

    $resultList = $resultList.map((list, idx) => {
      if (idx === index) {
        return [list[0], { ...list[1], isOpen: false }];
      } else {
        return list;
      }
    });
  };
</script>

<article>
  <div class="divider" />
  {#if !_.isEmpty(drug[1].durInfo)}
    {#if !$resultList[index][1].isOpen}
      <div class="folded-item">
        <p>🚨 병용금기 항목이 발견되었어요!</p>
        <button on:click={() => openDurInfo(index)}>
          <img src="/assets/icon/down-arrow.png" alt="down-arrow-icon" />
        </button>
      </div>
    {:else}
      <ul class="dur-list">
        {#each drug[1].durInfo as dur, index}
          <li>
            <h1 class="dur-drug-name">{dur.drugName}</h1>
            <p class="dur-side-effect">{dur.sideEffect}</p>
          </li>
        {/each}
      </ul>
      <button class="fold-btn" on:click={() => closeDurInfo(index)}>
        <img src="/assets/icon/up-arrow.png" alt="up-arrow-icon" />
      </button>
    {/if}
  {:else}
    <p>👩🏻‍🔬 안전해요!</p>
  {/if}
</article>

<style lang="scss">
  article {
    .divider {
      margin-top: 8px;
      width: 100%;
      border-bottom: solid 1px #e4e4e4;
    }
    .folded-item {
      p {
        margin-left: 12px;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.3px;
      }
      button {
        display: block;
        margin: 0 auto;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        img {
          width: 13px;
          height: 13px;
        }
      }
    }
    .dur-list {
      position: relative;
      margin-left: -12px;
      li {
        // padding-left: 0px;
        .dur-drug-name {
          font-weight: 600;
          font-size: 12px;
          font-weight: bold;
          margin: 0;
          letter-spacing: 0.3px;
        }
        .dur-side-effect {
          font-weight: 400;
          font-size: 11px;
          margin: 6px 0 12px 0px;
        }
      }
    }
    button.fold-btn {
      display: block;
      margin: 0 auto;
      background-color: rgba(0, 0, 0, 0);
      border: none;
      img {
        width: 13px;
        height: 13px;
      }
    }
  }
  p {
    margin-left: 12px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.3px;
  }
</style>
