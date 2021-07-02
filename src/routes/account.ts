import express from 'express'

const routes = express.Router()

routes.post('/login', (req, res) => {
  res.json({ success: true })
})

export default routes
