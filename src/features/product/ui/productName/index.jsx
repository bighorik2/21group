import  './style.css'
import { Input } from "shared/ui";

export const ProductNameInput = ({value,onChange}) => (
    <div className={`product-name-input`}>
      <h2 className={`title-normal`}>Информация о товаре</h2>
      <Input value={value} onChange={onChange} title="Название товара"/>
    </div>
  )

