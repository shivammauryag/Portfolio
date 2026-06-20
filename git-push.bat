@echo off
setlocal enabledelayedexpansion

REM Try to find Git installation
if exist "C:\Program Files\Git\bin\git.exe" (
    set GIT_PATH=C:\Program Files\Git\bin\git.exe
) else if exist "C:\Program Files (x86)\Git\bin\git.exe" (
    set GIT_PATH=C:\Program Files (x86)\Git\bin\git.exe
) else (
    echo Git not found. Checking Program Files...
    dir "C:\Program Files" /s /b /a:d | find /i "git"
    exit /b 1
)

echo Found Git at: !GIT_PATH!

cd /d c:\Users\shiva\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\LocalState\sessions\79D1A1A6CAD023986A7CCAAD3C8F4877CAD3C0AB\transfers\2026-24\portfolio\portfolio

"!GIT_PATH!" init
"!GIT_PATH!" config user.name "Shivam Maurya"
"!GIT_PATH!" config user.email "Shivammaurya361564@gmail.com"
"!GIT_PATH!" add .
"!GIT_PATH!" commit -m "Initial portfolio commit"
"!GIT_PATH!" branch -M main
"!GIT_PATH!" remote add origin https://github.com/shivammauryag/Portfolio.git
"!GIT_PATH!" push -u origin main --force

echo.
echo Portfolio pushed to GitHub successfully!
pause
