# League of Legends Stats APP
![screencapture-final-project-league-nextjs-app-1-vercel-app-2023-07-17-11_22_29](https://github.com/Baumi92/final-project-league-nextjs-app/assets/128682336/b410e8ae-463f-4f6f-ba07-8832d7386a3f)

## Description
The Design League of Legends Web App using Next.js, with the following features:

The homepage features links to each section and options for signing up and logging in.
User authentication.(Own Api Logic)
User authorization (API only allows to user to access the features if your registered and have an account)
The Create page requires users to fill in certain criteria to create their profile.
Searchbar function for searching SummonerName over the League API.
Get your last 10 Games played with an active League of Legends Account.
Showcase your Champion played as a Champion Icon.

 Database Schema:
- https://drawsql.app/teams/baumi/diagrams/final-project

WireFrame on Figma:
-  Figma: https://www.figma.com/file/I3oBd0DChszJMlzX0AHDG1/Final-Project%2FLeague-of-Legends-App?type=design&node-id=0-1&mode=design&t=DS07FUEbiivKzISC-0

API Logic Schema:
-   Excalidraw : https://excalidraw.com/

##Technologies used
-  A PostgreSQL database and table(s)
-  Connect to and query information from this database
-  Typescript 
-  Javascript
-  Nextjs 13
-  Sass

## Screenshots

![screencapture-final-project-league-nextjs-app-1-vercel-app-profile-manuel-2023-07-17-11_23_21](https://github.com/Baumi92/final-project-league-nextjs-app/assets/128682336/c50b6a5c-954d-4984-bdd8-3f919d9a6dd5)

![screencapture-final-project-league-nextjs-app-1-vercel-app-search-2023-07-17-11_23_47](https://github.com/Baumi92/final-project-league-nextjs-app/assets/128682336/1610ee7b-abaf-43c3-836f-dddd3bb6a274)

![screencapture-final-project-league-nextjs-app-1-vercel-app-search-2023-07-17-11_24_08](https://github.com/Baumi92/final-project-league-nextjs-app/assets/128682336/efda4cd9-cf90-47da-8ba9-e064737ff7ae)

![screencapture-final-project-league-nextjs-app-1-vercel-app-contact-2023-07-17-11_24_31](https://github.com/Baumi92/final-project-league-nextjs-app/assets/128682336/72faeb65-4b0a-4c5f-a8a7-5d07bcdf2b5f)

## Setup Instructions
-Clone the repository: ```git clone https://github.com/Baumi92/final-project-league-nextjs-app.git```
-Navigate to the project directory: ```cd final-project-league-nextjs-app```
-Install the dependencies: ```pnpm install```
-Install dependencies manually (have a look at each page and file )
-Create a Postgres database for the project
-Register yourself to get access to the pages
-Set up the environment variables by creating a ```.env``` file based on the ```.env.example``` file and updating the necessary values
-Run the database migrations: ```pnpm migrate up``` based on the Postgres environment
-Start the development server: ```pnpm dev```
-Open your browser and access the application at ```http://localhost:3000```

## Deployment Instructions

1. Use the vercel-deploy branch of the project.
2. Create a Postgres storage in vercel
3. Create a Project and overwrite the install command with pnpm install && pnpm migrate up
4. Connect storage with project in Project > Storage > Connect


## Getting Started

First, run the development server:

### Contact Information

Github:
[https://github.com/Baumi92](url)
LinkedIn:
[https://www.linkedin.com/in/baumgartnermanuel/](url)
E-mail:
[manu.baumi@icloud.com](url)

