<template lang="html">
  <div class="">
  	<!-- char name -->
		<input type="text" name="" value="">
		<!-- level -->
		<input type="number" name="" value="">
		<!-- class -->
		<input type="text" name="" value="">
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
