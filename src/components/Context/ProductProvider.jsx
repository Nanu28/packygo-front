import { useEffect, useState } from "react"
import { ProductContext } from "./ProductContext.jsx"
import { useForm } from "../../../hooks/useForm.js"

const  ProductProvider = ({children}) => {

    const [allProduct, setAllProduct] = useState([]) 
    //console.log(allProduct)
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)
    

    const {valueSearch, onInputChange, onResetForm} = useForm({
        valueSearch: ''
    })


    


    //Lamar a los productos
    const getProducAll = async () => {
        const url = 'http://localhost:8000/products'
        const res = await fetch(`${url}`)
        const data = await res.json()

        setAllProduct(data.products)
        setLoading(false)
       
    }

    //Lamar al producto por su ID

    const getProductById = async _id => {
        const url = 'http://localhost:8000/'
        const res = await fetch(`${url}details/:{_id}`)
        const data = await res.json()
        console.log(data)
        return data


    }

    useEffect(() => {

        getProducAll()

    },[])

    const [typeSelected, setTypeSelected] = useState({
		accesories: false,
		waistpacks: false,
		pets: false,
		backpacks: false,
		suitcases: false,
		
	});

    //Filter + state

    const [filteredProduct, setFilteredProduct] = useState([])

    const handleCheckbox = e => {
        setTypeSelected({
          ...typeSelected,
          [e.target.name]: e.target.checked,
        });
      
        if (e.target.checked) {
          const filteredResults = allProduct.filter(product =>
            product.category === e.target.name
          );
          setFilteredProduct(filteredResults);
        } else {
          const filteredResults = filteredProduct.filter(product =>
            product.category !== e.target.name
          );
          setFilteredProduct(filteredResults);
        }
      };
      

      
      
      
  return (
    <ProductContext.Provider value={{

            valueSearch, 
            onInputChange,
            onResetForm,
            allProduct,
            getProductById,
            loading,
            setLoading,
            setActive,
            active,
            handleCheckbox,
            filteredProduct


        }}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider