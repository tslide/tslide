

var sections = 
module.exports = function (text) {

  var sections = [], section
  function add () {
    if(section) 
      sections.push(section.join('\n'))    
  }
  text.split('\n').forEach(function (line) {
    if(/^#/.test(line)) { // new section
      add()
      section = []
    }
    section.push(line)
  })

  //add the last section
  add()

  return sections
}
//quick test
if(!module.parent) {
  console.log(
    sections(
      require('fs').readFileSync(__dirname+'/README.md', 'utf-8')
    )
  )
}

