---
title: react-native Chatbot SDK
sidebar_label: React Native
---

# Migration Guide for Android

Version 1.x had an issue where a corrupted ymAuthentication token was passed in some cases from SDK to the server. The conversation history was thus mapped to the corrupted ymAuthenticationToken

Version 2.x has fix for this issue and thus a correct ymAuthenticationToken is always passed.
However, as the correct ymAuthentication is different from the corrupted token, our server treats this user as a new user which leads to a complete loss of history of user conversations.
The user will have a fresh start after updating the app.

Note:

1. ymAuthentication was corrupted only when it contained `=` character in 1.x versions
2. This issue was happening only on Android platform.

For more info feel free to email us at mobile@yellow.ai

## Installation

### npm

```sh
$ npm install ymchat-react-native --save

$ react-native link ymchat-react-native
```

### yarn

```sh
yarn add ymchat-react-native
```

### Android

#### File provider

Add following key in your `strings.xml` file found at `yourproject/android/app/src/main/res/values/strings.xml`, this will override default file provider used by SDK.

Overriding the file provider path will avoid conflict with other app using YM CHATBOT SDK. You can use your application id and suffix it with ".fileprovider"
Example - applicationId : "com.abc.xyz" then application_id_for_provider = com.abc.xyz.fileprovider

```xml
<string name="application_id_for_provider">your.application.id.fileprovider</string>
```

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `ymchat-react-native` and add `YMChat.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libYMChat.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`

- Add `import com.reactlibrary.YMChatPackage;` to the imports at the top of the file
- Add `new YMChatPackage()` to the list returned by the `getPackages()` method

2. Append the following lines to `android/settings.gradle`:
   ```
   include ':ymchat-react-native'
   project(':ymchat-react-native').projectDir = new File(rootProject.projectDir, 	'../node_modules/ymchat-react-native/android')
   ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
   ```
     compile project(':ymchat-react-native')
   ```

## Usage

Import YMChat in App.js

```javascript
import { YMChat } from "ymchat-react-native";
```

### Set botId

This is the first and **compulsary** step.

```javascript
YMChat.setBotId("x1234567890");
```

### YM AuthenticationToken

ymAuthenticationToken is used to associate an identity of the user with the chat bot.

Whenever chatbot is launched with ymAuthenticationToken it will load the previous chats associated with this user since **inception**.

```javascript
YMChat.setAuthenticationToken("token");
```

Note: History will load only when `Show history` flag is enabled in the channel settings

### Push Notifications

YMChat supports firebase notifications. Pass your `FCM token` in setDeviceToken method.

```javascript
YMChat.setDeviceToken("token");
```

Note: Firebase service account key is required to send notifications. You can share the service account key with us. More info [here](https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key)

### Payload

Additional information can be passed in the form of key value pair from app to bot using payload.

```javascript
YMChat.setPayload({ name: "Integration", type: "react-native" });
```

Payload can be used to pass information from host app to bot. The payload dictionary should be JSON compatible else an error will be thrown

For passing data from bot to app refer bot [Bot Events](#bot-events)

:::note payload security
Payload is securely passed in HTTPS post request to protect the information passed in it
:::

#### Trigger journey

A specific journey can be triggered on launch, by passing the slug in the payload.

```js
YmChat.setPayload({ JourneySlug: "checkout-cart" });
```

### On-Premise / Region Specific deployments

ymchat-react-native supports bots with on-prem deployments. For the bot to work, pass the on-prem URL to `setCustomURL()` method.

```javascript
YMChat.setCustomURL("https://your-on-prem-url.com");
```

If the bot is deployed in a specific region(e.g. r1,r2,r3..rn)) on yellow.ai cloud, set the `customBaseUrl` as follows

```javascript
YMChat.setCustomURL("https://rx.cloud.yellow.ai");
```

Here rx = r1,r2,r3,r4,r5 etc

### Custom loader

You can customize the loading image while bot loads. Just pass the URL in the following way. It is recommended to use jpg, png, svg or gif

```javascript
YMChat.setCustomLoaderUrl("https://example.com/your/custom/image.gif");
```

### V2 bot

You can enable V2 bot by calling `setVersion()` method. Default value is 1

```javascript
YMChat.setVersion(2);
```

### Speech to Text

Speech to text can be enabled and disabled by calling setEnableSpeech(). Default value is `false`

```javascript
YMChat.setEnableSpeech(true);
```

### Hide Input Bar

You can hide the input bar while bot is loading by calling the `setDisableActionsOnLoad` API . Default value is `false`

```javascript
YmChat.setDisableActionsOnLoad(true);
```

### Colors

#### Status bar

Status bar color can be set by calling `setStatusBarColor` method

```javascript
YMChat.setStatusBarColor("#FFFFFF");
```

#### Close button

Close button color can be set by calling `setCloseButtonColor` method

```javascript
YMChat.setCloseButtonColor("#000000");
```

#### iOS

If you are supporting Speech recognization, add following snippet to Info.plist of the host app

```xml
<key>NSMicrophoneUsageDescription</key>
<string>Your microphone will be used to record your speech when you use the Voice feature.</string>
<key>NSSpeechRecognitionUsageDescription</key>
<string>Speech recognition will be used to determine which words you speak into this device&apos;s microphone.</string>
```

## Present chatbot

Chat bot can be presented by calling `startChatbot()`. This method will display full screen chat view

```javascript
YMChat.startChatbot();
```

## Bot Events

Bot events are used to pass information from bot to app. For passing events from app to bot refer [Payload](#payload)

Import `YMChatEvents` from `ymchat-react-native`

```javascript
import { YMChat, YMChatEvents } from 'ymchat-react-native';
..
..
YMChatEvents.addListener('YMChatEvent', (event) => {
   console.log(event.code, event.data); // you get access to all incoming bot events.
});
```

#### Bot close event

Bot close event is separetly sent and it can be handled in following way.

```javascript
import { YMChat, YMChatEvents } from 'ymchat-react-native';
..
..
YMChatEvents.addListener('YMBotCloseEvent', () => {
   console.log("Bot closed");
});

```

## Close bot

Bot can be programatically closed using `closeBot()` function

```javascript
YMChat.closeBot();
```

## Unlink Device Token

If you want to stop receiving push notifications you can unlink the device token.
Device token typically is unlinked when the user logs out of the app.

```javascript
YMChat.unlinkDeviceToken(
  botId,
  apiKey,
  deviceToken,
  (unLinkDeviceTokenResult) => {
    if (unLinkDeviceTokenResult == true) {
      console.log("Device token unlinked");
    } else {
      console.log(unLinkDeviceTokenResult);
    }
  }
);
```

:::note API Key
API key can be generated/found by visiting `https://cloud.yellow.ai` -> Overview -> Configure -> API Key section

Existing client can upgrade their dependency to `v2.1.+` and replace exisitng key with new API Key.
Client using SDK version below `v2.1.0` will have no impact.
:::

## Demo App

A demo app can be used as a reference to better understand how this SDK can be integrated in the app
[https://github.com/yellowmessenger/ymchat-react-native-demo](https://github.com/yellowmessenger/ymchat-react-native-demo)
