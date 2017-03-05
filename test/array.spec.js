import { app1, app2, server1, server2, port1, port2 } from './servers'
import errHandler from 'express-error-handler'
import Promise from 'bluebird'
import fetch from 'isomorphic-fetch'

const log2 = console.log.bind(console)
const noop = _ => {}

const uncaught = process.listeners('uncaughtException').pop()
describe('Arrays', function() {
  // ensure servers started (I know dumb. Don't worry about it)
  //beforeEach(() => process.removeAllListeners('uncaughtException'))
  //beforeEach(done =>  {
  //  process.on('uncaughtException', () => done())
  //  app1.listen(port1, () => done())
  //})
  //beforeEach(() => process.removeAllListeners('uncaughtException'))
  //beforeEach(done => {
  //  process.on('uncaughtException', () => done())
  //  app2.listen(port2, () => done())
  //})
  //beforeEach(() => process.removeAllListeners('uncaughtException'))
  //beforeEach(() => process.on('uncaughtException', uncaught || noop))

  it('should ping the servers', function(done) {
    //app1.get('/hello', (req, res) => res.end('hello'))
    //fetch(`http://localhost:${port1}/hello`)
    //  .then(r => log2(r) || r.json())
    //  .then(r => log2(r))
    //  .catch(done)
  })
})
