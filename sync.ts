import { execSync } from 'child_process'
import fs from 'fs'

function removeDirectory(directory: string) {
  if (fs.existsSync(directory)) {
    fs.rmSync(directory, { recursive: true, force: true })
  }
}

function removeFile(filePath: string) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath)
  }
}

function copyDirectory(sourceDir: string, destDir: string) {
  fs.cpSync(sourceDir, destDir, { recursive: true })
}

function directoryExists(directory: string) {
  return fs.existsSync(directory)
}

try {
  // Clone core if it doesn't exist
  if (!directoryExists('core')) {
    execSync('git clone https://github.com/silveltman/core.git core', {
      stdio: 'inherit',
    })
  } else {
    // Pull latest changes from core
    execSync('cd core git pull', { stdio: 'inherit' })
  }

  // Move all files from core to the root
  copyDirectory('core', '.temp')

  // Remove specified directories and files
  removeDirectory('.temp/.git')
  removeDirectory('.temp/src/content')
  removeDirectory('.temp/src/assets')
  removeFile('.temp/cloudcannon.config.yml')

  // Move all files from core to the root
  copyDirectory('.temp', '.')

  // Remove temporary directory
  removeDirectory('.temp')
} catch (error) {
  console.error(`An error occurred: ${error}`)
}
