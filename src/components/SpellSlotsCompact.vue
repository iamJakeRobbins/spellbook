<template>
    <div>
        <spell-slot-by-level-collapse/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import SpellSlotByLevelCollapse from '@/components/SpellSlotByLevelCollapse.vue';
    import {mapGetters} from 'vuex';


    @Component({
        components: {
            SpellSlotByLevelCollapse,
        },
        computed: {
            ...mapGetters,
        },
    })
    export default class SpellSlotsCompact extends Vue {
      private selectedCharacters!: number;
      private url!: string;

      private async mounted() {
          // this component needs to fetch available spell levels so that we can loop over them to create the display field
          const data = await fetch(`${this.url}`);
      }
    }
</script>
<style scoped>

</style>