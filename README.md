# notes-app
A CLI tool to take and manage notes, made using Node.js.

npm packages used - 
  - [yargs](https://www.npmjs.com/package/yargs)
  - [chalk](https://www.npmjs.com/package/chalk)
 
### How to use the tool - 

#### **Prerequisites:** Install ```Node.js``` and then use NPM to install and configure ```yargs``` and ```chalk``` packages.

1. Clone the repository.
2. Open the terminal and relocate to the directory where the repository was cloned to.
3. Run the command ```node app.js```.

4. **To add a new note** - ``` node app.js add --title="<enter-note-title-here>" --body="<enter-note-body>" ```

5. **To remove a note** - ``` node app.js remove --title="<enter-note-title-here>" ```

6. **To list all notes** - ``` node app.js list ```

7. **To read a note** - ``` node app.js read --title="<enter-note-title>" ```
