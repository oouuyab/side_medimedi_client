<script>
  import _ from 'lodash';
  import { list } from '../../../store';
</script>

<article>
  <h1>{$list.size === 0 ? '복용중이신 약을 등록해주세요' : `${$list.size}개의 약을 복용중이에요.`}</h1>
  <h2>{[... $list].filter(drug => !_.isEmpty(drug[1].durInfo)).length !== 0 ? '🚨 병용금기 사항이 검색됐어요!' : '🧞‍♂️ 안전해요'}</h2>
</article>

<style lang='scss'></style>