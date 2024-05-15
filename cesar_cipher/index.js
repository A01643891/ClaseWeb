const readlineSync = require('readline-sync');
const fs = require('fs');
const path = require('path');

function cesarCipher(str, idx){
    let result = '';
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(let letter of str){
        let index = alphabet.indexOf(letter);
        letter = letter.toLowerCase();
        if(index != -1){
            let newIndex = (index + idx) % 26;
            let newLetter = alphabet[newIndex];
            result += newLetter;
        }
    }
    return result;
}

function registerUser(){
    let username = readlineSync.question("Enter your name: ");
    let password = readlineSync.question("Enter your password: ");

    let passwordCifrado = cesarCipher(password, 5);

    addUser(username, passwordCifrado);

    console.log('Welcome ' + username);
}

function addUser(userName, password){
    const filePath = path.join(__dirname, 'users.json');
    let users = [];
    fs.readFile(filePath, (err, data) => {
        if(err){
            console.log("Error reading file");
        }else{
            users = JSON.parse(data);
        }

        users.push({userName, password});
        fs.writeFile(filePath, JSON.stringify(users), (err) => {
            if(err){
                console.log("Error adding user");
            }else{
                console.log('User added');
            }
        })
    })
}

function login(){
    let username = readlineSync.question("Enter your name: ");
    let password = readlineSync.question("Enter your password: ");

    const filePath = path.join(__dirname, 'users.json');
    fs.readFile(filePath, (err, data) =>{
        if(err){
            console.log("Error reading file");
        }else{
            for( let user of JSON.parse(data)){
                if(user.userName == username && 
                user.password == cesarCipher(password, 5)){
                    console.log('Welcome ', username);
                    return;
                }                
            }
            console.log('Wrong user or password');
        }
    })
}

function menu(){
    let opc = readlineSync.question("Welcome to the system, what would you like to do? \n 1. Create user \n 2. Login \n");

    if(opc == '1'){
        registerUser();
    }else if(opc == '2'){
        login();
    }else{
        console.log("Invalid Option");
    }
}

menu();