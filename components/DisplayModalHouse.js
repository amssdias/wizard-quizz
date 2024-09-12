app.component("modal-house", {
	template: 
	/*html*/
	`
	<div class="modal-wrapper">
		<div class="modal__house">
			<h2 class="heading-secondary margin-bottom-xs">Your house is gryff</h2>
			<button 
				class="btn--primary" 
				type="submit"
				@click="restartQuizz"
			>Restart quizz</button>
		</div>
	</div>
	`,
	methods: {
		restartQuizz() {
			this.$emit("restart-quizz");
		}
	}
});
