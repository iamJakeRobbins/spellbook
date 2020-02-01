<template>
    <div>
        <div v-for="(value, key, index) in spellSlots">
            <spell-slot-by-level-collapse :spellLevel="key" :spellCount="value"/>
        </div>

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
                    'spellSlots'
            ]),
        },
    })
    export default class SpellSlotsCompact extends Vue {
      private selectedCharacter!: number;
      private url!: string;
      private spellSlots!: {};

      private async mounted() {
      }
    }
</script>
<style scoped>

</style>