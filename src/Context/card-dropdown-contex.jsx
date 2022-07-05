import { createContext, useState } from "react";

export const CardDropdownContext = createContext({
    cardStatus: false , 
    setCardStatus: (status) => !status
})


export const CardDropdownProvider = ({children}) => {
    const [cardStatus , setCardStatus] = useState(false)

    const value = { cardStatus , setCardStatus }

    return <CardDropdownContext.Provider value={value}>
        {children}
    </CardDropdownContext.Provider>
}