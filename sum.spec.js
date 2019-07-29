let sum = require('./sum');
let open = require('open');

describe('Test Launch and Assert', () =>{
  let appManager;

  beforeAll(async () => {
    appManager = await open('http://google.ca');
    console.log(appManager.pid);
    appManager.stdout.on('data', data => {
      console.log(data);
    });
  })
  
  afterAll(async () => {
    console.log(appManager.pid);
    try {
      await appManager.kill();
    } catch(err) {
      console.log('ERROR', err);
    }
    console.log(appManager.killed);
  })

  it('adds 1 + 2 to equal 3', async () => {
    result = await sum(1,2);
    expect(result).toBe(3);
  },10000)
})