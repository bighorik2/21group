import React, { useState } from "react"
import  './style.css'
import { Input } from "shared/ui/Inputs";
import { DeviderHorizontal } from "shared/ui";
import { Button } from "shared/ui/buttons";
import { ProductCategoryPicker, ProductNameInput } from "features/product";

export const AddProductForm = () => {
    const [inputValue,setInputValue] = useState("");
  return (
    <form className={`add-product-form-wrapper`}>
      <ProductNameInput value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <ProductCategoryPicker/>
      <DeviderHorizontal/>
      <Button>Сохранить и продолжить</Button>
    </form>
  )
};
