var libvirt = require('../node-libvirt');
var hypervisor_object = new libvirt.Hypervisor('qemu:///system');

exports.statistics = function(callback) {
    hypervisor_object.connect(function(err) {
        if(err) { console.log(err); callback(true); return; }
        console.log("Connected to Hypervisor : qemu"); 
        hypervisor_object.getNodeInfo(function(err, info) {
            if(err) { console.log(err); callback(true); return; }
            // console.log(info); 
            callback(false, info);
        });
    });
}

exports.activeDomains = function(callback) {
    hypervisor_object.connect(function(err) {
        if(err) { console.log(err); callback(true); return; }
        console.log("Connected to Hypervisor : qemu"); 
        hypervisor_object.listActiveDomains(function(err, info) {
            if(err) { console.log(err); callback(true); return; }
            // console.log(info); 
            callback(false, info);
        });
    });
}

exports.definedDomains = function(callback) {
    hypervisor_object.connect(function(err) {
        if(err) { console.log(err); callback(true); return; }
        console.log("Connected to Hypervisor : qemu"); 
        hypervisor_object.listDefinedDomains(function(err, info) {
            if(err) { console.log(err); callback(true); return; }
            // console.log(info); 
            callback(false, info);
        });
    });
}