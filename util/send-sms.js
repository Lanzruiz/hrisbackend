const accountSid = 'AC7fa8011b22a9116cd65a893d06d4dd89';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15709894201',
     to: '+639231087784'
   })
  .then(message => console.log(message.sid));