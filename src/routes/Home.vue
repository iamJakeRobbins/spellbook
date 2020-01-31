<template lang="html">
    <div id="body">
        <div id="home_main" class="container rounded">
            <div class="textfield">
                <h2>The Wizard's library</h2>
                <p>
                    A companion app for Pathfinder, use the Wizard's library to manage all of your spell-casting needs!
                </p>
                <ul>
                    <li>Add an unlimited number of characters</li>
                    <li>Manage your spellbooks</li>
                    <li>Prepare spells</li>
                    <li>Add spells to your library</li>
                    <li>Browse spells with direct links to the pfsrd!</li>
                    <li>And more!</li>
                    <li>...someday</li>
                </ul>
                <button class="btn btn-dark" type="button" name="button" @click="loginNow">
                    Login
                </button>
                <p>or</p>
                <button class="btn btn-dark" type="button" name="button">
                    Create an Account Now
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {mapGetters} from 'vuex';

  @Component
  export default class Home extends Vue {
    private loginNow(): void {
      // routing directly to character list for now, need to route to login page
      this.$router.push('char');
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
    }

    .textfield {
        padding-top: 10px;
    }
</style>
