# Script de push gh-pages vague autonome AGENT DEV LANDING 2026-06-03
# Charge index.html + i18n.js + terms.html mis à jour vers landing-repo, commit, push origin main.
# Charte V5 respectée, runbook DOC/07_OPERATIONS/02_RUNBOOKS.md section 2.

$ErrorActionPreference = "Stop"

$src  = "C:\Users\Kalmydas\Documents\_KalMydas\ATELIER\app\_landing\landing-preview"
$repo = "C:\Users\Kalmydas\Desktop\landing-repo"
$backupRoot = "C:\Users\Kalmydas\Desktop\KalMydas HOME\_backups"

# 1. Backup horodaté du landing-repo
$stamp = Get-Date -Format "yyyy-MM-dd-HHmm"
$backupDir = Join-Path $backupRoot "landing-repo-$stamp-pre-vague-autonome"
Write-Host ">>> Backup vers $backupDir" -ForegroundColor Cyan
if (-not (Test-Path $backupRoot)) { New-Item -ItemType Directory -Path $backupRoot | Out-Null }
Copy-Item -Path $repo -Destination $backupDir -Recurse -Force

# 2. Nettoyage lock orphelin éventuel
$lockPath = Join-Path $repo ".git\index.lock"
if (Test-Path $lockPath) {
  Write-Host ">>> Suppression lock orphelin" -ForegroundColor Yellow
  Remove-Item $lockPath -Force
}

# 3. Copie des 3 fichiers modifiés
Write-Host ">>> Copie index.html, i18n.js, terms.html" -ForegroundColor Cyan
Copy-Item -Path (Join-Path $src "index.html") -Destination (Join-Path $repo "index.html") -Force
Copy-Item -Path (Join-Path $src "i18n.js")    -Destination (Join-Path $repo "i18n.js")    -Force
Copy-Item -Path (Join-Path $src "terms.html") -Destination (Join-Path $repo "terms.html") -Force

# 4. Commit + push
Push-Location $repo
git add index.html i18n.js terms.html
Write-Host ">>> Git status avant commit" -ForegroundColor Cyan
git status

$msg = "feat(landing): sous-bloc Equipe section A propos + email kal@kalmydas.ch + 23 contrats about_arch + reformulation MME Legal mots radies (P1+P3+P4+P6 vague autonome)"
git commit -m $msg
git push origin main
Pop-Location

Write-Host ""
Write-Host ">>> Push termine. Verification visuelle sur https://kalmydas.com (propagation CDN 1 a 5 minutes)" -ForegroundColor Green
Write-Host ""
Read-Host "Appuyez sur Entree pour fermer"
