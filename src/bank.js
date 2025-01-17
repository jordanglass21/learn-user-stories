"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
/**
 * This class implements a bank that can
 * maintain accounts and create new accounts
 */
var Bank = /** @class */ (function () {
    /**
     * The constructor initialized the bank with accounts and usernames
     * @param accounts - array of accounts
     * @param usernames - array of usernames
     */
    function Bank(accounts, usernames) {
        this.accounts = [];
        this.usernames = [];
        this.accounts = accounts;
        this.usernames = usernames;
    }
    /**
     *
     * @param id - account id
     * @returns - true if account id ezists, false otherwise
     */
    Bank.prototype.findAccountById = function (id) {
        return this.accounts.find(function (account) { return account.id === id; });
    };
    Bank.prototype.isAccountNumberInvalid = function (accountNumber) {
        return accountNumber.toString().length !== 10;
    };
    Bank.prototype.isUsernameExisits = function (username) {
        return this.usernames.includes(username);
    };
    /**
     *
     * @param username
     * @param age
     * @param accountNumber
     * @returns a new account with a ten-digit unique id and zero balance
     */
    Bank.prototype.createAccount = function (username, age, accountNumber) {
        if (this.isAccountNumberInvalid(accountNumber)) {
            throw new Error('Invalid account number');
        }
        if (!this.isUsernameExisits(username)) {
            throw new Error('User not found');
        }
        if (age < 18) {
            throw new Error('User is under 18');
        }
        if (this.findAccountById(accountNumber)) {
            throw new Error('Account already exists');
        }
        var account = {
            id: accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    };
    return Bank;
}());
exports.Bank = Bank;
