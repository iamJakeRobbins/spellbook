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
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {mapGetters} from 'vuex';

  @Component({
    computed: {
      ...mapGetters,
    },
  })
  export default class SpellSlotByLevelCollapse extends Vue {
    @Prop() spellLevel!:string;
    @Prop() spellCount!:number;

    private async mounted() {
      console.log(this.spellLevel)
      console.log(this.spellCount)
    }
  }
</script>
<style scoped>

</style>