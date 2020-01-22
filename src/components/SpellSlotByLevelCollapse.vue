<template>
  <div>
    <span class="pointer"  data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
      Link with href
    </span>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        I hold the spell info
      </div>
    </div>
<!--    <div class="accordion" id="accordionExample">-->
<!--      <div class="card">-->
<!--        <div class="card-header" id="headingOne">-->
<!--          <h2 class="mb-0">-->
<!--            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">-->
<!--              First Level Spells-->
<!--            </button>-->
<!--          </h2>-->
<!--        </div>-->

<!--        <div id="collapseOne" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">-->
<!--          <div class="card-body">-->
<!--            Hi, I hold the spell info-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class SpellSlotByLevelCollapse extends Vue {
    get selectedCharacter(): number {
      return this.$store.state.selectedCharacter;
    }

    async mounted() {
      // this component needs to fetch available spell levels so that we can loop over them to create the display field
    }
  }
</script>
<style scoped>

</style>