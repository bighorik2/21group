import React, { useState } from "react"
import './style.css'
import addIcon from 'shared/assets/addIcon.svg'
import arrow from 'shared/assets/arrow.svg'
import closeIcon from 'shared/assets/closeIcon.svg'
import { useOutsideClick } from "shared/hooks/useOusideClick"
import nextArrow from 'shared/assets/nextArrow.svg'
import backArrow from 'shared/assets/backArrow.svg'
import { data } from "./testData/testData"

const getSubTree = (tree, knots) => {
    let res = tree;
    knots.forEach(e => {
        res = res.groups[e];
    })
    return res;
}


export const CategoryPicker = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [knots, setKnots] = useState([])
    const ref = useOutsideClick(() => setIsOpen(false))

    return (
        <div className={`category-picker`}>
            <label htmlFor='category-picker' className='label-passive'>Укажите, к какой категории принадлежит товар</label>
            <div className="category-picker__categories-wrapper" name="category-picker">
                <div className="category-picker__categories_item text-norm">
                    <span>Скобяные изделия</span>
                    <img src={arrow} />
                    <span>Крепеж</span>
                    <img src={arrow} />
                    <span>Саморез</span>
                    <button className="category-picker__categories_item_close"><img src={closeIcon} /></button>
                </div>
            </div>
            <div className="category-picker__add" ref={ref}>
                <div className={`category-picker__add_panel ${isOpen && "isOpen"}`} >
                    {getSubTree(data, knot)}
                    <div className="category-picker__add_panel_item--back text-small-passive">
                        <img src={backArrow}></img>
                        <span>Скобные изделия</span>
                    </div>
                    {getSubTree(data, knots).groups.map((e, i) => (
                        <div key={i} className="category-picker__add_panel_item text-small"
                            onClick={() => setKnots(prev => [...prev, i])}>
                            <span>{e.name}</span>
                            {e.groups.length > 0 && <img src={nextArrow}></img>}
                        </div>
                    ))}
                </div>
                <button className="category-picker__add_button" type="button"
                    onClick={() => { setIsOpen(prev => !prev) }}>
                    <img src={addIcon} />
                    <span className="text-norm">Добавить еще</span>
                </button>
            </div>
        </div>
    )
};
