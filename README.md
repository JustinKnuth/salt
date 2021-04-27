# Salt.
Blog


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

_**Salt** is a blog designed, developed, and authored by a Coding Bootcamp grad. The blog was created to fill a void in a world full of information. Specifically, Salt is designed for future Coding Bootcamp students, current students and ex-students. For someone who is interested in a Coding Bootcamp, its sometimes hard to find real experiences from real grads. Instead, you find larger websites with writers who never attended a Coding Bootcamp, but have developed their own opinions. The purpose of this blog is to allow an open space for people in the beginning, middle and end stages of their Coding Bootcamp journey. Future students can find real answers from grads. Grads can provide guidance for people interested in taking the leap. Current students can talk about what they have gone through and provide some insight. At the end of the day, Salt is a place for truth, real experiences and questions or concerns, all related to Coding Bootcamps._


## MVP 

- React App with organized file structure and full CRUD
- Structure website(jsx) in a clean and readable fashion
- Style website(CSS) using flex-box and grid
- Create an API using Ruby on Rails
- Utilize a postgresql database to store user data in the back-end
- Create an authentication feature for the site


### Goals

- Free user-friendly blog
- Help future coders find answers 
- Give users ability to post experiences
- Help people find assitance when they need it


### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Flexible JS library for UI creation.       |
|   React Router   | URL manager for site navigation.           |
|      Axios       | Promise based HTTP client.                 |
|      Rails       | Web app framework for Ruby.                |



## Client (Front End)

### Wireframes



![Wireframes](https://github.com/JustinKnuth/theConserver/blob/main/assets/Wireframe-1.png)



![Wireframes](https://github.com/JustinKnuth/theConserver/blob/main/assets/Wireframe-2.png)



#### Component Tree

![Component hierarchy](https://github.com/JustinKnuth/theConserver/blob/main/assets/hierarchy.png)

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
      |__ MainComponent.jsx
      |__ BlogDetails.jsx
      |__ SignUp.jsx
      |__ SignIn.jsx
      |__ AllBlogs.jsx
      |__ CreatePost.jsx
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

![ERD model](https://github.com/JustinKnuth/theConserver/blob/main/assets/ERD.png)

## Post-MVP

- Incorporate a third-party api to render a new motivational quote on the home screen everyday
- Add an investments page with market trends and news



## Code Showcase


## Code Issues & Resolutions

