# Task Tracker

A simple Task Tracker app built with React 18 that allows users to add new tasks, mark them as complete, or delete them. Completed tasks are moved to the end of the list with a strike through effect.

## Project URL

[Task Tracker - Live Project](https://roadmap.sh/projects/task-tracker-js)

## Demo

![Task Tracker ](../Task-Tracker_React_JS//Mockup%20Image/task-tracker-2diba.png)

## Features

- Add new tasks
- Mark tasks as complete (moves to the end with a strikethrough)
- Unmark completed tasks (returns them to the pending list)
- Delete tasks
- Store tasks in an array with properties like `description` and `completed` status
- Re-render tasks dynamically with React when tasks are updated

## Project Structure

```
task-tracker/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Task.js          # Renders individual tasks
│   │   ├── TaskInput.js     # Input field for adding new tasks
│   │   └── TaskList.js      # List component that renders all tasks
│   ├── App.js               # Main app component, holds state and logic
│   ├── App.css              # Global styles
│   └── index.js             # Entry point
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

# Installation
- Follow these steps to set up and run the project locally:

## Prerequisites
- Node.js and npm installed on your machine

# Steps
- Clone the repository:

```
- git clone https://github.com/aviralSri23455/Task-Tracker_React_JS.git
- cd task-tracker-js

```

# Install dependencies:

- npm install

# Start the application:

- npm start

# Open the app in your browser at http://localhost:yourlocalhost.

# Usage

- Type in a task description and press "Enter" to add a new task.
- Click on the checkbox to mark a task as complete (this moves it to the bottom with a strikethrough).
- Click the trash icon next to a task to delete it.
- Uncheck a completed task to move it back to the pending list.

# Technologies Used
- React 18
- JavaScript
- CSS