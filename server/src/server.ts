import app from './config/app'

const PORT = 8000

app.listen(PORT, () =>
  console.log(`Server running at: http://192.168.1.93:${PORT}`)
)
