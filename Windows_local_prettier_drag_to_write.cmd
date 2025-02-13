@echo off
echo Formatting file(s) with Prettier...
for %%F in (%*) do (
    npx prettier --write "%%~F"
)
echo Done!
pause