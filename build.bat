@echo off
cd frontend
call npm install
call npm run build
echo "======================"
echo "Build complete"
echo "======================"
pause