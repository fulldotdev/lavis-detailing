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

try {
  // Clone core
  execSync('git clone https://github.com/silveltman/core.git .core', {
    stdio: 'inherit',
  })

  // Remove specified directories and files
  removeDirectory('.core/.git')
  removeDirectory('.core/src/content')
  removeDirectory('.core/src/assets')
  removeFile('.core/cloudcannon.config.yml')

  // Move all files from core to the root
  copyDirectory('.core', '.')

  // Remove core directory
  removeDirectory('.core')
} catch (error) {
  console.error(`An error occurred: ${error}`)
}
