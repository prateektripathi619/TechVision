@echo off
cd /d D:\Devcube

echo === Step 1: Check Git Status ===
git status

echo.
echo === Step 2: Delete temporary file ===
del /f components\sections\features-section-new.tsx
echo Deleted components/sections/features-section-new.tsx

echo.
echo === Step 3: Stage all changes ===
git add -A

echo.
echo === Step 4: Check recent commits for convention ===
git log --oneline -5

echo.
echo === Step 5: Create commit ===
git commit -m "feat: Enhance UI with new services and tech stack updates

- Updated hero-section.tsx: removed user avatars and 'Trusted by 50+ US Companies' section
- Updated app/page.tsx: removed ImpactSection import
- Updated impact-section.tsx: removed impact section content
- Updated features-section.tsx: added 2 new services (Serverless & Optimization, Cost Reduction & Optimization)
- Updated tech-showcase-section.tsx: added Machine Learning and App Development cards with images and tech stack info
- Deleted temporary file: features-section-new.tsx"

echo.
echo === Step 6: Show final commit ===
git log --oneline -1

pause
