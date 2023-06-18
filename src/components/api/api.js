import axios from "axios";


export const fetchData = async (setAccounts,setIsLoading ) => {
    axios.get('https://recruitmentdb-508d.restdb.io/rest/accounts' , {
            headers :{
                'x-apikey' : '5d9f48133cbe87164d4bb12c'
    }})
    .then((res) => {
        setAccounts(res.data)
        setIsLoading(false)
    })
    .catch((err) => {
        console.err(err)
    })
}

export const fetchAccountType = async (setAccountsType, setIsLoading) => {
        axios.get('https://recruitmentdb-508d.restdb.io/rest/accounttypes' , {
                headers :{
                    'x-apikey' : '5d9f48133cbe87164d4bb12c'
        }})
        .then((res) => {
            setAccountsType(res.data)
            setIsLoading(false)
        })
        .catch((err) => {
            console.err(err)
        })
}