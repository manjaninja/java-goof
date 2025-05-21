const fs = require('fs')
const utils = require('../utils/utils')
if (require.main !== module) {
} else {
  const {config, deps, targets} = utils.processArgs(process.argv)
  const folder = deps[0]
  if (fs.existsSync(`${folder}/kitnic.yaml`)) {
  } else if (fs.existsSync(`${folder}/kitspace.yaml`)) {
  } else if (fs.existsSync(`${folder}/kitspace.yml`)) {
    file = fs.readFileSync(`${folder}/kitspace.yml`)
  }
}