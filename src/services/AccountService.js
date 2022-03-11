import axios from 'axios'

const AccountRestApiUrl = 'http://localhost:8080/api/v1/account';

class AccountService
{
    GetAccounts()
    {
        axios.get(AccountRestApiUrl);
    }
}

export default new AccountService();