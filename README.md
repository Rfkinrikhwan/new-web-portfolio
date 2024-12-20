
# Web Portfolio

A modern, responsive portfolio website built using **Remix.js** and styled with **Tailwind CSS**. This project leverages open-source components from **shadcn**, **Magic UI**, and other libraries to create an elegant and customizable user experience.

## Features

- **Fast and Scalable**: Powered by Remix.js for optimized performance.
- **Responsive Design**: Tailwind CSS ensures compatibility across devices.
- **Pre-built Components**: Includes reusable UI elements from **shadcn** and **Magic UI**.
- **Customizable**: Easily adapt the design and structure to suit your personal brand.

## Tech Stack

- **Frontend Framework**: [Remix.js](https://remix.run/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**:
  - [shadcn](https://shadcn.dev)
  - [Magic UI](https://magic-ui.dev)
- **Hosting**: [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/) (optional)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
portfolio/
├── app/
│   ├── components/  # Reusable UI components
│   ├── routes/      # Remix routes for pages
│   ├── styles/      # Tailwind CSS configuration
│   ├── utils/       # Utility functions
│   └── entry.client.jsx  # Client entry point
├── public/          # Static assets
├── remix.config.js  # Remix configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json     # Project dependencies
```

## Customization

1. **Update Content**: Modify content in `app/routes` for pages like About, Projects, and Contact.
2. **Styling**: Adjust styles in `app/styles` or directly customize Tailwind CSS classes.
3. **Components**: Add or replace components in `app/components`.

## Deployment

To deploy your portfolio, use one of the following services:

- **Vercel**:
  ```bash
  npm run build
  vercel deploy
  ```

- **Netlify**:
  ```bash
  npm run build
  netlify deploy
  ```

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- **shadcn** for providing high-quality components.
- **Magic UI** for intuitive design elements.
- **Remix** and **Tailwind CSS** for their powerful tools.
