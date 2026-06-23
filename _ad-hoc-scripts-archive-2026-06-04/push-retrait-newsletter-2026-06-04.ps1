# Script de push correctif : retrait complet du bloc newsletter
# 2026-06-04, decision Kal : pas de capteur email, Telegram + reseaux suffisent

$ErrorActionPreference = "Stop"

$src  = "C:\Users\Kalmydas\Documents\_KalMydas\ATELIER\app\_landing\landing-preview"
$repo = "C:\Users\Kalmydas\Desktop\landing-repo"

Write-Host ">>> Copie index.html et i18n.js modifies" -ForegroundColor Cyan
Copy-Item -Path (Join-Path $src "index.html") -Destination (Join-Path $repo "index.html") -Force
Copy-Item -Path (Join-Path $src "i18n.js")    -Destination (Join-Path $repo "i18n.js")    -Force

Write-Host ">>> Suppression newsletter.js du repo (n'est plus reference)" -ForegroundColor Cyan
$repoNL = Join-Path $repo "newsletter.js"
if (Test-Path $repoNL) {
  Remove-Item $repoNL -Force
  Write-Host "    newsletter.js supprime du landing-repo" -ForegroundColor Yellow
}

Push-Location $repo
git add index.html i18n.js
git add newsletter.js 2>$null  # capture la suppression
git status

$msg = "fix(landing): retrait bloc newsletter (footer + popup + script + CSS + i18n) - Telegram et reseaux footer suffisent"
git commit -m $msg
git push origin main
Pop-Location

Write-Host ""
Write-Host ">>> Push correctif termine. Verification visuelle sur https://kalmydas.com" -ForegroundColor Green
Read-Host "Appuyez sur Entree pour fermer"
