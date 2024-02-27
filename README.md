# Sam's Portfolio

Welcome to the repository for Sam's Portfolio, a modern portfolio website built with Next.js 14. This project showcases a frontend portfolio along with a backend admin content management dashboard, providing a comprehensive platform for personal branding and content management.

## Features

- **Next.js 14**: Leveraging the latest features of Next.js for fast, server-rendered React applications.
- **Responsive Design**: Ensures a great user experience across all device sizes.
- **MongoDB**: Utilizes MongoDB for efficient content storage and retrieval.
- **EmailJS**: Integrated EmailJS for seamless contact form submissions without the need for a backend server.
- **Admin Dashboard**: A secure admin dashboard for content management.

## Live Demo

Check out the live demo of the portfolio here: [Sam's Portfolio](https://samblesswin-portfolio.vercel.app/)

## Local Development

### Prerequisites

- Node.js (LTS version recommended)
- MongoDB account and database
- EmailJS account

### Cloning the Repository

To get started with local development, first clone the repository to your local machine:

```bash
git clone https://github.com/Sam-Blesswin/samportfolio.git
cd samportfolio
```

### Installation

Install the required dependencies:

```bash
npm install
```

or if you prefer using Yarn:

```bash
yarn install
```

### Configuration

Before running the application, you need to set up your environment variables. Add a `.env.local` file and update it with your details:

```plaintext
DATABASE_URL=<Your MongoDB URL>
URL=<Your Host URL>
SERVICE_ID=<Your EmailJS Service ID>
TEMPLATE_ID=<Your EmailJS Template ID>
PUBLIC_KEY=<Your EmailJS Public Key>
ACCESS_TOKEN=<Your EmailJS Access Token>
```

### Running the Application

To start the development server:

```bash
npm run dev
```

or if you're using Yarn:

```bash
yarn dev
```

Access the portfolio at [http://localhost:3000](http://localhost:3000).

### Accessing the Admin Dashboard

The admin dashboard is available at [http://localhost:3000/admin](http://localhost:3000/admin). To access it, ensure you have created a document in your MongoDB database under the "users" collection with the following format:

```json
{
  "username": "your_username",
  "password": "your_password"
}
```

Replace `your_username` and `your_password` with your preferred credentials.

## Deployment

This project is set up for easy deployment with Vercel, ensuring smooth CI/CD integration. For detailed instructions on deploying to Vercel, please refer to their [official documentation](https://vercel.com/docs).

## Contributions

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or improvements.
