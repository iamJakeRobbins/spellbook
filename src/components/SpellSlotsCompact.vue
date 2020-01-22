<template>
    <div>
        <h2>hello world</h2>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class SpellSlotsCompact extends Vue {
        mounted() {
            console.log('hello world')
        }
    }
</script>
<style scoped>

</style>