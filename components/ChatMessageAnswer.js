app.component("chat-message-answer", {
    props: {
      message: {
        type: Object,
        required: true
      }
    },
    template: 
    /*html*/
    `
      <div class="chat__message chat__message--current-user">
        <p class="chat__message-text">{{ message.text }}</p>
      </div>
    `
  });
