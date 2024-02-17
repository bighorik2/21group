import addIcon from '../assets/addIcon.svg';

export const AddButton = ({ onClick }) => {
  return (
    <button className="category-picker__add_button " type="button"
      onClick={onClick}>
      <img src={addIcon} />
      <span className="text-norm">Добавить еще</span>
    </button>
  )
};
