<script>
  import * as API from '../../../api/Api';
  import { LocalStorage } from '../../../common/Storage';
  import * as Constant from '../../../constant/Constant';
  import { myList, isLoading, resultList, currentStep } from '../../../store';

  const onClick = () => {
    if ($myList.size <= 1) {
      return alert('두 개 이상의 약을 추가해주세요!');
    }
    isLoading.update((isLoading) => !isLoading);
    const params = [...$myList].map((el) => el[1]);

    LocalStorage.setDrugList([...$myList]);

    API.searchDURInfo(params).then((res) => {
      resultList.update(() => res.data.map((el) => [el.drugCode, el]));
      LocalStorage.setDurResult($resultList);
      isLoading.update((isLoading) => !isLoading);
      currentStep.update(() => Constant.STEP.RESULT);
    });
  };
</script>

<button on:click={onClick}>결과 보기</button>

<style lang="scss">
  button {
    width: 80%;
    height: 42px;
    border-radius: 25px;
    background-color: #2c73d2;
    font-size: 18px;
    color: #fff;
  }
</style>
