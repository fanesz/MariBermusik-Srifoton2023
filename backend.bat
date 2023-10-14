@echo off
cd backend
call npm install
call npm run seed
call npm start