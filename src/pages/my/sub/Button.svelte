<script>
  import * as API from '../../../api/api';
  import * as Util from '../../../util/util';
  import { list } from '../../../store';

  const onClick = () => {
    const combinations = Util.getCombinations([... $list]);
    API.searchDURInfo(combinations);
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