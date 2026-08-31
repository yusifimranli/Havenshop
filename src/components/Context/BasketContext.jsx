import React, { createContext, useState } from 'react'

export const BASKET = createContext()
function BasketContext({children}) {
    const [basket,setBasket] = useState([])

    function addBasket(item,quantity,selectedsize){  
        const exist = basket.find((product)=>product.id === item.id) 
        if(exist){
            setBasket(
                basket.map((product)=>{
                    if(product.id ===item.id){
                        return {
                            ...product,quantity: quantity,price:item.price,selectedsize:selectedsize
                        }
                    }
                    return product
                })
            )
        }
        else{
            if (quantity === 0) return
        setBasket([...basket, {...item,quantity: quantity,selectedsize:selectedsize}])
    }
    }   
    function removeBasket(id) {
        const newBasket = basket.filter((item) => item.id !== id)
        setBasket(newBasket)
        }
    
    function decrease(id) {
        setBasket(
            basket.map((item) => {
            if (item.id === id) {
                return {
                ...item,
                quantity: item.quantity - 1 
                }
            }

            return item
            })
            .filter((item)=>item.quantity>0)
        )
        }
    function increase(id) {
        setBasket(
            basket.map((item) => {
            if (item.id === id) {
                return {
                ...item,
                quantity: item.quantity + 1
                }
            }

            return item
            })
        )
        }
    function clearBasket() {
    setBasket([])
    }
    return (
    <>
    <BASKET.Provider value={{ basket, addBasket,removeBasket,increase,decrease,clearBasket }}>
        {children}
    </BASKET.Provider>
    </>
  )
}

export default BasketContext
