#  Bot Battlr

**Bot Battlr** is a single-page React application that allows users to browse, manage, and build a custom team of battle-ready bots. It showcases skills in components, props, state, events, and data fetching using a local backend (JSON Server).

---

## Project Goals

- Use of components and props
- Manage state using React Hooks
- Handle user events like clicks
- Fetch and manipulate data from an API
- Write clean, reusable, and organized React code

---

## Features

- View a list of bots
- Add bots to your army
- Remove bots from your army
- Delete bots permanently (from frontend and backend)
- Prevent duplicate bots in the army
- *(Advanced)* Show detailed view of a bot
- *(Advanced)* Sort and filter bots by class or stats

---

## Tools Used

| Technology     | Purpose                     |
|----------------|-----------------------------|
| React          | Frontend UI Framework       |
| JSON Server    | Mock REST API Backend       |
| JavaScript     | App logic and interactivity |
| HTML/CSS       | Layout and styling          |
| Git / GitHub   | Version control             |

---

### Getting Started

  ##  Prerequisites

- Node.js
- npm
- JSON Server (`npm install -g json-server`)

---

### Installation Steps

### 1. Clone the repository


    git clone https://github.com/your-username/bot-battlr.git

    cd bot-battlr

2. Install dependencies
          npm install
3. Start the JSON server


    -json-server --watch db.json --port 8001
       -Make sure db.json is in the root folder

     API will be available at:
         http://localhost:8001/bots

4. Start the app
     npm run dev
  -Frontend will be available at:
     http://localhost:3000

     ---

### Project Structure
     
              /bot-battlr
              ├── db.json               # Backend data (mock API)
              ├── public/
              ├── src/
              │   ├── components/
              │   │   ├── BotCard.js
              │   │   ├── BotCollection.js
              │   │   ├── YourBotArmy.js
              │   │   ├── BotSpecs.js      # (Advanced)
              │   │   └── SortBar.js       # (Advanced)
              │   ├── App.js
              │   └── index.js

---
### API Endpoints
   1. FETCH/bots
       Returns all bots.

    2. DELETE /bots/:id
      Deletes a bot permanently from the backend.

---
### Core Deliverables


    1.Fetch and display bots in BotCollection

    2. Add bots to MyBotArmy by clicking

    3.Prevent duplicate bots in the army

    4.Remove bots from army by clicking

    5.Permanently delete a bot (❌) from backend

---

### (Advanced) Features

## Feature	Description
    -BotSpecs View	Shows detailed bot info and actions
    -SortBar	Sort bots by health, damage, or armor
    -Filter by Class	Display bots by class (e.g., Medic, Witch, Support)
    -One Bot Per Class	Only allow one bot per class to be in the army

### extra deliverables
  - search Bots by name

  - Add bots to Favorites

  - Remove bots from Favorites

  - Upgrade bots using Credits



##  Learning Outcomes


1. Functional components with hooks

2. Prop drilling and state lifting

3. Working with REST APIs

4. Array methods like .map(), .filter(), .find()

5. Reusable component structure

6. Implementing interactive features like favorites and   credit upgrades

---
 ### License
     -This project is for educational use only.

---

 ### Author
        -Christina Manga
         -GitHub: @tinamanga

        - website url:https://bot-battlr-project.netlify.app/
        