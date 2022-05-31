<script>
  import * as API from '../../../api/api';
  import { list, isLoading } from '../../../store';

  const onClick = () => {
    isLoading.update(isLoading => !isLoading);
    const params = [... $list].map(el => el[1]);
    API.searchDURInfo(params).then(() => {
      isLoading.update(isLoading => !isLoading);
    });
  }
</script>

<button on:click={onClick}>결과 보기</button>

<style lang='scss'>
  button {
    position: fixed;
    bottom: 120px;
    width: 80vw;
    height: 42px;
    border-radius: 25px;
    background-color: red;
  }
</style>