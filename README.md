# theConserver
Money Management Tool


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)



## Overview

_**The Conserver** is a money management tool designed to give you full control over your assets. TC aims to provide a solid platform for which one can enter their assets, bills due, deposits and more on a monthly basis. Plan ahead and write out your bills due over the course of the year, to stay on top of your finances. Enter your current assets and available money in both checking and savings. Set dates for expected deposits and withdrawals for more control. This tool can put more money back in your pocket over time, all while providing a user-friendly, easy-to-use, secure platform for asset management._


## MVP 

- React App with organized file structure and full CRUD
- Structure website(jsx) in a clean and readable fashion
- Style website(CSS) using flex-box and grid
- Create an API using Express
- Utilize a Ruby on Rails database to store user data in the back-end
- Create an authentication feature for the site
- Provide an easy-to-use experience 
- Write easy-to-read DRY code


### Goals

- Free user-friendly platform for asset-management
- Help users save money over time
- Give users full control over their money
- Allow users to see their incoming and outgoing funds monthly
- Help people become better at saving and managing their funds


### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Flexible JS library for UI creation.       |
|   React Router   | URL manager for site navigation.           |
|.     Axios       | Promise based HTTP client.                 |
|     Express      | Web app framework for API development.     |
|      Rails       | Web app framework for Ruby.                |



## Client (Front End)

### Wireframes

#### Un-authenticated Landing Page

![Un-authenticated landing page](https://github.com/JustinKnuth/theConserver/blob/main/assets/unauth-screens.png)

####Authenticated Screens

![Authenticated screens](https://github.com/JustinKnuth/theConserver/blob/main/assets/auth-screens.png)



#### Component Tree

![Component hierarchy](https://github.com/JustinKnuth/theConserver/blob/main/assets/component-hierarchy.png)

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Home.jsx
      |__ AccountOverview.jsx
      |__ BillsDue.jsx
      |__ Transactions.jsx
      |__ Accounts.jsx
      |__ Layout.jsx
      |__ Nav.jsx
      |__ Footer.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Planning / Preparation  | H | 3hrs |  |  |
| Research Similar Products | L | 2hrs |  |  |
| Core Structure  | H | 3hr |  |  |
| Pseudocode  | L | 1hr |  |  |
| Create and read functions for API  | H | 3hrs |  |  |
| Retrieve Correct Data  | H | 3hrs |  |  |
| Render Correct Data | H | 3hrs |  |  |
| Media Queries | H | 3hrs |  |  |
| Navigation Menu Creation and Style | H | 2.5hrs |  |  |
| Create User-Friendly Experience | H | 3hrs |  |  |
| Debugging | H | 3hrs |  |  |
| Code Organization for Readability | H | 2hrs |  |  |
| Image-Sizing | H |  |  |  |
| Total | H | 33.5hrs |  |  |



### Server (Back End)

#### ERD Model

![ERD model](https://github.com/JustinKnuth/theConserver/blob/main/assets/erd.png)

## Post-MVP

- Incorporate a third-party api to render a new motivational quote on the home screen everyday
- Add colorful graphs for enhanced visualization of account
- Add an investments page with market trends and news



## Code Showcase


## Code Issues & Resolutions

