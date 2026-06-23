# ============================================================
# push-fix-formule-mt4.ps1
# AGENT DEV LANDING, 2026-06-02 nuit heure suisse
#
# Aligne la formule "Performance composee par strategie" de
# kalmydas.com sur la formule MT4 demo de /transparency :
#   somme(pnl USD) / base compte MT4 par strategie * 100.
#
# Bases : HORIZON 30000, VALKYRIE 1000, REVOLUTION 100000,
#         TREASURY 100000, ORION 10000.
#
# Ce script :
#   1. backup horodate du index.html de landing-repo
#   2. supprime le lock git orphelin si present
#   3. copie ATELIER index.html vers landing-repo
#   4. git add UNIQUEMENT index.html (les 3 autres fichiers non
#      commitees deja en attente glossary-tooltip.js, i18n.js,
#      index.html historique session contact email footer ne
#      sont PAS touches ici, validation Kal separee)
#   5. commit + push origin main
#
# Lancement :
#   powershell -ExecutionPolicy Bypass -File `
#     "C:\Users\Kalmydas\Documents\_KalMydas\ATELIER\app\_landing\landing-preview\push-fix-formule-mt4.ps1"
# ============================================================

$ErrorActionPreference = 'Stop'

$srcAtelier   = "C:\Users\Kalmydas\Documents\_KalMydas\ATELIER\app\_landing\landing-preview\index.html"
$repoLanding  = "C:\Users\Kalmydas\Desktop\landing-repo"
$dstIndex     = Join-Path $repoLanding "index.html"
$lockFile     = Join-Path $repoLanding ".git\index.lock"
$stamp        = Get-Date -Format "yyyyMMdd-HHmmss"
$backupIndex  = Join-Path $repoLanding "index.html.bak-$stamp-pre-fix-formule-mt4"

Write-Host "=== push-fix-formule-mt4.ps1 ===" -ForegroundColor Cyan
Write-Host "Source ATELIER : $srcAtelier"
Write-Host "Repo landing   : $repoLanding"
Write-Host "Stamp          : $stamp"
Write-Host ""

# 1. Verifications sources
if (-not (Test-Path $srcAtelier)) {
  Write-Host "ERREUR : source ATELIER introuvable." -ForegroundColor Red
  exit 1
}
if (-not (Test-Path $repoLanding)) {
  Write-Host "ERREUR : repo landing-repo introuvable." -ForegroundColor Red
  exit 1
}

# 2. Backup pre-push du index.html actuel cote landing-repo (s'il existe)
if (Test-Path $dstIndex) {
  Copy-Item -Force $dstIndex $backupIndex
  Write-Host "Backup cree : $backupIndex" -ForegroundColor Green
}

# 3. Suppression lock git orphelin (origine 21 mai 22h19)
if (Test-Path $lockFile) {
  Remove-Item -Force $lockFile -ErrorAction SilentlyContinue
  Write-Host "Lock git orphelin supprime : $lockFile" -ForegroundColor Yellow
}

# 4. Copy ATELIER -> landing-repo
Copy-Item -Force $srcAtelier $dstIndex
Write-Host "Copy ATELIER -> landing-repo OK." -ForegroundColor Green

# 5. Commit + push (uniquement index.html)
Push-Location $repoLanding
try {
  git add index.html
  git status --short
  git commit -m "fix(track): aligne formule Performance composee sur transparency MT4 demo (somme pnl USD / base compte par pool)"
  git push origin main
  Write-Host ""
  Write-Host "Push gh-pages OK. Verifier https://kalmydas.com d'ici 1 a 2 minutes." -ForegroundColor Green
}
finally {
  Pop-Location
}
