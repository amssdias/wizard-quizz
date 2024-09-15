app.component("modal-username", {
    template:
        /*html*/
        `
    <div class="modal-wrapper">
        <form class="form form-username" @submit.prevent="onSubmit">
            <h2 class="heading-secondary margin-bottom-s">Write your username</h2>
            <input v-model="username" class="form-username__input-text margin-bottom-xs" type="text">
            <input type="submit" class="btn--primary" value="Start">
        </form>
    </div>
	`,
    data() {
        return {
            username: "",
        }
    },
    methods: {
        onSubmit() {
            this.$emit("send-username", this.username);
            this.username = "";
        }
    }
});
