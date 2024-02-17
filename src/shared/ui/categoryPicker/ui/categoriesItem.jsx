import arrow from '../assets/arrow.svg';
import closeIcon from '../assets/closeIcon.svg';

export const CategoriesItem = ({ brunchKnots, onClose }) => {
  return (
    <div className="category-picker__categories_item text-norm">
      {brunchKnots.map((e, i) => (
        <div key={i} className='category-picker__categories_item_point'>
          <span >{e.name}</span>
          <img src={arrow} />
        </div>
      ))}
      <button type='button' className="category-picker__categories_item_close"
        onClick={onClose}><img src={closeIcon} /></button>
    </div>
  )
};
