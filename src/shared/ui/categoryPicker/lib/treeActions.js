export const getSubTree = (tree, currentKnots, selectedKnots) => {
  let subtree = structuredClone(tree);
  selectedKnots.forEach(e => {
    if (e.toString().startsWith(currentKnots.toString())) {
      subtree.groups = removeSelectedBrunches(subtree.groups, e)
    }
  })
  return getGroupByKnots(subtree, currentKnots)
}
//{groups: Array(2)}groups: (2) [{…}, {…}]0: {id: 1, name: 'Скобяные изделия', groups: Array(2)}1: {id: 6, name: 'Напольные покрытия', groups: Array(0)}length: 2[[Prototype]]: Array(0)[[Prototype]]: Object [0] (3) [Array(3), Array(3), Array(2)]

const removeSelectedBrunches = (tree, compBrunch, depth = 0) => {
  let ids = [];
  tree.forEach((e, i) => {
    if (e === null) return;
    if (e.groups.length === 0) {
      if (compBrunch[depth] === i) ids.push(i);
    }
    else {
      e.groups = removeSelectedBrunches(e.groups, compBrunch, depth + 1).slice();
      if (e.groups.every(e => e === null) && compBrunch[depth] === i)
        ids.push(i);
    }
  })
  for (let index = ids.length - 1; index >= 0; index--)
    tree[ids[index]] = null;
  if (tree.every(e => e === null)) return []
  return tree;
}

const getGroupByKnots = (tree, knots) => {
  let res = structuredClone(Array.isArray(tree) ? { groups: tree } : tree);
  knots.forEach(e => { res = res.groups[e]; })
  return res;
}

export const selectAllBrunches = (tree, knots) => {
  let res = [];
  let currentKnot = getGroupByKnots(tree, knots);
  const selectAllSubBrunches = (currentKnot, resultAdd) => {
    currentKnot.forEach((e, i) => selectAllSubBrunches(e.groups, [...resultAdd, i]))
    if (currentKnot.length === 0) res.push(resultAdd)
  }
  selectAllSubBrunches(currentKnot.groups, knots);
  return res;
}

export const getBrunchKnots = (tree, knots) => {
  let res = [];
  knots.forEach(e => { tree = tree.groups[e]; res.push({ ...tree, groups: [] }) })
  return res;
}


export const getUniqueOptions = (options) => {
  return options.reduce(
    (res, cur) =>
      res.find((find) => JSON.stringify(find) === JSON.stringify(cur))
        ? res
        : [...res, cur],
    []
  ).sort((a, b) => a - b);
};