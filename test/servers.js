import express from 'express'
import http from 'http'
import Gun from 'gun'

export const app1 = express()
export const app2 = express()

export const server1 = http.createServer(app1)
export const server2 = http.createServer(app2)

export const port1 = 8001
export const port2 = 8002

const gun1 = Gun(`localhost:${port1}`)
const gun2 = Gun(`localhost:${port2}`)

gun1.wsp(server1)
gun2.wsp(server2)

