import { createContext, useState, useEffect } from 'react'

import {getCategoriesAndDocuments} from '../utils/firebase.utils'


// import SHOP_DATA from '../shop-data.js'

export const CategoriesContext = createContext({
  categoriesMap: {}
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  // useEffect(async () => {
  //   const categoryMap = await getCategoriesAndDocuments('categories');
  //   console.log(categoryMap)
  // }, []);

  useEffect(() => {
    const getCategoryMap = async()=>{
      const categoryMap = await getCategoriesAndDocuments('categories')
      console.log(categoryMap)
      setCategoriesMap(categoryMap)
    }
    getCategoryMap()
  }, [])
  


  const value = { categoriesMap }
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
