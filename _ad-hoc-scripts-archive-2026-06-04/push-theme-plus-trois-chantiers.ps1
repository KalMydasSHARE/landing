# =============================================================================
# Script de push gh-pages landing avec 3 chantiers groupés
# Date :    2026-06-02
# Auteur :  AGENT DEV LANDING
# Contenu : (1) ordre canonique strategies track-strategies
#           (2) footer Contact email kal@kalmydas.ch
#           (3) thème clair/sombre dual avec bouton soleil/lune + badge NEW
# =============================================================================

$ErrorActionPreference = "Stop"

$ATELIER  = "C:\Users\Kalmydas\Documents\_KalMydas\ATELIER\app\_landing\landing-preview"
$LANDING  = "C:\Users\Kalmydas\Desktop\landing-repo"
$BACKUPS  = "C:\Users\Kalmydas\Desktop\KalMydas HOME\_backups"
$STAMP    = Get-Date -Format "yyyy-MM-dd-HHmm"
$BACKUP   = Join-Path $BACKUPS "landing-repo-$STAMP-pre-theme"

Write-Host "==> Etape 1 : Backup horodate de landing-repo" -ForegroundColor Cyan
if (-not (Test-Path $BACKUPS)) {
    New-Item -ItemType Directory -Path $BACKUPS -Force | Out-Null
}
if (Test-Path $LANDING) {
    Copy-Item -Recurse -Force $LANDING $BACKUP
    Write-Host "    Backup OK : $BACKUP"
} else {
    Write-Host "    landing-repo absent, pas de backup, on continue" -ForegroundColor Yellow
}

Write-Host "==> Etape 2 : Suppression lock git si present" -ForegroundColor Cyan
$LOCK = Join-Path $LANDING ".git\index.lock"
if (Test-Path $LOCK) {
    Remove-Item $LOCK -Force
    Write-Host "    Lock supprime"
} else {
    Write-Host "    Pas de lock"
}

Write-Host "==> Etape 3 : Copy ATELIER -> landing-repo (fichiers touches cette session)" -ForegroundColor Cyan

# index.html : embarque les 3 chantiers (ordre strategies + footer email + theme)
Copy-Item -Force (Join-Path $ATELIER "index.html") (Join-Path $LANDING "index.html")
Write-Host "    index.html copie"

# i18n.js : ajout cle theme_new_badge pour badge bilingue NEW/Nouveau
Copy-Item -Force (Join-Path $ATELIER "i18n.js") (Join-Path $LANDING "i18n.js")
Write-Host "    i18n.js copie"

Write-Host "==> Etape 4 : git add + commit + push" -ForegroundColor Cyan
Set-Location $LANDING

# Add cible UNIQUEMENT les 2 fichiers de cette session
# (on ne touche pas aux 3 fichiers non commitees du 1er juin : glossary-tooltip.js,
# i18n.js historique deja stage, et l'autre index.html residuel)
git add index.html i18n.js

Write-Host "    git status avant commit :" -ForegroundColor Yellow
git status --short

$msg = "feat(theme,track,footer): theme clair/sombre + ordre canonique strategies + footer Contact email"
git commit -m $msg

Write-Host "==> Etape 5 : Push origin main" -ForegroundColor Cyan
git push origin main

Write-Host ""
Write-Host "==> Push termine" -ForegroundColor Green
Write-Host "Cache GitHub Pages : 1 a 3 minutes avant propagation sur https://kalmydas.com/"
Write-Host ""
Write-Host "Verifications a faire en live :"
Write-Host "  1. Bouton soleil/lune visible navbar a cote du toggle FR/EN"
Write-Host "  2. Badge rouge 'Nouveau' (FR) ou 'NEW' (EN) sur le bouton"
Write-Host "  3. Click bascule entre fond sombre et fond ivoire"
Write-Host "  4. F5 conserve le thème choisi (cookie km_theme)"
Write-Host "  5. Bloc track strategies dans l'ordre HORIZON, VALKYRIE, REVOLUTION, TREASURY, ORION"
Write-Host "  6. Footer 'Contact : kal@kalmydas.ch' present"
Write-Host ""
Read-Host "Entree pour fermer"
