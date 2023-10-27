// TODO: Import your Header, TaskList, and TaskListItem
const { Header, TaskList, TaskListItem } = require("./component.js");


function createDocument(title, tasks = []) {
  // TODO: Create a new Header
  const header = new Header ();
  // TODO: Create new TaskListItems from the provided tasks
  const taskListitem = tasks.map ((task) => new TaskListItem([task.text],task.priority));
  // TODO: Add TaskListItems to a new TaskList
  const taskList = new TaskList(taskListitem);
  
  // TODO: Modify the template below to include your title, Header, and TaskList
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div class="card">
      ${header.render()}
      ${taskList.render()}
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
