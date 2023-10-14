@echo off
cd backend
call npm install
call npm run seed
call nodemon index.js 5000