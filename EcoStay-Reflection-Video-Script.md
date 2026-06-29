# EcoStay-AI Reflection Video - Full Script 
## ⏱️ TOTAL: 5-7 minutes 
## [0:00-0:30] INTRODUCTION 
### SCREEN: Open your GitHub repo: `https://github.com/Ritikasingh-23/EcoStay-AI.git` 
YOU SPEAK: 
"Hey there! Welcome to my Month-1 reflection video. I'm so excited to show you what I built over the past 4 weeks - EcoStay-AI, a complete full-stack eco-friendly stay booking platform. Let's dive in!" 
## [0:30-1:30] THING 1: UI COMPONENT LIBRARY 
### SCREEN: Show your components/ui folder in the file explorer 
YOU SPEAK: 
"First thing I built was a complete UI component library! Look at these - I have Button, Input, Modal, Loader, and Toast components. This was a game-changer because I could reuse them everywhere in my app without rewriting code." 
### SCREEN: Open components/ui/Button.jsx and show the code 
YOU SPEAK: 
"Here's my Button component - it has dark mode support, different variants, and proper styling. This made my frontend development so much faster and more consistent!" 
## [1:30-3:00] THING 2: FASTAPI BACKEND 
### SCREEN: Open backend-fastapi/main.py file 
YOU SPEAK: 
"Second, I built a powerful FastAPI backend! This was my first time using FastAPI, and it was amazing. Look at this - I have 6 complete API endpoints:" 
### SCREEN: Point to the endpoints in main.py 
- @app.get("/api/stays") 
- @app.get("/api/stays/{stay_id}") 
- @app.post("/api/stays") 
- @app.put("/api/stays/{stay_id}") 
- @app.delete("/api/stays/{stay_id}") 
- @app.get("/api/stays/search") 
YOU SPEAK: 
"I can create, read, update, delete, and search stays! And the best part?" 
### SCREEN: Open http://127.0.0.1:8000/docs in your browser 
YOU SPEAK: 
"FastAPI gives Swagger UI automatically! Look at this beautiful interactive documentation - I can test all my endpoints right here in the browser!" 
### SCREEN: In Swagger UI, click "Try it out" on GET /api/stays and execute it 
YOU SPEAK: 
"See? It returns all my stays instantly. This made debugging so much easier!" 
## [3:00-4:30] THING 3: FRONTEND-BACKEND CONNECTION 
### SCREEN: Open app/page.jsx and show the fetch code 
YOU SPEAK: 
"Third, I connected everything together! My Next.js frontend fetches data from my FastAPI backend. Look at this useEffect hook - it fetches the stays when the page loads, shows a loader while waiting, and handles errors with toast notifications." 
### SCREEN: Open http://localhost:3001 and show the working app 
YOU SPEAK: 
"And here's the final result! My beautiful EcoStay-AI homepage with the hero section, popular stays grid, features, and contact section. It's responsive, has dark mode, and loads data perfectly from the backend!" 
## [4:30-5:30] CHALLENGE & DEBUGGING 
### SCREEN: Show the git history or the commit "Fix FastAPI server startup issue" 
YOU SPEAK: 
"Now, I want to be honest - I faced a BIG technical challenge! The FastAPI server wouldn't start with reload mode enabled at all. I got an error message saying: 'You must pass the application as an import string to enable reload.' It was so frustrating because I couldn't test my changes without restarting the server manually every time!" 
### SCREEN: Show the backend-fastapi/main.py before and after the fix - point to line 123 
YOU SPEAK: 
"But I didn't give up! I debugged it step by step: 

1. First, I read the error message carefully - it was telling me exactly what was wrong!
2. Then I realized the issue in line 123 of backend-fastapi/main.py: I was passing the `app` object directly to `uvicorn.run()` instead of an import string
3. Finally, I changed:
   `uvicorn.run(app, host="0.0.0.0", port=port, reload=True)`
   to:
   `uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)`
   And boom! It worked perfectly with auto-reload!" 
### SCREEN: Show the working app with stays loaded and the server reloading on changes 
YOU SPEAK: 
"That moment when it finally worked felt amazing! I learned so much about reading error messages carefully and always checking the documentation. This was definitely the biggest technical problem I faced, and solving it was a huge win!" 
## [5:30-6:00] FUTURE GOALS 
### SCREEN: Show your GitHub repo or a simple slide with bullet points 
YOU SPEAK: 
"Looking ahead to Weeks 5-9, here's what I want to build: 

- First, add user authentication so travelers can log in 
- Second, replace the in-memory storage with a real database like PostgreSQL 
- Third, deploy my app to production so real travelers can use it 
- And fourth, add more features like booking management and payment integration" 
## [6:00-6:30] CONCLUSION 
### SCREEN: Go back to your GitHub repo homepage 
YOU SPEAK: 
"This Month-1 journey has been incredible! I went from zero to building a complete full-stack app. If you want to check out my code, it's all on GitHub. Thank you so much for watching, and I can't wait to build more in the coming weeks!" 
## ✅ RECORDING CHECKLIST 
Before recording: 

1. Open your GitHub repo 
2. Start backend (cd backend-fastapi && python main.py) 
3. Start frontend (npm run dev) 
4. Have all files open and ready to show 
5. Wear something comfortable and look at the camera! 
## 🎥 TIPS WHILE RECORDING 
- Speak clearly and confidently (it's okay to pause and retake!) 
- Keep your mouse cursor visible so viewers can follow along 
- Point to things on screen as you talk about them 
- Show your personality! This is your journey 
- Keep it under 7 minutes - you've got this! 
## 📤 UPLOAD INSTRUCTIONS 
When done: 

1. Upload to YouTube 
2. Set as Unlisted (not Public, not Private) 
3. Copy the link and submit it! 
YOU'RE READY TO RECORD! GO MAKE THAT AWESOME VIDEO! 🚀🎬
