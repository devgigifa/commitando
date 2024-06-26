function criaLogin() {
    if (localStorage.usrArr) {
        usr = JSON.parse(localStorage.getItem('usrArr'));
    }
    if (localStorage.snhArr) {
        snh = JSON.parse(localStorage.getItem('snhArr'));
    }
    let novoUsr = prompt('Login:');
    usr.push(novoUsr);
    localStorage.usrArr = JSON.stringify(usr);

    let novaSnh = prompt('Senha:');
    snh.push(novaSnh);
    localStorage.snhArr = JSON.stringify(snh);
    if (usr.includes(novoUsr) && snh.includes(novaSnh)) {
        alert('Login criado com sucesso!');
    } else {
        alert('Login já criado!');
    }
}

function abreTelaLogin() {

    if (localStorage.usrArr) {
        usr = JSON.parse(localStorage.getItem('usrArr'));
    }
    if (localStorage.snhArr) {
        snh = JSON.parse(localStorage.getItem('snhArr'));
    }
    login = prompt('Login:');
    senha = prompt('Senha:');

    let indUsr = usr.indexOf(login);
    if (usr[indUsr] == login && snh[indUsr] == senha) {
        document.querySelector('#log').innerHTML = `Bem vindo, ${login}`;
    } else {
        alert('Usuário ou senha incorreto!')
    }
}
