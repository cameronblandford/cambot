require("dotenv").config()
const Twit = require("twit")
// Ole Worm's cabinet of curiosities, from Museum Wormianum, 1655
// A Chart of Biography
// What does the twitter bot do?
// Tweets out one row from a random dataisplural dataset with the header row too
// Assigns random nouns to random celestial benevolence categories from Borges
// Obituary bot that generates 2-sentence obituaries for people who never existed
//

// InformationIsBeautiful.com
// As we organize data, we draw meaning from it

const config = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
}

const bot = new Twit(config)

bot.post(
  "statuses/update",
  {
    status: "hello world!"
  },
  (err, data, response) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`${data.text} tweeted!`)
    }
  }
)
// What does polemic mean?
