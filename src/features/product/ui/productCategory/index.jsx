import { CategoryPicker } from 'shared/ui/categoryPicker';
import  './style.css'

export const ProductCategoryPicker = () => {
  return (
    <div className={`product-category-picker`}>
      <h2 className={`title-normal`}>Категория</h2>
     <CategoryPicker/>
    </div>
  )
};
