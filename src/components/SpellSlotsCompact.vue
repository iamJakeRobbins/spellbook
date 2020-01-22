<template>
    <div>

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class SpellSlotsCompact extends Vue {
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