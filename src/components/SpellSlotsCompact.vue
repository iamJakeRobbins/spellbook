<template>
    <div>
        <spell-slot-by-level-collapse/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import SpellSlotByLevelCollapse from "@/components/SpellSlotByLevelCollapse.vue";

    @Component({
        components: {
            SpellSlotByLevelCollapse,
        }
    })
    export default class SpellSlotsCompact extends Vue {
      get selectedCharacter(): number {
          return this.$store.state.selectedCharacter;
      }

      async mounted() {
          // this component needs to fetch available spell levels so that we can loop over them to create the display field
          const data = fetch(`${this.url}`)
      }
    }
</script>
<style scoped>

</style>