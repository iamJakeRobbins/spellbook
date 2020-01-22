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
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import {mapGetters} from 'vuex';

  @Component({
    computed: {
      ...mapGetters,
    },
  })
  export default class SpellSlotByLevelCollapse extends Vue {

    private async mounted() {
      // this component needs to fetch available spell levels so that we can loop over them to create the display field
    }
  }
</script>
<style scoped>

</style>