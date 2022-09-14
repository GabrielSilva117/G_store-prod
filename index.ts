import 'reflect-metadata'
import express from 'express'
import { MainDs } from './data_source'
// import Handlebars from 'handlebars'
import { engine } from 'express-handlebars'

const app = express()
const port = 3000

const main = async () => {
  try {
    MainDs.initialize()
    console.log('Connected to Postgresql')
    app.use(express.json())
    app.engine(
      'handlebars',
      engine({
        defaultLayout: 'main',
        runtimeOptions: {
          allowProtoPropertiesByDefault: true,
          allowProtoMethodsByDefault: true
        }
      })
    )
    app.set('view engine', 'handlebars')
    app.set('views', './views')
    //app.use()
    app.listen(port, () => {
      console.log('Server Running on ' + port)
    })
  } catch (err) {
    if (err) {
      console.error('An error ocurred! -> ' + err)
    }
  }
}

main()

app.get('/', (req, res) => {
  res.render('home')
})
