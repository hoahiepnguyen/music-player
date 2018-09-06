const Bluez = require('bluez')
const bluetooth = new Bluez()
const Agent = require('./Agent.js')
const exec = require("child_process").exec;

bluetooth.init().then(async() => {

    // listen on first bluetooth adapter
    const adapter = await bluetooth.getAdapter('hci0');
    await adapter.Powered('on');
    await adapter.Discoverable('on')
    console.log("Powered and Discoverable on");

    // const obj = 
    // const agent = new Agent('/test/agent', obj);
    // await bluetooth.registerAgent(agent, "NoInputNoOutput")
    // await bluetooth.registerDefaultAgent()
    exec('python ./agent.py')
    console.log('Agent registered');
})