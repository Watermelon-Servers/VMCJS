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

exports.persistentDomains = function(callback) {
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

exports.numberOfActiveDomains = function(callback) {
    hypervisor_object.connect(function(err) {
        if(err) { console.log(err); callback(true); return; }
        console.log("Connected to Hypervisor : qemu"); 
        hypervisor_object.getNumberOfActiveDomains(function(err, info) {
            if(err) { console.log(err); callback(true); return; }
            // console.log(info); 
            callback(false, info);
        });
    });
}

exports.numberOfPersistentDomains = function(callback) {
    hypervisor_object.connect(function(err) {
        if(err) { console.log(err); callback(true); return; }
        console.log("Connected to Hypervisor : qemu"); 
        hypervisor_object.getNumberOfDefinedDomains(function(err, info) {
            if(err) { console.log(err); callback(true); return; }
            // console.log(info); 
            callback(false, info);
        });
    });
}

exports.freeMemory = function(callback) {
    hypervisor_object.connect(function(err) {
        if(err) { console.log(err); callback(true); return; }
        console.log("Connected to Hypervisor : qemu"); 
        hypervisor_object.getNodeFreeMemory(function(err, info) {
            if(err) { console.log(err); callback(true); return; }
            // console.log(info); 
            callback(false, info);
        });
    });
}