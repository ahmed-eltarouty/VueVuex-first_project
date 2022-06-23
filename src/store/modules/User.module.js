import axios from "axios"

export default{
    namespaced:true,
    state:{
        loading:false,
        users:[],
        errorMessage:null
    },
    mutations:{
        changeLoading:function(state){
            state.loading = true
        },
        theErrorMessage:function(state,payload){
            state.loading = false
            state.errorMessage=payload.err
        },
        theListOfUsers:function(state,payload){
            state.loading=false
            state.users = payload.users
        }
    },
    actions:{
        declareTheUsers:async function({commit}){
            try{
                commit('changeLoading')
                let userUrl= `https://jsonplaceholder.typicode.com/users`
                let response = await axios.get(userUrl)
                commit('theListOfUsers',{users:response.data})
            }catch(error){
                commit('theErrorMessage',{err:error})
            }
        }
    }
}