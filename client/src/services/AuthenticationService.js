import Api from '@/services/Api' // an api object which when called brings in the axios.create part

export default{
    register(credentials){
        return Api().post('register',credentials)
    }
}