# Todoist Completed Tasks Viewer

This project is a small web application that allows users to view tasks they have completed today in Todoist. It utilizes the Todoist API to fetch completed tasks and displays them in a user-friendly interface.

## Features

- OAuth authentication with Todoist. (Using [this](https://github.com/LGray401/stats_for_todoist_faas) Azure Function)
- Display a list of tasks completed today.
- Filter tasks by project.
- Exclude tasks tagged with `@no_track` from the display.


## Usage

You can use the application [here](https://lgray401.github.io/stats_for_todoist/) (hosted on Github Pages), where you will be prompted to authorize with Todoist. After authorization, the application will display the tasks you have completed today. You can filter these tasks by project using the project selector dropdown.

## License
This project is licensed under the MIT License