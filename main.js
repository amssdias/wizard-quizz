const app = Vue.createApp({
    data() {

        return {
            username: null,

            // Questions
            questions: [],
            currentQuestionIndex: 0,
            chatHistory: [],

            // Student points
            housePoints: {
                gryffindorPoints: 0,
                hufflepuffPoints: 0,
                ravenclawPoints: 0,
                slytherinPoints: 0,
            },

            winnerHouse: "",
            finishQuizz: false,
        }
    },
    created() { // Fetch the data after the component is created
        fetch("sorting_hat.json")
            .then(response => response.json())
            .then(data => {
                this.questions = data; // Make sure to use 'this' to assign the questions
                this.addQuestionToChat();
            })
            .catch(err => {
                this.questions = null;
                console.log(err);
                alert("Sorry something went wrong!");
            });
    },
    watch: {
        chatHistory: {
            handler(newMessage) {
                this.$nextTick(() => {
                    this.scrollToBottom();
                });
            },
            deep: true
        }
    },
    methods: {

        addQuestionToChat() {
            const question = this.questions[this.currentQuestionIndex];
            this.chatHistory.push({
                type: "question",
                text: question.title,
                answers: question.answers,
            });
        },

        handleAnswerSelected(answer) {
            // Add the user's answer to the chat
            this.chatHistory.push({
                type: "answer",
                text: answer,
            });

            // Update points
            this.updateScore(answer);
            setTimeout(() => {
                // Move to the next question (if available)
                if (this.currentQuestionIndex < this.questions.length - 1) {
                    this.currentQuestionIndex++;
                    this.addQuestionToChat();
                } else {
                    this.finishQuizz = true;
                }
            }, 1000);

        },

        updateScore(answer) {
            const points = this.getScores(answer);
            this.updatePoints(points);
        },

        getScores(answer) {
            const answers = this.questions[this.currentQuestionIndex].answers;
            return answers.find(a => a.title === answer).scores;
        },

        updatePoints(points) {
            this.housePoints.gryffindorPoints += points.g;
            this.housePoints.hufflepuffPoints += points.h;
            this.housePoints.ravenclawPoints += points.r;
            this.housePoints.slytherinPoints += points.s;
        },

        scrollToBottom() {
            const container = this.$el.parentElement;
            container.scrollTop = container.scrollHeight;
        },

        handleRestart() {
            this.chatHistory = [];
            this.currentQuestionIndex = 0;
            this.finishQuizz = false;

            setTimeout(() => {
                this.addQuestionToChat();

            }, 500)
        },
        registerUser(username) {
            this.username = username;
        }
    }
})
