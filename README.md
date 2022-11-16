# AOC Discord Bot

A discord bot for Advent of Code.

![AOC Bot](https://cronitor.io/badges/HRXpOO/production/KJGNuQNoquwZ_03evaqHG2RhLlw.svg)

### Feature list

Slash commands

| Command     | Description                                                     |
| ----------- | --------------------------------------------------------------- |
| `/daysleft` | Fetch the number of days left until this year's AOC event begins. |
| `/aocwebsite` | Fetch link to AOC website | 

### Add to server 

[Invite link](https://discord.com/api/oauth2/authorize?client_id=1037650945892429904&permissions=2048&scope=applications.commands%20bot)

Permissions required 

- bot 
	- Send Messages 
- application.commands (for slash commands)

### Setup 

Start bot 

```bash
npm start 
```

Deploy slash commands to all guilds

```bash
npm run deploy-commands 
```

### Development 

Deploy slash commands for test guild 

```bash
npm run deploy-commands-test 
``` 
