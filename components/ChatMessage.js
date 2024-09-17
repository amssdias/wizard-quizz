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
