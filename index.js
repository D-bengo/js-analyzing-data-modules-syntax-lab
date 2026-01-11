require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  }

  //Merging arrays together into the users attribute of combinedObject using spread operator
  for(let eachArray of args) {
    combinedObject.users.push(...eachArray)
  }

  //Adding date to cobined Oject
  combinedObject.merge_date = new Date().toString("M/d/yyyy")

  //Return Combined Object
  return combinedObject

}

const result = combineUsers(
    ["Dennis", "Mary"],
    ["John"],
    ["Alice", "Brian"]
);

console.log(result);


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};