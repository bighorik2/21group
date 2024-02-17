export const getGroupIds = (tree, knots) => {
  let res = [];
  knots.forEach(e => {
    let subTree = tree;
    e.forEach(el => {
      subTree = subTree.groups[el]; res.push(subTree.id)
    })
  })
  return res;
}