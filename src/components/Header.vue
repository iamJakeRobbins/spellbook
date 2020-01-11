<template lang="html">
	<div class="">
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
            </li>

        </ul>
    </div>
    <div class="mx-auto order-0">
        <a class="navbar-brand mx-auto" href="#">My SpellBook</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="#">Account</a>
            </li>
        </ul>
    </div>
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
