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
    hypervisor.definedDomains(function(err, info) {
        if (err) { res.send(500, "Server Error"); return; }
        res.send(info);
    });
})