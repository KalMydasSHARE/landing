# Script de push du fix trades.json (regen depuis api.kalmydas.com live)
# Genere par AGENT DEV LANDING le 2 juin 2026 nuit
# Verifie : le fichier trades.json dans landing-repo est deja a 226 trades (130 ko)
# A executer par Kal en PowerShell

$ErrorActionPreference = "Stop"

Set-Location "C:\Users\Kalmydas\Desktop\landing-repo"

# 1. Nettoyer le lock git orphelin du 21 mai 22h19 (bash Cowork Linux n'a pas la permission)
if (Test-Path ".git\index.lock") {
    Write-Host "Suppression du lock git orphelin..."
    Remove-Item ".git\index.lock" -Force
}

# 2. Verifier l'etat
git status --short

# 3. Add UNIQUEMENT trades.json (les autres modifs editoriales non commitees seront laissees pour validation Kal)
git add trades.json

# 4. Commit
git commit -m "fix(trades.json): regen snapshot depuis api.kalmydas.com (226 trades, source live)"

# 5. Push origin main
git push origin main

Write-Host ""
Write-Host "Termine. Verifier en navigation privee dans 1 a 2 min :"
Write-Host "  https://kalmydas.com/trades.json (devrait etre a 130 ko, 226 trades)"
