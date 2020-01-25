<template>
    <div>
        <div v-for="slot in spellSlots">
            <span>hello world</span>
        </div>
<!--        <spell-slot-by-level-collapse/>-->
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import SpellSlotByLevelCollapse from '@/components/SpellSlotByLevelCollapse.vue';
    import {mapGetters} from 'vuex';


    @Component({
        components: {
            SpellSlotByLevelCollapse,
        },
        computed: {
            ...mapGetters([
                    'selectedCharacter',
                    'url',
            ]),
        },
    })
    export default class SpellSlotsCompact extends Vue {
      private selectedCharacter!: number;
      private url!: string;
      spellSlots = [];
      @Prop([Number])  charId!: number;

      private async mounted() {
      //     const data: object = {
      //         id: this.charId,
      //     };
      //     // this component needs to fetch available spell levels so that we can loop over them to create the display field
      //     const request = await fetch(`${this.url}/api/charSpellSlots`, {
      //         method: 'POST',
      //         headers: {
      //             'Content-Type': 'application/json',
      //         },
      //         body: JSON.stringify(data),
      //     });
      //     this.spellSlots = await request.json();
      }
    }
</script>
<style scoped>

</style>