# Atomity Frontend Engineering Challenge

This project is my submission for the **Frontend Engineering Internship Technical Challenge** at **Atomity**.

The objective of the challenge was to recreate an **animated feature section** inspired by Atomity's product interface while demonstrating strong frontend engineering fundamentals such as component architecture, animation quality, API integration, and modern CSS practices.

---

## Live Demo

**Deployed Application**  
https://nikhil300705-atomity-frontend-challenge.vercel.app

**GitHub Repository**  
https://github.com/nikhil300705/nikhil300705-atomity-frontend-challenge

---

## Feature Implemented

I implemented a **Cloud Optimization Insights section** that dynamically displays cards representing insights or products fetched from a public API.

The section includes:

- Scroll-triggered card animations
- Staggered animation sequence
- Hover interaction effects
- Dynamic API data rendering
- API caching for performance
- Responsive layout

The goal was to create a **clean and modern UI section similar to SaaS product landing pages**.

---

## Tech Stack

The project was built using the following technologies:

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **TanStack React Query**

---

## Animation Approach

Animations were implemented using **Framer Motion**.

Each card uses:

- `whileInView` for scroll-triggered animation
- `opacity + translateY` entrance motion
- staggered delays for sequential appearance
- hover lift interaction for better user feedback

This ensures animations feel **smooth, intentional, and performant**.

---

## Data Fetching

Data is fetched from the public API:

https://dummyjson.com/products

The API is used to simulate dynamic cloud insight data.

Each card displays:

- Product Title
- Description
- Price

The UI dynamically maps the API response instead of hardcoding content.

---

## Caching Strategy

Data fetching is handled using **TanStack React Query**.

Benefits include:

- Automatic API caching
- Reduced network requests
- Faster UI rendering
- Built-in loading and error states

---

## Project Structure

```
atomity-ui/

app/
  layout.tsx
  page.tsx
  globals.css

components/
  InsightCard.tsx

hooks/
  useInsights.ts

animations/
  cardAnimations.ts

tokens/
  designTokens.ts

README.md
```

Each folder has a clear responsibility:

| Folder | Purpose |
|------|------|
| app | Next.js pages |
| components | Reusable UI components |
| hooks | Data fetching logic |
| animations | Animation configuration |
| tokens | Design token definitions |

---

## Responsive Design

The layout adapts across screen sizes:

| Device | Layout |
|------|------|
| Desktop | 4 columns |
| Tablet | 2 columns |
| Mobile | 1 column |

Tailwind responsive utilities ensure the UI remains readable and balanced on all devices.

---

## Accessibility

Basic accessibility considerations include:

- Semantic HTML structure
- Clear typography contrast
- Keyboard-friendly layout
- Motion compatible with reduced-motion preferences

---

## What I Would Improve With More Time

Given additional time, I would add:

- Dark / Light theme toggle
- Skeleton loading states
- Container queries for component responsiveness
- More advanced scroll animations
- Performance optimization for larger datasets

---

## Installation

Clone the repository

```
git clone https://github.com/nikhil300705/nikhil300705-atomity-frontend-challenge
```

Navigate to the project directory

```
cd atomity-ui
```

Install dependencies

```
npm install
```

Run the development server

```
npm run dev
```

Open the application in your browser

```
http://localhost:3000
```

---

## Deployment

The project is deployed using **Vercel**, which integrates seamlessly with Next.js for continuous deployment.

---

## Author

Nikhil  
Frontend Developer
