<script>
	const onClick = () => window.location.href = '/#/my'
</script>

<main>
	<h1>메디메디</h1>
	<p>안전한 의약품 사용을 위한<br />간편한 검색</p>
	<button on:click={onClick}>시작하기</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color:#2C73D2;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>