# Personal Task Manager

A sleek and efficient personal task manager application built with SvelteKit. This app allows users to register, log in securely, and manage tasks effortlessly. It includes robust features such as task filtering, sorting, and integrates seamlessly with a mock API.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Registration and Login**: Secure authentication system to manage user accounts.
- **Task Management**: Add, edit, and delete tasks with ease.
- **Advanced Filtering**: Filter tasks by category, due date, and status.
- **Intuitive Sorting**: Sort tasks by date and priority for better organization.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://npmjs.com/) or [yarn](https://yarnpkg.com/) (latest versions)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/personal-task-manager.git
   cd personal-task-manager
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

## Running the Project

1. **Start the development server:**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

2. **Open your browser:**

   Navigate to [https://deshratna-devendra-e3180769-nagp-svelte-js-and-svelt-gpl1n3jwz.vercel.app/about](https://deshratna-devendra-e3180769-nagp-svelte-js-and-svelt-gpl1n3jwz.vercel.app/) to see the application in action.

## Folder Structure

```plaintext
personal-task-manager/
├── src/
│   ├── lib/
│   │   ├── api.js
│   │   ├── stores/
│   │   │   └── userStore.js
│   ├── routes/
│   │   ├── +layout.svelte
│   │   ├── index.svelte
│   │   ├── register/
│   │   │   └── +page.svelte
│   │   └── login/
│   │       └── +page.svelte
│   └── app.html
├── static/
│   └── ...
├── package.json
├── svelte.config.js
├── vite.config.js
└── README.md
```

## Usage

### Registration

1. Navigate to the registration page (default route).
2. Fill in the required fields (Name, Email, Password).
3. Click the "Register" button to create a new account.

### Login

1. After registration, navigate to the login page (`/login`).
2. Fill in your registered email and password.
3. Click the "Login" button to access your tasks.

### Managing Tasks

1. After logging in, you can add, edit, or delete tasks.
2. Use the filters and sorting options to manage and view your tasks as needed.

## API

The project uses a mock API to simulate task data. The API integration can be found in the `src/lib/api.js` file. Here is a brief overview:

### `fetchTasksFromApi()`

Fetches tasks from the mock API and transforms them into a usable format.

### `login(email, password)`

Simulates a login request to the mock API.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README file according to your project's specifics, such as the actual GitHub repository URL, any additional setup instructions, or any other relevant details.
