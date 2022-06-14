<script>
  import ListView from './ListView.svelte';
  import StatusView from './StatusVeiw.svelte';
  import { resultList } from '../../../store';
</script>

<article>
  <h1>MediMedi</h1>
  <StatusView />
  <ListView />
</article>

<style lang="scss">
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 0 0 120px;
    width: 90%;
  }
</style>
