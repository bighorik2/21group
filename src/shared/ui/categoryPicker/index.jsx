import './style.css'

import { getBrunchKnots, getSubTree, getUniqueOptions, selectAllBrunches } from './lib/treeActions'
import { useMemo, useState } from 'react'

import { AddButton } from './ui/addButton'
import { CategoriesItem } from './ui/categoriesItem'
import { Panel } from './ui/panel'
import { useOutsideClick } from "shared/hooks/useOusideClick"

export const CategoryPicker = ({ title, categoryTree, selectedKnots, onChange }) => {
    const [state, setState] = useState({ isOpen: false, currentKnots: [] })
    const ref = useOutsideClick(() => setState(prev => ({ ...prev, isOpen: false })));
    let currentGroup = useMemo(() => getSubTree(categoryTree, state.currentKnots, selectedKnots)
        , [categoryTree, state.currentKnots, selectedKnots]);

    const Category_onClick = (element, index) => {
        if (element.groups.length !== 0) {
            setState(prev => ({ ...prev, currentKnots: [...prev.currentKnots, index] }))
        }
        else {
            onChange([...selectedKnots, ([...state.currentKnots, index])],)
            setState({ currentKnots: [], isOpen: false })
        }
    }

    const AllCategories_onClick = () => {
        setState({ currentKnots: [], isOpen: false })
        onChange(getUniqueOptions([...selectedKnots, ...selectAllBrunches(categoryTree, state.currentKnots)]))
    }

    return (
        <div className={`category-picker`}>
            <label htmlFor='category-picker' className='label-passive'>{title}</label>
            <div className="category-picker__categories-wrapper" name="category-picker">
                {selectedKnots.map((e, i) => {
                    return <CategoriesItem
                        key={i}
                        brunchKnots={getBrunchKnots(categoryTree, e)}
                        onClose={() => {
                            let temp = selectedKnots.slice();
                            temp.splice(i, 1);
                            onChange(temp)
                        }} />
                })}
            </div>
            <div className="category-picker__add" ref={ref}>
                <Panel
                    currentGroup={currentGroup}
                    isOpen={state.isOpen}
                    back_onClick={() => setState(prev => {
                        let temp = prev.currentKnots.slice();
                        temp.pop();
                        return { ...prev, currentKnots: temp }
                    })}
                    all_onClick={AllCategories_onClick}
                    item_onClick={(e, i) => Category_onClick(e, i)}
                />
                <AddButton onClick={() => { setState(prev => ({ ...prev, isOpen: !prev.isOpen })) }} />
            </div>
        </div>
    )
};
