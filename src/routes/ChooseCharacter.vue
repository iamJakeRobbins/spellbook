<template lang="html">
	<div id="body">
		<div id="home_main" class="container rounded">
			<div class="textfield">
			<p>
				Welcome to your Library, {{userName}}!
			</p>
			<p>
				Your casters are displayed below, select one to view their spellbooks
			</p>
<!--			<div class="aRow" v-for="char in characters">-->
<!--				<span @click="selectCharacter">-->
<!--					<img class="portrait" src="@/assets/portrait_placeholder.png" alt="portrait silhouette">-->
<!--					<span class="nameSpan"> {{char.name}}</span>-->
<!--					<span class="nameSpan"> Level: {{char.level}}</span>-->
<!--					<span> {{char.description}}</span>-->
<!--				</span>-->
<!--				<button-->
<!--				class="btn btn-success"-->
<!--				:value="char.id"-->
<!--				@click="editChar">-->
<!--				Edit-->
<!--			</button>-->
<!--				<button-->
<!--				class="btn btn-danger"-->
<!--				:value="char.id"-->
<!--				@click="deleteCaster">-->
<!--				Delete-->
<!--			</button>-->
<!--			</div>-->
<!--			<div class="aRow">-->
<!--				<button class="btn btn-primary" @click="newCaster">Add A Caster</button>-->
<!--			</div>-->
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import {Component, Vue, Watch} from 'vue-property-decorator';
	import {mapGetters} from 'vuex';

	@Component({
		computed: {
			...mapGetters([
				'url',
				'characters',
			]),
		},
	})
	export default class ChooseCharacter extends Vue {
		public characters!: [];
		private userName: string = 'Jake';
		private url!: string;


		public addCharacters(data: object): void {
			this.$store.commit('updateCharacters', data);
		}

		public selectCharacter(e: any): void {
			const val: number = e.target.value;
			this.$store.commit('updateSelectedCharacter', val);
			this.$router.push('/spellbook');
		}

		public editChar(e: any): void {
			const id: number = parseInt(e.target.value, 10);
			this.$store.commit('updateSelectedCharacter', id);
			this.newCaster();
		}

		public async deleteCaster(e: any): Promise<any> {
			const id: number = parseInt(e.target.value, 10);

			await fetch(`${this.url}/api/deleteCharacter`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id,
				}),
			});
			await this.refreshCharacterList();
		}

		private async refreshCharacterList() {

			const data = await fetch(`${this.url}/api/chars`);
			const json = await data.json();
			await this.addCharacters(json);
		}

		private newCaster(): void {
			this.$router.push('/addCharacter');
		}

		private async mounted(): Promise<any> {
			this.refreshCharacterList();
			this.$store.commit('updateSelectedCharacter', null);
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
	height:100vh;
	width:60vw;
}
.textfield {
	padding-top: 10px;
}
button {
	margin-left: .25em;
	margin-right: .25em;
}
.nameSpan {
	border-right: 2px solid black;
	padding-right: .25em;
}
.aRow {
	padding-top: .5em;
	padding-bottom: .5em;
	text-align: center;
}
.portrait {
	height: 5em;
	width: 5em;
}
</style>
