const { copy, remove } = require('./copyRemove')
const path = require('path')

;(() => {

  try {

    // Path to parent re-theme build
    const build = path.join(__dirname, '../../build')

    // Path to app node_modules build
    const nmBuild = path.join(__dirname, '../node_modules/re-theme/build')

    // Remove the old build in the apps node_modules
    remove(nmBuild)

    // Copy over the new build from the parent folder
    copy(build, nmBuild)

  }
  catch(err){
    console.error(err.stack)
    process.exit(1)
  }

})()
