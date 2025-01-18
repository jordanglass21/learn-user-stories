import { Bank } from '../src/bank';


const accounts = [{ id: 1234567890, balance: 5000 },
{ id: 1234567891, balance: 10000 }];

const usernames = ['user1', 'user2'];

const bank = new Bank(accounts, usernames);

// user story 1
console.log("------------------User Story 1------------------");
// Scenario 1: successful account created
const acc = bank.createAccount('user1', 20, 1234567892);
if (acc.id !== 1234567892
    || acc.balance !== 0
    || acc.id.toString().length !== 10) {
    console.log('Scenario 1 failed');
} else {
    console.log('Scenario 1 passed');
    bank.printAccount(acc.id); // display results
}

// Scenario 1: account not created because user id is not unique
try {
    bank.createAccount('user1', 20, 1234567892); 
    console.log('Scenario 1 failed');
} catch(e) {
    console.log('Scenario 1 passed');
    console.log(e.message);
}

// scenario 2: unsuccessful account creation due to customer being below 18
try {
    bank.createAccount('user1', 17, 1234567899);
    console.log('Scenario 2 failed');
}
catch(e) {
    console.log('Scenario 2 passed');
    console.log(e.message);
}

// Scenario 3: unsuccessful account creation due to invalid username
try {
    bank.createAccount('user3', 20, 1234567888);
    console.log('Scenario 3 failed');
}
catch(e) {
    console.log('Scenario 3 passed');
    console.log(e.message)
}


// user story 2
console.log("------------------User Story 2------------------");

// Scenario 1: customer is able to deposit money into an account
try {
    const balance = bank.deposit(1234567892, 100);
    if (balance === 100) {
        console.log('Scenario 1 passed'); 
        bank.printAccount(1234567892); // display results
    } else {
        console.log('Scenario 1 failed');
    }
} catch(e) {
    console.log('Scenario 1 failed');
    console.log(e.message);
}

// Scenario 2: customer is unable to deposit money into bank account becuase
// the bank account does not exist
let balance3 = 0;
try {
    balance3 = bank.deposit(1299999990, 100);
    console.log('Scenario 2 failed');
}
catch(e) {
    if (balance3 === 0) {
        console.log('Scenario 2 passed');
        console.log(e.message);
    } else {
        console.log('Scenario 2 failed');
    }
}

// Scenario 3: customer is unable to deposit money into bank account because
// the indicated deposit amount is negative
let balance4 = 0;
try {
    balance4 = bank.deposit(1234567892, -100);
    console.log('Scenario 3 failed');
}
catch(e) {
    if (balance4 === 0) {
        console.log('Scenario 3 passed');
        console.log(e.message);
    } else {
        console.log('Scenario 3 failed');
        
    }
}

// user story 3
console.log("------------------User Story 3------------------");

// Scenario 1: customer is able to withdraw money from an account
try {
    const balance = bank.withdraw(1234567892, 10);
    if (balance === 90) {
        console.log('Scenario 1 passed');
        bank.printAccount(1234567892);
    } else {
        console.log('Scenario 1 failed');
    }
}
catch(e) {
    console.log('Scenario 1 failed');
}

// Scenario 2: customer is unable to withdraw money from bank account because
// the bank account does not exist
let balance = 90;
try {
    balance = bank.withdraw(1299999990, 10);
    console.log('Scenario 2 failed');
}
catch(e) {
    if (balance === 90) {
        console.log('Scenario 2 passed');
        console.log(e.message);
    } else {
        console.log('Scenario 2 failed');
    }
}

// Scenario 3: customer is unable to withdraw money from their bank account because
// the indicated withdrawal amount is greater than their account balance
let balance2 = 90;
try {
    balance2 = bank.withdraw(1234567892, 1000000000);
    console.log('Scenario 3 failed');
}
catch(e) {
    if (balance2 === 90) {
        console.log('Scenario 3 passed');
        console.log(e.message);
    } else {
        console.log('Scenario 3 failed');
    }
}

// Scenario 4: customer is unable to withdraw money from their bank account because
// the indicated withdrawal amount is negative
let balance5 = 90;
try {
    balance5 = bank.withdraw(1234567892, -1);
    console.log('Scenario 4 failed');
}
catch(e) {
    if (balance5 === 90) {
        console.log('Scenario 4 passed');
        console.log(e.message);
    } else {
        console.log('Scenario 4 failed');
    }
}

// user story 4
console.log("------------------User Story 4------------------");

// Scenario 1: customer is able to check the balance of an account
try {
    const balance = bank.checkBalance(1234567892);
    console.log('Scenario 1 passed');
    console.log(`Balance: $%d`, balance);
}
catch(e) {
    console.log('Scenario 1 failed');
}

// Scenario 2: customer is unable to check the balance of a bank account because
// the bank account does not exist
try {
    bank.checkBalance(1299999990);
    console.log('Scenario 2 failed');
}
catch(e) {
    console.log('Scenario 2 passed');
    console.log(e.message);
}
