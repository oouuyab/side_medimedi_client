<script>
  import * as API from '../../api/Api';
  let name = '';
  const onClickSearch = () => alert(name);
  const onClickChange = (event) => console.log(event.target.value)
</script>

<article>
  <input bind:value={name} on:change={onClickChange} placeholder='약 이름을 입력해주세요'>
  <button on:click={onClickSearch}>검색</button>
</article>

<style>
  article {
    width: 80%;
    height: 80px;
  }
</style>