const NodeCache = require('node-cache')

const config = {
    prefix: '',
    openaikey: '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',
    credentials: require('./fbstate.json'),
    cache: new NodeCache({
        checkperiod: 10000,
        deleteOnExpire: true
    }),
    ratelimit: new Map(),
    commands: new Map(),
    aliases: new Map()
}

module.exports = config