@echo off
cd frontend
copy "example.env" ".env"
cd ..
cd backend
copy "example.env" ".env"
cd ..
echo "======================"
echo "Environment files created"
echo "======================"
pause