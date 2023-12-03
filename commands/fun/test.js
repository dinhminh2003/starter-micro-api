const { Client, Message } = require('messenger-api.js')

module.exports = {
    name: '',
    category: 'fun',
    /**
     * @arg {Client<true>} client 
     * @arg {Message} message 
     * @arg {string[]} args 
     */
    run: (client, message, args) => {

        msgs = 'Alo'
        return message.reply(msgs, { typing: true })
    }
}