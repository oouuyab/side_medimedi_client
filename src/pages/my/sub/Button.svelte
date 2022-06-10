<script>
  import * as API from '../../../api/api';
  import { myList, isLoading } from '../../../store';

  const onClick = () => {
    isLoading.update(isLoading => !isLoading);
    const params = [... $myList].map(el => el[1]);
    API.searchDURInfo(params).then((res) => {
      isLoading.update(isLoading => !isLoading);
    });
  }
</script>

<button on:click={onClick}>결과 보기</button>

<style lang='scss'>
  button {
    width: 80vw;
    height: 42px;
    border-radius: 25px;
    background-color: #2C73D2;
    font-size: 18px;
    color: #fff;
  }
</style>