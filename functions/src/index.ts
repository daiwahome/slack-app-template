import * as functions from 'firebase-functions';
import { App, ExpressReceiver } from '@slack/bolt';

const config = functions.config();
const expressReceiver = new ExpressReceiver({
  signingSecret: config.slack.signing_secret,
  endpoints: '/',
});
const app = new App({
  receiver: expressReceiver,
  token: config.slack.bot_token,
});
app.error(console.log);

app.command('/hello', async ({ ack, say }) => {
  ack();
  say("Hello");
});

exports.slack = functions
  .region('asia-northeast1')
  .https
  .onRequest(expressReceiver.app);
