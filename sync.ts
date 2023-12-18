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
  execSync('cd .core git pull', { stdio: 'inherit' })

  // Move all files from .core to the root
  copyDirectory('.core', '.temp')

  // Remove specified directories and files
  removeDirectory('.temp/.git')
  removeDirectory('.temp/src/content')
  removeDirectory('.temp/src/assets')
  removeFile('.temp/cloudcannon.config.yml')

  // Move all files from .core to the root
  copyDirectory('.temp', '.')
} catch (error) {
  console.error(`An error occurred: ${error}`)
}
