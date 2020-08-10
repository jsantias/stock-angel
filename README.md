# Stock Angel

------

Stock angel looks after your shares by automatically trading stocks when the market crashes or reaches a threshold. This bot trades with a stake account ([stake.com.au]()).

### Prerequisites

```
Node.JS 12+
Stake account
Finnhub API token
```

### Environment variables

A '.env' file must be created and saved in the root folder of this project. It should contain the following

```
STAKE_USER=<insert-username>
STAKE_PASS=<insert-password>
FINNHUB_TOKEN=<insert-token>
```

### Deployment

1. cd to the project folder.
2. Make sure prerequisites are met and environment variables are available.
3. Run `npm install`
4. Run `npm run start`

### Making adjustments

The bot will automatically sell your shares if it finds that you have loss -5% of its value. This can be changed by setting the `LOSS_DIFF` variable inside of `app.js`.

```
const LOSS_DIFF = -5;
```

### Problems

The angel will have problems getting into your account if two factor authentication (2FA) is enabled. Since my stake account is on unlimited, I was happy enough to disable 2FA and set a strong password. If someone was able to access my account and sell my stocks they won't be able to use the unsettled cash. Unsettled cash takes 2 trading days to settle and allow you to start trading again or cash out. I'm not suggesting you to do the same. Whatever you do to your account is your responsibility. Any risks and decisions you make is on you. 



