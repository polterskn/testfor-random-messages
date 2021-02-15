const messages = [
  "I am a bit of a bright spark.",
  "My life is a crazy explosion of shapes and colors.",
  "Work out? Are you serious right now?",
  "I often dream that I am drowning.",
  "No, but I do know what I want in life.",
];

const randomMsg = () => {
  const newMessage = messages[Math.floor(Math.random() * messages.length)];
  console.log(newMessage);
};

module.exports = { randomMsg };
