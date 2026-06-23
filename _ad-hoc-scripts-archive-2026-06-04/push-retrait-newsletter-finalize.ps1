# Finalisation du push retrait newsletter (le precedent a saute sur git add newsletter.js
# car le fichier n'etait pas dans le repo, ce qui est OK).
# Les fichiers index.html et i18n.js ont deja ete copies dans le landing-repo.

$ErrorActionPreference = "Continue"

$repo = "C:\Users\Kalmydas\Desktop\landing-repo"

Push-Location $repo

Write-Host ">>> Git status avant" -ForegroundColor Cyan
git status

Write-Host ">>> git add index.html i18n.js" -ForegroundColor Cyan
git add index.html i18n.js

Write-Host ">>> Commit" -ForegroundColor Cyan
git commit -m "fix(landing): retrait bloc newsletter (footer + popup + script + CSS + i18n) - Telegram et reseaux footer suffisent"

Write-Host ">>> Push origin main" -ForegroundColor Cyan
git push origin main

Pop-Location

Write-Host ""
Write-Host ">>> Termine. Verification sur https://kalmydas.com (propagation 1 a 5 min)" -ForegroundColor Green
Read-Host "Appuyez sur Entree pour fermer"
