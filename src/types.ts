/**
 * A type that represents the account of a bank user.
 */
export type AccountType = {
    id: number,
    balance: number
}

/**
 * A type that represents a bank.
 */
export interface BankType {
    createAccount(username: string, age: number, accountNumber: number): AccountType
}