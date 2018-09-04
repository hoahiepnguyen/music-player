const Bluez = require('bluez')
const bluetooth = new Bluez()

bluetooth.init().then(async() => {
    // listen on first bluetooth adapter
    const adapter = await bluetooth.getAdapter('hci0');
    await adapter.Powered('on');
    await adapter.Discoverable('on')
    console.log("Powered and Discoverable on");

    await bluetooth.registerDefaultAgent()
    console.log('Agent registered');
 })