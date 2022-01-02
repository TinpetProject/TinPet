require("dotenv").config();

const redis = require("redis");
// console.log(process.env.REDIS_HOST)
const client = redis.createClient({
    url: process.env.REDIS_URL
});

client.on('error', (err) => console.log('Redis Client Error', err));

module.exports = client;
