const { spawn } = require('child_process');

/**
 * 
 * @param {string} scriptPath 
 * @param {array} args 
 * @returns A promise of the stdout and stderr from calling the python pdf package.
 * For the sake of this excercise the python packages will simply return a stdout representation of the action being called.
 * If the action was unsucessful it will return 'Invalid argument' as the stdout
 */
async function runPythonScript(scriptPath, args) {

  return new Promise((resolve, reject) => {
    // If this throws an error on your machine then you might not have python installed,
    // or you might have it setup as 'python' not 'python3'
    // If this is throwing errors the first thing to try is swapping the pythonProcess lines
    // If you are unable to get it working you can simply mock the call to start the python process
    

    // const pythonProcess = spawn('python', [scriptPath, ...args]);
    const pythonProcess = spawn('python3', [scriptPath, ...args]);
    let stdoutData = '';
    let stderrData = '';

    pythonProcess.stdout.on('data', (data) => {
      stdoutData += data.toString();
      console.info('stdout data', data.toString());
    });

    pythonProcess.stderr.on('data', (data) => {
      stderrData += data.toString();
      console.info('stdout error', data.toString());
    });

    pythonProcess.on('close', (code) => {
      if (code === 0) {
        resolve({ stdout: stdoutData, stderr: stderrData });
      } else {
        reject(new Error(`Python script execution failed with code ${code}`));
      }
    });
  });
}

export { runPythonScript };
