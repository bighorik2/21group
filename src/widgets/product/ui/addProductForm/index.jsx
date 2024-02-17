import './style.css';

import { Button, DeviderHorizontal } from "shared/ui";
import { ProductCategoryPicker, ProductNameInput } from "features/product";

import { data } from "./testData/testData";
import { getGroupIds } from './lib/treeActions';
import { useState } from "react";

export const AddProductForm = () => {
  const [state, setState] = useState({ inputValue: "", selectedKnots: [] });

  return (
    <form className={`add-product-form-wrapper`}>
      <ProductNameInput value={state.inputValue} onChange={(e) => setState(prev => ({ ...prev, inputValue: e.target.value }))} />
      <ProductCategoryPicker categoryTree={data} onChange={(e) => setState(prev => ({ ...prev, selectedKnots: e }))} />
      <DeviderHorizontal />
      <Button type="button" onClick={() => { console.log(getGroupIds(data, state.selectedKnots)) }}>Сохранить и продолжить</Button>
    </form>
  )
};
