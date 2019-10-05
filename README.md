# slack-app-template

[![CI](https://github.com/daiwahome/slack-app-template/workflows/CI/badge.svg)][actions]
[![CD](https://github.com/daiwahome/slack-app-template/workflows/CD/badge.svg)][actions]

Slack App template using Bolt

## Usage

Note: May use Firebase Blaze Plan

### Setup firebase project

Create a new firebase project in https://console.firebase.google.com/u/1/ and install firebase-tools.

```bash
$ npm install -g firebase-tools
$ firebase login
$ firebase use [project_id]
```

### Create a Slack app

1. Press `Create New App` in https://api.slack.com/apps
2. Press `Add a Bot User` in `Bot Users`
3. Press `Create New Command` in `Slash Commands`:
  - Command: `/hello`
  - Request URL: `https://asia-northeast1-[project_id].cloudfunctions.net/slack`
  - Short Description: `Hello world`
4. Press `Install App to Workspace` in `Install App`

### Set credentials

```bash
# Signing Secret in Basic Information
$ firebase functions:config:set slack.signing_secret=xxx
# Bot User OAuth Access Token in Install App
$ firebase functions:config:set slack.bot_token=yyy
```

### Set secrets for GitHub Actions

Open `Settings > Secrets` in a GitHub repository and set secrets as follows:

- `FIREBASE_TOKEN`: Firebase token with `firebase login:ci`
- `FIREBASE_PROJECT_ID`: Firebase project ID
- `SLACK_WEBHOOK_URL`: Incoming Webhook URL

### Setup node

```bash
$ cd functions
$ npm install
$ cd -
```

### Deploy functions Manually

```bash
$ firebase deploy --only functions
```

## Links

- [slackapi/bolt](https://github.com/slackapi/bolt)
- [w9jds/firebase-action](https://github.com/w9jds/firebase-action)
- [8398a7/action-slack](https://github.com/8398a7/action-slack)

[actions]: https://github.com/daiwahome/slack-app-template/actions
