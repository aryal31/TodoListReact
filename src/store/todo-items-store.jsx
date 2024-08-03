import { createContext } from "react"


export const TodoItemsContext = createContext({itemList:[], addNewItem:()=>{}, deleteItem:()=>{}});