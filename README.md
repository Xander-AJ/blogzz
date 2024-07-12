# KnowledgeHub

KnowledgeHub is an innovative and interactive platform designed to facilitate knowledge sharing through articles, comments, and user interactions. It aims to create a vibrant community where users can learn from each other by sharing insights, experiences, and expertise. The platform empowers users to create and share articles on various topics, engage in meaningful discussions through comments, and follow their favorite authors to stay updated with their latest posts.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Team Members](#team-members)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

### Problem Statement

In today's information-rich world, individuals often struggle to find reliable and insightful content on specific topics. Traditional blogs and information-sharing platforms lack the interactive elements that foster community and engagement. There is a need for a platform that not only provides high-quality content but also encourages user participation and collaboration.

### Solution

KnowledgeHub addresses these challenges by offering a user-friendly platform where individuals can:

- Create and share articles.
- Engage through comments.
- Follow authors and receive notifications about new articles.

```console
.
├── CONTRIBUTING.md
├── LICENSE.md
├── Pipfile
├── README.md
├── client
│   ├── README.md
│   ├── package.json
│   ├── public
│   └── src
│       ├── components
│       │   ├── LoginForm.js
│       │   ├── SignupForm.js
│       │   ├── BlogForm.js
│       │   ├── BlogList.js
│       │   ├── CommentForm.js
│       │   └── CommentList.js
│       ├── pages
│       │   ├── Home.js
│       │   ├── Blogs.js
│       │   ├── BlogDetail.js
│       │   ├── NotFound.js
│       │   ├── Login.js
│       │   └── Signup.js
│       ├── services
│       │   ├── api.js
│       │   └── auth.js
│       ├── App.js
│       ├── PrivateRoute.js
│       ├── index.css
│       └── index.js
└── server
    ├── app.py
    ├── config.py
    ├── models.py
    └── seed.py
```

## Features

### MVP (Minimum Viable Product)

- User authentication: sign-up and login.
- Article management: create, view, update, delete articles.
- Comment system: add, view, delete comments on articles.
- User following: follow/unfollow other users, view a list of followed users.

### Stretch Features

- Notifications: receive notifications via Email/SMS when followed users post new articles.
- Likes: like articles and comments.
- Search: search articles by title or content.
- Filter: filter articles by categories or tags.
- Profile management: update profile information.

## Technology Stack

### Frontend

- React
- React Router
- Formik for forms and validation
- CSS for styling

### Backend

- Flask
- SQLAlchemy for ORM
- RESTful API

### Database

- Appwrite

### Notifications

- Email and SMS integration

### Deployment

- Vercel

## Installation

### Prerequisites

- Node.js and npm
- Python 3.x
- Appwrite

### Backend Setup

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/knowledgehub.git
    cd knowledgehub
    ```

### Frontend Setup

1. Install the frontend dependencies:

    ```sh
    npm install
    ```

2. Start the React development server:

    ```sh
    npm run dev
    ```

### User Endpoints

- `GET /users/<user_id>`: Get user details.
- `POST /users`: Create a new user.
- `PUT /users/<user_id>`: Update user details.
- `DELETE /users/<user_id>`: Delete a user.

### Article Endpoints

- `GET /articles`: Get all articles.
- `GET /articles/<article_id>`: Get a specific article.
- `POST /articles`: Create a new article.
- `PUT /articles/<article_id>`: Update an article.
- `DELETE /articles/<article_id>`: Delete an article.

### Comment Endpoints

- `GET /comments`: Get all comments.
- `GET /comments/<comment_id>`: Get a specific comment.
- `POST /comments`: Create a new comment.
- `PUT /comments/<comment_id>`: Update a comment.
- `DELETE /comments/<comment_id>`: Delete a comment.

## Team Members

- Nicole Apono
- Dennis Githaiga
- Joy Simiyu
- Tony Brian
- John-Alexander Kamau

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.
# blogzz
