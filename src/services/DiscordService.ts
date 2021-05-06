import * as Discord from 'discord.js'

class DiscordService {
  execute = async (id: string) => {
    const WEBHOOK_ID = process.env.DISCORD_WEBHOOK_ID
    const WEBHOOK_TOKEN = process.env.DISCORD_WEBHOOK_TOKEN

    try {
      const hook = new Discord.WebhookClient(String(WEBHOOK_ID), String(WEBHOOK_TOKEN))
      await hook.send(`@here \nVocê tem um novo apply! \nhttps://soa-apply-frontend.vercel.app/apply/${id}`)
      
    } catch (error) {
      console.log(error.message)
    }
  }
}

export default new DiscordService