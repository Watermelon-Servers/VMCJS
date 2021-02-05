var express = require('express');
var router = express.Router();
var hypervisor = require('../export_modules/hypervisor');
const sanitize = require('sanitize')();

router.get("/", (req, res) => {
    res.send(500, `nothing to see here`);
});

router.get("/statistics", (req, res) => {
    hypervisor.statistics(function(err, info) {
        if (err) { res.status(500).send("Server Error"); return; }
        res.status(200).send(info);
    });
})

router.get("/domains", (req, res) => {
    hypervisor.activeDomains(function(err, info) {
        if (err) { res.status(500).send("Server Error"); return; }
        res.status(200).send(info);
    });
})

router.get("/domains/persistent", (req, res) => {
    hypervisor.persistentDomains(function(err, info) {
        if (err) { res.status(500).send("Server Error"); return; }
        res.status(200).send(info);
    });
})

router.get("/domains/count", (req, res) => {
    hypervisor.numberOfActiveDomains(function(err, info) {
        if (err) { res.status(500).send("Server Error"); return; }
        res.status(200).send(info);
    });
})

router.get("/domains/count/persistent", (req, res) => {
    hypervisor.numberOfPersistentDomains(function(err, info) {
        if (err) { res.status(500).send("Server Error"); return; }
        res.status(200).send(info);
    });
})

router.get("/fram", (req, res) => {
    hypervisor.freeMemory(function(err, info) {
        if (err) { res.status(500).send("Server Error"); return; }
        res.status(200).send(info);
        
    });
})

module.exports = router;