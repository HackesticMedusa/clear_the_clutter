const fs = require('fs');
const path = require('path');

// Directory to be organized
const directoryPath = 'path_to_your_directory';

// Function to organize files
async function organizeFiles(dirPath) {
    try {
        // Read the contents of the directory
        const files = await fs.promises.readdir(dirPath);

        for (const file of files) {
            const filePath = path.join(dirPath, file);
            const fileStat = await fs.promises.stat(filePath);

            // Check if it's a file
            if (fileStat.isFile()) {
                const ext = path.extname(file).slice(1); // Get the file extension without the dot

                if (ext) {
                    const extDir = path.join(dirPath, ext);

                    // Create a directory for the extension if it doesn't exist
                    if (!fs.existsSync(extDir)) {
                        await fs.promises.mkdir(extDir);
                    }

                    // Move the file to the appropriate directory
                    const newFilePath = path.join(extDir, file);
                    await fs.promises.rename(filePath, newFilePath);
                    console.log(`Moved ${file} to ${ext}/`);
                }
            }
        }
        console.log('Files organized successfully.');
    } catch (error) {
        console.error('Error organizing files:', error);
    }
}

// Run the function
organizeFiles(directoryPath);