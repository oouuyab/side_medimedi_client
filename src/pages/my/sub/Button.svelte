<script>
  import * as API from '../../../api/api';
  import { list, isLoading } from '../../../store';

  const onClick = () => {
    isLoading.update(isLoading => !isLoading);
    const params = [... $list].map(el => el[1]);
    API.searchDURInfo(params).then((res) => {
      isLoading.update(isLoading => !isLoading);
      console.log(res.data)
    });
  }
</script>

<button on:click={onClick}>결과 보기</button>

<style lang='scss'>
  button {
    position: fixed;
    bottom: 70px;
    width: 80vw;
    height: 42px;
    border-radius: 25px;
    background-color: #2C73D2;
    font-size: 18px;
    color: #fff;
  }
</style>