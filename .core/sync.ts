import { execSync } from 'child_process'
import fs from 'fs'

function removeDirectory(directory) {
  if (fs.existsSync(directory)) {
    fs.rmSync(directory, { recursive: true, force: true })
  }
}

function removeFile(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath)
  }
}

function copyDirectory(sourceDir, destDir) {
  fs.cpSync(sourceDir, destDir, { recursive: true })
}

try {
  // Pull latest changes from core
  execSync(
    'git subtree add --prefix .core https://github.com/silveltman/core.git main',
    { stdio: 'inherit' }
  )

  // Remove specified directories and files
  removeDirectory('.core/src/content')
  removeDirectory('.core/src/assets')
  removeFile('.core/cloudcannon.config.yml')

  // Move all files from .core to the root
  copyDirectory('.core', '.')

  // Remove .core directory
  removeDirectory('.core')
} catch (error) {
  console.error(`An error occurred: ${error}`)
}
