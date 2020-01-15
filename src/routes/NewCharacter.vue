<template lang="html">
  <div class="">
  	hello world
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NewCharacter extends Vue {
	mounted()
	{
		console.log('here');
	}
}
</script>

<style lang="css" scoped>
</style>
