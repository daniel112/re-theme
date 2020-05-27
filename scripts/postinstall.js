const util = require('util')
const exec = util.promisify(require('child_process').exec)
const path = require('path')
const rootDir = path.join(__dirname, '../')


/**
 * Setup git assume-unchange on all items in a folder
 * @param {string} folderName - folder you want to set assume-unchange to
 */
const setupAssumeUnchange = async (folderName) => {
  console.log(`-----git update assume-unchange folder: ${folderName}-----`)
  try {
    await exec(`cd ${rootDir} && git update-index --assume-unchanged ${folderName}/*/*`)

  } catch (error) {
    console.log(error)
    console.log(`Try manually running 'git update-index --assume-unchanged ${folderName}/*/*'`)
  }
}

setupAssumeUnchange('build')

