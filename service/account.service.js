const AccountModel = require("../models/account")

class AccountService {
    async getAll() {
        const foundAccounts = await AccountModel.findAll({
            order: [["id", "DESC"]]
        });
        return foundAccounts
    }

    async create(account) {
        const newAccount = {
            ...account,
        };
        const accountRecord = await AccountModel.create(newAccount)
        return accountRecord
    }

    async update(accountId, newValues) {
        const updatedAccount = await AccountModel.update(newValues, {
            where: {id: accountId}
        });

        return updatedAccount
    }

    async delete(accountId) {
        await AccountModel.destroy({
            where: { id: accountId}
        })
    }
}

module.exports = AccountService;