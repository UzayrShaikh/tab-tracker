<template>
    <div>
        <h1>Login</h1> 
        <input v-model="email" type="email" placeholder="email" name='email'><br>
        <input v-model="password" type="password" placeholder="password" name='password'><br>
        <button @click="register">Register</button>
        
 
    </div>

</template>

<script>
 import AuthenticationService from '@/services/AuthenticationService'
export default {
    data(){
        return{
        email:'',
        password:''
        }
    },

     methods:{
         async register(){
             const response = await AuthenticationService.register({
                 email:this.email,
                 password:this.password
             })
             console.log(response.data)

         }
     }

}
</script>

<style>

</style>