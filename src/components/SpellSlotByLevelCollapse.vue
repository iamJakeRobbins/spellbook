<template>
  <div>
    <span class="pointer"
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample">
      <div class="level_descriptor">
        {{spellLevel}}
      </div>
    </span>
    <div class="collapse" id="collapseExample">
      <div class="card card-body spellcard">
        <div>
          <label for="spell_levels">Spell Slots Available:</label>
          <input id="spell_levels" type="number" :value="spellCount" max="10"/>
        </div>
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
    @Prop() spellLevel!: string;
    @Prop() spellCount!: number;

    private async mounted() {

    }
  }
</script>
<style scoped>
  #spell_levels {
    width: 5em;
    margin-left: 1em;
  }

  .level_descriptor {
    background-color: dimgray;
  }

  .spellcard {
    background-color: antiquewhite;
    padding: .5em;
    padding-bottom: .25em;
  }
</style>