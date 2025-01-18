import { BankType, AccountType } from './types';

/**
 * This class implements a bank that can
 * maintain accounts and create new accounts
 */
export class Bank implements BankType {
    private accounts: AccountType[] = [];
    private usernames: string[] = [];

    /**
     * The constructor initialized the bank with accounts and usernames
     * @param accounts - array of accounts
     * @param usernames - array of usernames
     */
    public constructor(accounts: AccountType[], usernames: string[]) {
        this.accounts = accounts;
        this.usernames = usernames;
    }

    /**
     * Given an ID, returns the account with that ID.
     * @param id - account id
     * @returns - true if account id ezists, false otherwise
     */
    private findAccountById(id: number): AccountType | undefined {
        return this.accounts.find(account => account.id === id);
    }

    /**
     * Given an account number, returns true if it is valid.
     * @param accountNumber a number
     * @returns true if the account number is ten characters long, false otherwise.
     */
    private isAccountNumberInvalid(accountNumber: number): boolean {
        return accountNumber.toString().length !== 10;
    }

    /**
     * Given a username, returns true if it exists in the bank.
     * @param username a word
     * @returns true if the username exists in the bank, false otherwise.
     */
    private isUsernameExisits(username: string): boolean {
        return this.usernames.includes(username);
    }

    /**
     * Returns true if a given there exists an account with thre given account
     * number in the bank.
     * @param accountNumber an account number
     * @returns true if there is an account with the given account number, false otherwise
     */
    private accountExists(accountNumber: number): boolean {
        return this.accounts.some(account => account.id === accountNumber);
    }
    
    /**
     * Creates an account with the specified parameter input.
     * @param username a username for the given account.
     * @param age the age of the user creating the account.
     * @param accountNumber a ten digit account number.
     * @returns a new account with a ten-digit unique id and zero balance
     */
    createAccount(username: string, age: number, accountNumber: number): AccountType {
        if(this.isAccountNumberInvalid(accountNumber)) {
            throw new Error('Invalid account number');
        }
        if(!this.isUsernameExisits(username)) {
            throw new Error('Username not found');
        }
        if(age < 18) {
            throw new Error('User is under 18');
        }
        if(this.findAccountById(accountNumber)) {
            throw new Error('Account already exists');
        }
        const account: AccountType = {
            id: accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }

    /**
     * Increase the balance of the given users account by specified amount.
     * @param accountNumber the account number of the user who will get the deposit.
     * @param amount the amount that the balance will be increased by.
     * @returns the new balance of the given user after the deposit.
     */
    deposit(accountNumber: number, amount: number): number {
        const account = this.findAccountById(accountNumber);
        if (account === undefined) {
            throw new Error('User not found');
        }
        if (amount <= 0) {
            throw new Error('Amount must be positive');
        }
        account.balance += amount;
        return account.balance;
    }

    /**
     * Decrease the balance of the given users account by specified amount.
     * @throws an error if the balance of the user becomes negative.
     * @param accountNumber the account number of the user who will get the withdrawal.
     * @param amount the amount that the balance will be decreased by.
     * @returns the new balance of the given user after the deposit.
     */
    withdraw(accountNumber: number, amount: number): number {
        const account = this.findAccountById(accountNumber);
        if (account === undefined) {
            throw new Error('User not found');
        }
        if (amount <= 0) {
            throw new Error('Amount must be positive');
        }
        if (account.balance < amount) {
            throw new Error('Insufficient funds');
        }
        account.balance -= amount;
        return account.balance;
    }

    /**
     * Gets the balance of a given user's account.
     * @param accountNumber the account asssociated with user whose balance will be returned.
     * @returns the balance of the user associated with the account number.
     */
    checkBalance(accountNumber: number): number {
        const account = this.findAccountById(accountNumber);
        if (account === undefined) {
            throw new Error('User not found');
        }
        return account.balance;
    }

    /**
     * Print to the console the account number and the balance assoicated with a given account.
     * @param accountNumber The account number associated with the account that will be printed.
     */
    printAccount(accountNumber: number) {
        const account = this.findAccountById(accountNumber);
        if (account === undefined) {
            throw new Error('User not found');
        }
        console.log('------------------------------------------------');
        console.log(`| Account Number: %d | Balance: $%d |`, accountNumber, account.balance);
        console.log('------------------------------------------------');
    }


}