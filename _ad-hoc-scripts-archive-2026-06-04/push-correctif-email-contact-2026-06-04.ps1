# Script de push correctif : reversion kal@kalmydas.ch -> contact@kalmydas.ch
# Suite à correction Kal 2026-06-04 (le brief écrit disait kal@ mais l'intention était contact@)

$ErrorActionPreference = "Stop"

$src  = "C:\Users\Kalmydas\Documents\_KalMydas\ATELIER\app\_landing\landing-preview"
$repo = "C:\Users\Kalmydas\Desktop\landing-repo"

Write-Host ">>> Copie index.html et i18n.js correctifs" -ForegroundColor Cyan
Copy-Item -Path (Join-Path $src "index.html") -Destination (Join-Path $repo "index.html") -Force
Copy-Item -Path (Join-Path $src "i18n.js")    -Destination (Join-Path $repo "i18n.js")    -Force

Push-Location $repo
git add index.html i18n.js
git status

$msg = "fix(landing): email contact@kalmydas.ch retabli (footer, cookies banner, i18n EN) - correction post-vague autonome"
git commit -m $msg
git push origin main
Pop-Location

Write-Host ""
Write-Host ">>> Push correctif termine. Verification visuelle sur https://kalmydas.com" -ForegroundColor Green
Read-Host "Appuyez sur Entree pour fermer"
