<script>
  import _ from 'lodash';
  import { myList } from '../../../store';
</script>

<article>
  <h1 >{$myList.size === 0 ? '' : `${$myList.size}개의 약을 복용중이에요.`}</h1>
</article>

<style lang='scss'>
  article {
    min-height: 24.5px;
    margin-bottom: 24px;
  }
</style>