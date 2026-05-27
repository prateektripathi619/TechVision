@echo off
REM Merge script for professional theme update

echo.
echo ============================================
echo   TechVision - Professional Theme Merge
echo ============================================
echo.

REM Check if git is available
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git not found! Please install Git from https://git-scm.com/
    pause
    exit /b 1
)
echo ✓ Git found

REM Get current branch
for /f "tokens=*" %%i in ('cd D:\TechVision && git rev-parse --abbrev-ref HEAD 2^>nul') do set CURRENT_BRANCH=%%i
echo Current branch: %CURRENT_BRANCH%

REM Navigate to main worktree
echo.
echo [1/6] Navigating to main worktree...
cd /d D:\TechVision
if errorlevel 1 (
    echo ❌ Failed to navigate to D:\TechVision
    pause
    exit /b 1
)
echo ✓ In main worktree

REM Check current branch and switch to main
echo.
echo [2/6] Switching to main branch...
git fetch origin main >nul 2>&1
git checkout main >nul 2>&1
if errorlevel 1 (
    echo ❌ Failed to checkout main branch
    pause
    exit /b 1
)
echo ✓ On main branch

REM Pull latest from remote
echo.
echo [3/6] Pulling latest changes...
git pull origin main >nul 2>&1
echo ✓ Updated main branch

REM Perform merge
echo.
echo [4/6] Merging professional-theme-update branch...
git merge agents-professional-theme-update --no-edit
if errorlevel 1 (
    echo ⚠️  Merge conflicts detected!
    echo Please resolve conflicts in VS Code and run:
    echo   git add .
    echo   git commit -m "Merge: Professional theme update"
    echo   git push origin main
    pause
    exit /b 1
)
echo ✓ Merge completed successfully

REM Verify merge
echo.
echo [5/6] Verifying merge...
git merge-base --is-ancestor agents-professional-theme-update HEAD
if errorlevel 1 (
    echo ❌ Merge verification failed
    pause
    exit /b 1
)
echo ✓ Merge verified

REM Push to GitHub
echo.
echo [6/6] Pushing to GitHub...
git push origin main
if errorlevel 1 (
    echo ⚠️  Push failed. Try pushing manually:
    echo   git push origin main
    pause
    exit /b 1
)
echo ✓ Pushed to GitHub

echo.
echo ============================================
echo   ✓ Merge Complete!
echo ============================================
echo.
echo Your professional theme update has been
echo successfully merged to the main branch!
echo.
echo Next steps:
echo 1. Visit: https://github.com/prateektripathi619/TechVision
echo 2. You can delete the topic branch if desired
echo.
pause
