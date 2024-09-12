app.component("chat-message", {
    props: {
      message: {
        type: Object,
        required: true
      }
    },
    template: 
    /*html*/
    `
      <div class="chat__message">
        <p class="chat__message-text">{{ message.text }}</p>
      </div>
    `
  });

// app.component("chat-message", {
//     props: {
//         questions: {
//             type: Array,
//             required: false,
//             default: () => [],
//         },
//         questionNumber: {
//             type: Number,
//             required: false,
//         },
//         isUser: {
//             type: Boolean,
//             required: true
//         },
//         answerChosen: {
//             type: String,
//             required: false
//         }
//     },
//     template: 
//     /*html*/
//     `
//     <div class="chat__message">
//         <p class="chat__message-text">
//             {{ isUser ? answerChosen : questions[questionNumber].title }}
//         </p>
//     </div>
//     `
// })