@echo off
REM Fix script for TechVision project

echo.
echo ============================================
echo   TechVision - Project Fix Script
echo ============================================
echo.

REM Check Node.js
echo [1/5] Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js not found! Please install from https://nodejs.org/
    pause
    exit /b 1
) else (
    echo ✓ Node.js found:
    node --version
)

REM Check npm
echo.
echo [2/5] Checking npm installation...
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm not found!
    pause
    exit /b 1
) else (
    echo ✓ npm found:
    npm --version
)

REM Kill existing processes on port 3000
echo.
echo [3/5] Cleaning up port 3000...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') do (
    taskkill /PID %%a /F >nul 2>&1
)
echo ✓ Port 3000 cleared

REM Delete old files
echo.
echo [4/5] Cleaning cache...
if exist "node_modules" (
    rmdir /s /q node_modules >nul 2>&1
    echo ✓ Removed node_modules
)
if exist ".next" (
    rmdir /s /q .next >nul 2>&1
    echo ✓ Removed .next cache
)
if exist "package-lock.json" (
    del package-lock.json >nul 2>&1
    echo ✓ Removed package-lock.json
)

REM Install dependencies
echo.
echo [5/5] Installing dependencies...
npm install
if errorlevel 1 (
    echo ❌ Installation failed!
    pause
    exit /b 1
)
echo ✓ Dependencies installed

REM Start dev server
echo.
echo ============================================
echo   ✓ All checks passed!
echo ============================================
echo.
echo Starting development server...
echo Open http://localhost:3000 in your browser
echo.
npm run dev

pause
