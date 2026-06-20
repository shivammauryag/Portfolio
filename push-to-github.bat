@echo off
setlocal enabledelayedexpansion
cd /d c:\Users\shiva\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\LocalState\sessions\79D1A1A6CAD023986A7CCAAD3C8F4877CAD3C0AB\transfers\2026-24\portfolio\portfolio

REM Configure Git
git config --global user.name "Shivam Maurya"
git config --global user.email "Shivammaurya361564@gmail.com"

REM Initialize Git repo if not already initialized
if not exist .git (
    git init
    git add .
    git commit -m "Initial portfolio commit"
)

REM Add remote and push
git remote remove origin 2>nul
git remote add origin https://github.com/shivammauryag/Portfolio.git
git branch -M main
git push -u origin main --force

echo.
echo Portfolio pushed to GitHub successfully!
pause
