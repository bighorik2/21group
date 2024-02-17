import nextArrow from '../assets/nextArrow.svg';

export const PanelItem = ({ text, withArrow, onClick }) => {
  return (
    <div className="category-picker__add_panel_item text-small"
      onClick={onClick}>
      <span>{text}</span>
      {withArrow && <img src={nextArrow}></img>}
    </div>
  )
};
