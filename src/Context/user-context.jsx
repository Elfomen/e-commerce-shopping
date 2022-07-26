import { createContext, useEffect, useState } from 'react'
import { onAuthStateChangedListener } from '../utils/firebase/firebaseutils'


export const UserContext = createContext({
    currentUser: null , 
    setCurrentUser: () => null
})


export const UserProvider = ({children}) => {
    const [currentUser , setCurrentUser] = useState()
    const value = { currentUser , setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => { 
            setCurrentUser(user)
        })

        return unsubscribe
    } , [])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

































// import { createContext, useEffect, useState , useReducer } from 'react'
// import { INITIAL_STATE, USER_ACTION_TYPES } from '../constants/user_reducers_type'
// import { onAuthStateChangedListener } from '../utils/firebase/firebaseutils'


// export const UserContext = createContext({
//     currentUser: null , 
//     setCurrentUser: () => null
// })


// const userReducer = (state , action) => {

//     const {type , payload} = action
    
//     switch(type){
//         case USER_ACTION_TYPES.SET_CURRENT_USER:
//             return {
//                 ...state ,
//                 currentUser: payload
//             }
//         case USER_ACTION_TYPES.LOGOUT_USER:
//             return {
//                 currentUser: []
//             }
//         default:
//             throw new Error('Error,unhandled type ' , type , ' in user reducer')
//     }
    
    
//     return {
//         currentUser: payload
//     }
// }






// export const UserProvider = ({children}) => {

//     const [state , dispatch] = useReducer(userReducer , INITIAL_STATE)

//     const {currentUser} = state

//     // const [currentUser , setCurrentUser] = useState()
//     const value = { currentUser , setCurrentUser }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChangedListener((user) => { 
//             setCurrentUser(user)
//         })

//         return unsubscribe
//     } , [])

//     return (
//         <UserContext.Provider value={value}>
//             {children}
//         </UserContext.Provider>
//     )
// }