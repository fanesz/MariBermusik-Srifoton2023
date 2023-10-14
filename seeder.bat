@echo off
cd backend
call npm install
call npm run seed
echo "======================"
echo "Seeding complete"
echo "======================"
pause