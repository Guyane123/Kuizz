<div class="nav">
	<p class="logo">BT</p>
</div>
<slot></slot>

<style lang="scss">

	.nav {
		background-color: black;
		position: fixed;
		margin-top: 0px;
		margin-left: 0px;
		top: 0;
		left: 0;
		width: 100vw;
		height: 50px;
	}
	.logo {
		color: white;
		text-align: center;
		font-weight: 900;
		font-size: 1.2em;
	}
</style>