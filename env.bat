@echo off
cd frontend
ren "example.env" ".env"
cd ..
cd backend
ren "example.env" ".env"
echo "======================"
echo "Enviroment files created"
echo "======================"
pause