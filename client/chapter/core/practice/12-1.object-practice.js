let user = {
  name: 'John',
  surname: 'Smith',
};
user.name = 'pete';
delete user.name;

/* -------------------------------------------------------------------------- */

function isEmpty(obj) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}

/* -------------------------------------------------------------------------- */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
console.log(Object.values(salaries).reduce((acc, cur) => acc + cur, 0));

/* -------------------------------------------------------------------------- */

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(obj) {
  for (const [key, val] of Object.entries(obj)) {
    if (
      Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase() ===
      'number'
    ) {
      obj[key] = 2 * val;
    }
  }
}

multiplyNumeric(menu);
