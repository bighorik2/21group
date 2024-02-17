import './style.css';

import { CategoryPicker } from 'shared/ui';
import { useState } from 'react';

export const ProductCategoryPicker = ({ categoryTree, onChange }) => {
  const [selectedKnots, setSelectedKnots] = useState([])
  return (
    <div className={`product-category-picker`}>
      <h2 className={`title-normal`}>Категория</h2>
      <CategoryPicker
        categoryTree={categoryTree}
        selectedKnots={selectedKnots}
        title={"Укажите, к какой категории принадлежит товар"}
        onChange={(e) => { setSelectedKnots(e); onChange(e) }} />
    </div>
  )
};
