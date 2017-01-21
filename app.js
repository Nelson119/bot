const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAAKqCPiq7kwBANKBZB2HLMe0UsN1bvUbBmxBEAV5aShrOaAz1DIhFZBnoiC6iu5ybT8BoUTxoALVBKTNJNcwfCPwWLDM2TVDi2Lbt8qbhAUMHeD7GEd7KMrhg4vpJYrt5AxT5wTYhcfMywLSYAq8FgMjrARdL1KCjyPNEzCgZDZD',
  verify: 'VERIFY_TOKEN',
  app_secret: 'APP_SECRET'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000)
console.log('Echo bot server running at port 3000.')