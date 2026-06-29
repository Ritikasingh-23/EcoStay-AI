# Month-1 Reflection Video Script (5 minutes)

---

## [0:00–0:20] Intro (20 seconds)
**Visual:** Open with your project homepage (http://localhost:3001) + your name/ID
**Script:**
> "Hi, I'm [Your Name], and this is my Month 1 reflection. Over 4 weeks, I built EcoStay AI— a full-stack eco-friendly booking platform. Let's jump in!"

---

## [0:20–1:20] Thing 1: Reusable Frontend Components (1 minute)
**Visual:**
1. Show `components/ui/Button.jsx` on screen
2. Show Card component in action

**Code Snippet:**
```jsx
// components/ui/Button.jsx (Week 2-3)
export default function Button({ variant = "primary", children, disabled, ...props }) {
  const baseClasses = "px-4 py-2 rounded-lg font-semibold transition-all";
  const variants = {
    primary: "bg-green-600 hover:bg-green-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
```

**Script:**
> "First, I built reusable React components in Next.js: Buttons, Cards, Modals, Toasts, and more. This made my code clean— I reused components everywhere without duplication!"

---

## [1:20–2:20] Thing 2: Express Backend + REST API (1 minute)
**Visual:**
1. Show `backend/server.js`
2. Show Swagger UI at http://localhost:5000/api-docs

**Code Snippet:**
```javascript
// backend/server.js (Week 4)
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let ecoStays = [
  { id: 1, title: "Mountain View Cabin", price: "$120/night" },
  { id: 2, title: "Beachside Eco-Villa", price: "$150/night" },
];

// GET all stays
app.get('/api/stays', (req, res) => res.json(ecoStays));

app.listen(5000, () => console.log("Server on http://localhost:5000"));
```

**Script:**
> "Second, I built an Express backend with REST API endpoints for CRUD operations (Create/Read/Update/Delete) plus search, and added Swagger UI for easy testing at /api-docs!"

---

## [2:20–3:20] Thing 3: Frontend ↔ Backend Integration (1 minute)
**Visual:**
1. Show `app/page.jsx` fetch code
2. Show Network tab success

**Code Snippet:**
```jsx
// app/page.jsx (Week 4)
useEffect(() => {
  const fetchStays = async () => {
    try {
      setIsStaysLoading(true);
      const res = await fetch('http://localhost:5000/api/stays');
      const data = await res.json();
      setStaysList(data);
    } catch (err) {
      handleShowToast('error', 'Failed to load stays');
    } finally {
      setIsStaysLoading(false);
    }
  };
  fetchStays();
}, []);
```

**Script:**
> "Third, I connected frontend to backend with Fetch API! I added loading states and error toasts, so users always know what's going on!"

---

## [3:20–4:20] Challenge & Debugging (1 minute)
**Visual:**
1. Show old terminal error logs
2. Show duplicate layout.js + layout.jsx files
3. Show fixed app

**Script:**
> "My big challenge: Frontend crashed with 'firstStayCard undefined'. I checked logs and saw I had TWO layout files! Next.js didn't know which to use. I deleted the extra layout.js, kept layout.jsx, and it fixed everything! Lesson: Always check terminal logs carefully!"

---

## [4:20–4:40] Goals for Weeks 5–9 (20 seconds)
**Visual:**
1. Show GitHub README goals

**Script:**
> "Next goals: Add a real database, user authentication, and deploy everything to production!"

---

## [4:40–5:00] Outro (20 seconds)
**Visual:**
1. Show full app + GitHub link
2. Say thank you

**Script:**
> "That's my Month 1! I went from zero to full-stack! Thank you for watching!"

---

## Quick Tips for Filming:
1. Record screen share for code snippets and demos
2. Use OBS Studio/Loom
3. Speak clearly (aim for ~150 words/minute)
4. Keep to time limits to hit 5 minutes total
5. Upload as UNLISTED on YouTube
