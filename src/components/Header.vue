<template lang="html">
	<div class="">
		<nav id="navigation" class="navbar navbar-expand-lg navbar-dark bg-dark">

  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
	<span class="navbar-text-">
      Navbar text with an inline element
    </span>
</nav>
	</div>

</template>

<script lang='ts'>
export default {
}
</script>
<style lang='css' scoped>
/* .head{
	position:fixed;
  left:0;
  top:0;
  width:100vw;
  z-index:200;
  height:100px;
	background-color: blue;

} */
.navbar-nav {
    float:none;
    /* margin:0 auto;
    display: block; */
    text-align: center;
}


</style>
