const fs = require('fs');

fs.writeFile('employees.json', '{"name": "Employee1 Name", "salary": 2000}', 'utf8', (err, data) => {
  if (err) console.log(err);
  console.log("added data in file")
})

fs.readFile('employees.json', 'utf8', (err, data) => {
  if (err) console.log(err);
  console.log(data)
})

fs.appendFile('employees.json', '\n{"name": "Employee1 Name", "salary": 5000}', 'utf8', (err) => {
  if (err) console.log(err);
  console.log("added file")
})

fs.unlink('employees.json', (err) => {
  if (err) console.log(err);
  console.log('json file deleted')
})