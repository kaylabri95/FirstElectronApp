const os = require('os');

const interfaces = os.networkInterfaces();
for(key in interfaces){
    for(network in interfaces[key]){
        const n = interfaces[key][network];
if(n.family === 4){
    const selectedIPAddress = []
    selectedIPAddress.push(interfaces[key][network].address)
    console.log(selectedIPAddress)
    };
};
};

