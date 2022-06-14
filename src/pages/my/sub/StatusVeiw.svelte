<script>
  import _ from 'lodash';
  import * as Constant from '../../../constant/Constant';
  import { myList, resultList, currentStep } from '../../../store';
</script>

<article>
  {#if $currentStep === Constant.STEP.MY}
    <h1>
      💊&nbsp;&nbsp;{$myList.size === 0 ? '검색을 통해 약을 추가해주세요' : `${$myList.size}개의 약을 복용중이에요`}
    </h1>
  {:else if $currentStep === Constant.STEP.RESULT}
    {#if $resultList.filter((list) => list[1].durInfo.length > 0).length > 0}
      <div>🚨</div>
      <h1>
        {$resultList.filter((list) => list[1].durInfo.length > 0).length}개의 약에서<br />병용금기 항목을 발견했어요!
      </h1>
    {:else}
      <h1>👩🏻‍🔬 발견된 병용금기 항목이 없어요!</h1>
    {/if}
  {/if}
</article>

<style lang="scss">
  article {
    width: calc(80vw - 20px);
    min-height: 24.5px;
    margin: 70px 0 24px;
    padding: 10px;
    background-color: #fff;
    border-radius: 15px;
    h1 {
      margin-left: 12px;
      font-size: 15px;
      line-height: 1.7;
    }
  }
</style>
