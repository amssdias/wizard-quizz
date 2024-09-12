app.component("answers-list", {
    props: {
        answers: {
            type: Array,
            default: () => [],
        },
        isActive: {
            type: Boolean,
            required: true,
        }
    },
    template: 
    /*html*/
    `
    <div class="chat__message">
        <ul class="chat__message-answers">
            <li 
                class="chat__message-answer"
                v-for="(answer, index) in answers"
                :key="index"
                @click="[isActive ? addToAnswers : null]"
                :class="{ 'cursor-disabled': !isActive }"
            >{{ answer.title }}</li>
        </ul>
    </div>
    `,
    methods: {
        addToAnswers(e) {
            const chosenAnswer = e.target.textContent;
            this.$emit("add-to-answers", chosenAnswer);
        }
    }
})