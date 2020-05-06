const express = require('express');
const typedi = require('typedi');
const AccountService = require('../service/account.service')
const AccountModel = require('../models/account')

const router = express.Router();
const {Container} = typedi;

router.get("/", async (req, res, next) => {
    try {
        const accountService = Container.get(AccountService);
        const accounts = await accountService.getAll();

        return res.json({accounts})
    } catch (e) {
        next(e)
    }
});

router.post("/", async (req, res, next) => {
    try {
        const accountService = Container.get(AccountService)
        const account = req.body
        await accountService.create(account)
        return res.sendStatus(201)
    } catch (e) {
        next(e)
    }
})

router.patch("/:id", async (req, res, next) => {
    try {
        const accountService = Container.get(AccountService)
        const id = req.params.id
        const updatedValues = req.body
        await accountService.update(id, updatedValues)
        return res.sendStatus(200)
    } catch (e) {
        next(e)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const accountService = Container.get(AccountService)
        const accountId = req.params.id
        await accountService.delete(accountId)
        return res.sendStatus(204)
    } catch (e) {
        next(e)
    }
})


module.exports = router;

