function requestdevice(){
    let filters = [];
    filters.push({services: ["user_data"]});
  
    let options = {};
    options.acceptAllDevices = true;
    navigator.bluetooth.requestDevice(options)
    .then(device => {
        console.log('> Name:             ' + device.name);
      console.log('> Id:               ' + device.id);
      console.log('> Connected:        ' + device.gatt.connected);
    })
    .catch(error => {
        consile.log('Argh! ' + error);
    });
}