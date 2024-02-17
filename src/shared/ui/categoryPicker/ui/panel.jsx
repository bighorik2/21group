import { PanelItem } from "./panelItem";
import React from "react";
import backArrow from '../assets/backArrow.svg';

export const Panel = ({ isOpen, currentGroup, back_onClick, all_onClick, item_onClick }) => {
  return (
    <div className={`category-picker__add_panel ${isOpen && "isOpen"}`} >
      {currentGroup.name &&
        <div className="category-picker__add_panel_item--back text-small-passive"
          onClick={back_onClick}>
          <img src={backArrow}></img>
          <span>{currentGroup.name}</span>
        </div>
      }
      {currentGroup.groups.length !== 0 && currentGroup.name &&
        <PanelItem text={`Все ${currentGroup.name.toLowerCase()}`} onClick={all_onClick} />
      }
      {currentGroup.groups.length !== 0 ? currentGroup.groups.map((e, i) => (
        <React.Fragment key={i}>
          {e !== null &&
            <PanelItem text={e.name} onClick={() => item_onClick(e, i)} withArrow={e.groups.length > 0} />
          }
        </React.Fragment>
      ))
        : <div className="category-picker__add_panel_no-items text-norm">Нет категорий</div>}
    </div>
  )
};
