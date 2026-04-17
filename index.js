function combineUsers(...arrays) {
  const users = arrays.flat();

  return {
    users,
    merge_date: new Date().toLocaleDateString("en-US")
  };
}

module.exports = { combineUsers };