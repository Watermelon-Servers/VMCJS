var express = require('express');
var router = express.Router();
var hypervisor = require('../export_modules/hypervisor');
const sanitize = require('sanitize')();

router.get("/", (req, res) => {
    res.send(500, `nothing to see here`);
});

router.get("/statistics", (req, res) => {
    hypervisor.statistics(function(err, info) {
        if (err) { res.send(500, "Server Error"); return; }
        res.send(info);
    });
})

router.get("/domains", (req, res) => {
    hypervisor.activeDomains(function(err, info) {
        if (err) { res.send(500, "Server Error"); return; }
        res.send(info);
    });
})

router.get("/domains/persistent", (req, res) => {
    hypervisor.persistentDomains(function(err, info) {
        if (err) { res.send(500, "Server Error"); return; }
        res.send(info);
    });
})

router.get("/domains/count", (req, res) => {
    hypervisor.numberOfActiveDomains(function(err, info) {
        if (err) { res.send(500, "Server Error"); return; }
        res.send(200, info);
    });
})

router.get("/domains/count/persistent", (req, res) => {
    hypervisor.numberOfPersistentDomains(function(err, info) {
        if (err) { res.send(500, "Server Error"); return; }
        res.send(200, info);
    });
})

module.exports = router;