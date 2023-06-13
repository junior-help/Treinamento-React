// import axios from "axios";
// import Dashboard from "../views/Dashboard";
import DB from "../model/DB";

export default function LoginAPI(email: string, password: string) {
    // let dados = {
    //     email: email,
    //     password: password
    // }

    //     axios.post('localhost/api/login', dados)
    //         .then(function () {
    //             alert('Success');
    //         })
    //         .catch(function (error) {
    //             alert('Error')
    //             console.log(error);
    //             Dashboard({})
    //         });
    // }

    let dados = DB();
    let res = false

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].email == email) {
            if (dados[i].senha == password) {
                window.localStorage.setItem('id', dados[i].id)
                res = true
                break;
            }else{
                alert('Senha Incorreta')
            }
        }
    }

    if (res) {
        window.location.href = '/dashboard'
    } else {
        alert('Email não existe')
    }
}