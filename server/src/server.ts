import app from './app'
import config from './config'

app.listen(config.port, () => console.log(`Server run as http://127.0.0.1:${config.port}`))
process.on('uncaughtException', console.error)