<template lang="html">
    <div id="body">
        <div id="home_main" class="container rounded">
            <h2>Add Character Details</h2>
            <div class="flexContainer">
                <div class="flexItem">
                    <div class="aRow">
                        <label>Name: </label>
                        <input
                                type="text"
                                v-bind:value="charDetails.name"
                                placeholder="Add Character Name"
                                maxlength="20"
                                @input="updateCharName($event)">
                    </div>
                    <div class="aRow">
                        <label>Character Level: </label>
                        <input
                                type="number"
                                min="1"
                                max="20"
                                :value='charDetails.level'
                                @input=updateCharLevel($event)>
                    </div>
                    <div class="aRow" v-if="classDetailsSet">
                        <label>Character Class: </label>
                        <select :value="charDetails.classId" @change="updateCharClass($event)">
                            <option value="0">Select...</option>
                            <option
                                    v-for="(item,key,index) in classes"
                                    :id="key"
                                    :value="key"> {{item}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="flexItem">
                    <spell-slots-compact/>
                </div>
            </div>
            <div class="aRow">
                <button
                        class="btn btn-primary"
                        :value="selectedCharacter"
                        @click='submitCharacter'>
                    {{submitMessage}}
                </button>
                <button
                        class="btn btn-danger"
                        :value="selectedCharacter"
                        @click="returnToChars">
                    Cancel
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import SpellSlotsCompact from '@/components/SpellSlotsCompact.vue';
  import {mapGetters} from 'vuex';
  import {CharactersType} from "@/store/storeTypes";

  @Component({
    components: {
      SpellSlotsCompact,
    },
    computed: {
      ...mapGetters([
        'classes',
        'url',
        'selectedCharacter',
        'selCharData',
        'submitMessage',
      ]),
    },
  })
  export default class NewCharacter extends Vue {
    public classDetailsSet: boolean = false;
    private selectedCharacter!: number | null;
    private classes!: {};
    private url!: string;
    private selCharData!: any;
    private submitMessage!: string;
    private charDetails: CharactersType = {
      name: '',
      level: 0,
      description: '',
      classId: 0,
      spellSlots: {
        first: null,
        second: null
      }
    };

    public updateCharName($event: any): void {
      this.charDetails.name = $event.target.value;
    }

    public updateCharLevel(e: any): void {
      this.charDetails.level = parseInt(e.target.value, 10);
    }

    public updateCharClass(e: any): void {
      this.charDetails.classId = parseInt(e.target.value, 10);
    }

    private async submitCharacter(): Promise<any> {
      // update query to use charDetails object
      // const data: object = {
      //   name: this.charName,
      //   level: this.charLevel,
      //   class: this.charClass,
      //   id: this.charId,
      // };
      // need to add validation before submitting
      // const route: string = this.selectedCharacter ? `${this.url}/api/updateCharacter` : `${this.url}/api/submitCharacter`;
      // const request = await fetch(`${route}`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
        // body: JSON.stringify(data),
      // });
      // this.returnToChars();
    }

    private returnToChars(): void {
      this.$router.push('/char');
    }

    private async checkForClasses(): Promise<any> {

      if (!Object.keys(this.classes).length) {
        const data = await fetch(`${this.url}/api/classDetails`);
        const json = await data.json();
        this.addClassesToStore(<JSON> json);
      }
    }

    private addClassesToStore(data: JSON): void {
      this.$store.commit('getClasses', data);
      this.classDetailsSet = true;
    }

    private buildCharDetails(): void {
      const charObject = {
        name: this.selectedCharacter ? this.selCharData.name : '',
        level: this.selectedCharacter ? this.selCharData.level : 0,
        classId: this.selectedCharacter ? this.selCharData.classid : 0,
        spellSlots: this.selectedCharacter ? this.selCharData.spellSlots : {},
      };
      this.charDetails = {...charObject};
      this.classDetailsSet = true;
    }

    private mounted(): void {
      this.checkForClasses();
      this.buildCharDetails();
    }
  }
</script>

<style lang="css" scoped>
    #body {
        background-image: url('../assets/background_books.jpg');
        background-size: 100vw;
        height: 100vh;
    }

    #home_main {
        background-color: lightgray;
        height: 100vh;
        width: 60vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .aRow {
        padding-top: .5em;
        padding-bottom: .5em;
    }

    .flexContainer {
        display: flex;
        justify-content: space-between;
    }

    .flexItem {
        width: 30vw;
    }

    button {
        padding-left: .5em;
        padding-right: .5em;
    }
</style>
