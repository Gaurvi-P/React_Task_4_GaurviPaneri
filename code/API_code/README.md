# Task-4 API
## Description
This application fetches data from a public API and displays all the records in a structured format.

## Features
- Fetches data from the public API (https://jsonplaceholder.typicode.com/posts)
- Displays all data in sequential order

## Technologies Used
- API: Sample public API from JSONPlaceholder
- React + Vite: For fast development and easy application setup

## Folder Structure
src/
│── main.jsx               # App entry point
│── App.jsx                # Routes setup
│── components
|   └── PostData.jsx   # holds the logic to fetch and display data from public API

## Installation and Set-Up 
Open the terminal in VS Code and follow the steps:
1. Clone repository
    git clone https://github.com/GaurviP/React_Task_4_GaurviPaneri.git
    cd React_Task_4_GaurviPaneri
2. Install Dependencies
    npm install
3. Run the development Server
    npm run dev

The app will run at: http://localhost:5173


## Working 
1. This component uses the useEffect hook to fetch data from the public API https://jsonplaceholder. typicode.com/posts when the component mounts.
2. Initially, a loading message is displayed while the data is being fetched. Once the API responds, the retrieved list of posts is stored in the posts state using useState.
3. Each post is then rendered inside a styled <div> with its id, title, and body. 
4. If the fetch fails, an error is logged to the console.


