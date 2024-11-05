# Getting Started

TaskGraph is designed to be used by developers, researchers and hackers.
Some basic knowledge about programming is required to deploy and use the software.

::: warning
TaskGraph is still in early prototyping stage.
The documentation may be inaccurate,
and expect sharp edges when upgrading and migrating between versions.
The software is mainly for technical preview for now.
Be careful to put it into production.
:::

For a quick start, you can deploy both the frontend and the backend application locally.

## Local Backend API Server

The backend program is purely written with python, and should work for most
standard python builds (required version >3.10).

The first step is to setup the environment.
Install the following dependencies to your python virtual environment via pip or conda:

    networkx[all]
    fastapi[all]
    python-jose[cryptography]
    passlib[bcrypt]

Then clone the repo and enter the directory

    $ git clone https://github.com/5A/taskgraph
    $ cd taskgraph

After the repo is cloned, navigate to `/backend` directory to set up authentication information.
In the `/backend` directory, duplicate `server.default.config.json` and name the copy as `server.config.json`.
Then open the json file, and in the `auth` - `jwt` - `secret` field, insert your own secret key.
The secret key should be generated via safe methods.
For example, you can generate the key by running the following command on a trusted computer:

    $ openssl rand -hex 32

The generated key will look like `68b90e6f46e3509ffae879b24bd9a3fed14c51a156eed73c9306eb45455b244b`.

The next step is to register a user for yourself.
Also in the `/backend` directory, run the register user script with

    $ python register.py

to add a new user for the backend API server.
Follow the instructions prompted by the script.

Finally, go back to the root directory of this project, and run

    $ uvicorn backend.main:app --log-config logging_helper/uvicorn_log.config.yaml

This should give you a local backend API server at http://localhost:8000/

## Local Frontend Preview Server

The frontend application is written with vue3.
First, clone the repo

    $ git clone https://github.com/5A/taskgraph-vue-antd
    $ cd taskgraph-vue-antd

Inside the repo root directory, start the dev server by

    $ npm run dev

Then, go to http://localhost:8080 to access the web GUI.

## Basic Usage

In the web GUI, go to TaskGraph - Workbench - Connection,
fill in RESTful API Origin information as `http://`, `localhost`, `8000`,
and the API Endpoint is `/`.

Click on Test to check if the backend server can be accessed.

Then, go to TaskGraph - Workbench - Authentication,
fill in the username and password previously used to register at the backend server.
Click on Request New Token to get a new token from API server.
The token expires after a configured time (default to 1 week),
if the token expires, you need to go back here to request a new one.

If Token Status shows Validated, you can start to use the application.

### Creating and Deleting Projects

To create a project, go to Project - Manage, Click on New to start a new project.
The new project can be accessed in the left sidebar, in the Projects section.
To delete a project, click on the project name in the left sidebar to navigate to the project,
scroll down to the bottom of the page, and click on Delete to delete the selected project.

### Tasks

All newly created tasks automatically comes with a root task called `Finish`.
The root tasks represents the finish of the project.

Most of the times, a task can break down into multiple sub-tasks.
To create a sub-task for a task, select the task in the DAG View,
fill in new task details in the Task Toolbox, select Sub-task and click on Add/Modify Task.

Similarly, if extra work is needed after finishing a task,
you can add a super-task for a task, which only becomes active after finishing of the current task.

In a lot of situations, a task will depend on another task.
For example, firmware development typically comes after hardware layout,
and testing typically comes after developing.
In such cases, you can select a task in the DAG View,
and add another task as its dependency.

### Task Detail View and Issues

When a task is selected in the DAG View, you can check the task details in the area below the DAG View.

You can also edit the task title and details in the area.
Both plain text and Markdown are supported for viewing task detail.

If the task is done, you can click on Done to mark it as done.
If the task cannot be worked on immediately,
typically because of waiting for some external event,
such as PCBA delivery,
you can click on Snooze to set a date to do it later.

To help you organize your thoughts, you can breakdown each task into small steps,
and put the steps in the Issues panel.
The Issues panel is a very light weight version of traditional todo-list,
and is intended to be used for quick and small tasks.
