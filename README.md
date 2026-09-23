# 📚 Book Vibe - Book Review & Tracker Application

A modern, responsive, and full-featured Book Review & Tracking application built using **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Recharts**.

🚀 **Live Demo:** https://next-js-book-shop.vercel.app/ *(Replace with your actual Vercel URL)*

---

## ✨ Key Features

- 🏠 **Interactive Home Page:**
  - Displays a featured list of 6 curated books with a direct link to explore all books.
  - Modern hero banner section.

- 📚 **All Books Page (`/books`):**
  - Grid layout displaying the full catalog with custom card designs, rating badges, category tags, and optimized cover images.

- 📖 **Dynamic Book Details Page (`/books/[id]`):**
  - Server-Side Rendered (SSR) detail view for each book with publisher info, total page count, publishing year, and in-depth review.
  - Direct action buttons to add books to **Read** or **Wishlist** categories.

- 📑 **Listed Books Page (`/listed-book`):**
  - Categorized tab navigation between **Read Books** and **Wishlist Books**.
  - Dropdown sorting functionality by **Rating**, **Number of pages**, or **Publishing year**.
  - Dynamic responsive cards with horizontal layouts on desktop and stacked layouts on mobile.

- 📊 **Pages to Read Chart (`/pages-to-read`):**
  - Interactive custom **Triangular/Cone Bar Chart** powered by **Recharts**.
  - Visualizes and compares page counts of books added to the Read list.
  - Fully type-safe custom tooltips and SVG path renders.

- 💾 **Session Storage Persistence:**
  - Fast, client-side session storage management to keep track of added books per session.
  - Prevents adding duplicate books or adding already-read books to the wishlist.

---

## 🛠️ Tech Stack & Tools

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Data Visualization:** [Recharts](https://recharts.org/)
- **Notifications:** [react-hot-toast](https://react-hot-toast.com/)
- **Icons:** Standard Inline SVGs / Lucide Icons
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started Locally

Follow these steps to set up the project locally on your machine:

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/book-vibe.git](https://github.com/your-username/book-vibe.git)
cd book-vibe