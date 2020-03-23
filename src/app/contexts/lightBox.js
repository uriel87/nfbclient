import React, { createContext } from 'react'


const editTaskContext = createContext({
    isOpen: false,
    setIsOpen: () => { return !this.isOpen }
})


export default {
    editTaskContext
}