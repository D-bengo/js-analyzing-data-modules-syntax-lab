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


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};