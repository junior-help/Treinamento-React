// import axios from "axios";
// import Dashboard from "../views/Dashboard";

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

    let dados = Dados();
    let res = []

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].email == email) {
            res.push({
                status: 200,
                email: dados[i].email
            })
            break;
        }
    }
}



export function Dados() {
    return [
        {
            id: 1,
            name: 'Matheus',
            email: 'matheus@gmail.com',
            senha: '1234'
        },
        {
            id: 2,
            name: 'JR',
            email: 'jr@gmail.com',
            senha: '12345'
        },
        {
            id: 3,
            name: 'Vitor',
            email: 'vitor@gmail',
            senha: '123456'
        }
    ]
}