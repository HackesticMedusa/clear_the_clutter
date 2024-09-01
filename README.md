# Clear the Clutter

## Overview

"Clear the Clutter" is a Node.js script designed to organize files in a specified directory by grouping them into subdirectories based on their file extensions. This helps in maintaining a clean and organized file structure.

## Features

- Automatically reads the contents of a specified directory.
- Creates subdirectories for each file extension if they do not already exist.
- Moves files into their respective subdirectories based on their extensions.
- Provides console logs to indicate the progress and completion of the file organization process.

## Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/HackesticMedusa/clear_the_clutter.git
    cd clear_the_clutter
    ```

2. **Install dependencies:**

    This project does not have any external dependencies, so no need to run `npm install`.

## Usage

1. **Update the directory path:**

    Open `organizeFiles.cjs` and update the `directoryPath` variable to the path of the directory you want to organize.

    ```javascript
    const directoryPath = 'path_to_your_directory';
    ```

2. **Run the script:**

    ```sh
    node organizeFiles.cjs
    ```

3. **Output:**

    The script will log the progress of moving files to the console. For example:

    ```
    Moved file1.txt to txt/
    Moved image1.jpg to jpg/
    Files organized successfully.
    ```

## Code Explanation

The script is written in JavaScript and uses Node.js built-in modules `fs` and `path`.

- **Reading Directory:**

    ```javascript
    const files = await fs.promises.readdir(dirPath);
    ```

- **Checking File Type:**

    ```javascript
    const fileStat = await fs.promises.stat(filePath);
    if (fileStat.isFile()) {
        // Process file
    }
    ```

- **Creating Subdirectories:**

    ```javascript
    if (!fs.existsSync(extDir)) {
        await fs.promises.mkdir(extDir);
    }
    ```

- **Moving Files:**

    ```javascript
    await fs.promises.rename(filePath, newFilePath);
    ```

## Error Handling

The script includes a try-catch block to handle any errors that may occur during the file organization process. Errors will be logged to the console.

```javascript
catch (error) {
    console.error('Error organizing files:', error);
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

- Ankur Karmakar aka [HackesticMedusa](https://github.com/HackesticMedusa).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgements

- Node.js documentation for providing comprehensive guides and examples.