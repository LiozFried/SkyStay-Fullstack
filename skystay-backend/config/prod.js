// Environment variables are set by Render dashboard or loaded by server.js
export default {
    dbURL: process.env.MONGO_URL,
    dbName: process.env.DB_NAME
}