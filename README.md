# Enkraide

Révision de l'innervation des muscles (études de kiné). Un muscle s'affiche : on retrouve son ou ses nerfs (auto-complétion à partir de 3 lettres), puis on coche ses racines. Séries de 10 muscles, les muscles ratés reviennent plus souvent. Vocabulaire : voir [CONTEXT.md](CONTEXT.md).

## Lancer en local

```bash
python -m http.server 8765 --directory site
```

Puis ouvrir http://127.0.0.1:8765. La progression est enregistrée dans le navigateur de l'appareil (pas de compte).

Seul le dossier `site/` est publié.

## Publier (Cloudflare Pages)

```bash
npx wrangler pages deploy site --project-name enkraide --branch main
```

## Ajouter une Région

1. Copier `site/donnees/hanche.js` en `site/donnees/<region>.js` et remplir :
   - `region` : nom affiché ;
   - `racines` : cases de la grille, dans l'ordre (sinon déduites des données) ;
   - `muscles` : un objet par muscle, `nerfs` et `racines` recopiés du Document de référence.
2. Ajouter dans `site/index.html`, à côté de la ligne de la hanche :
   `<script src="donnees/<region>.js"></script>`

Les nerfs proposés à l'auto-complétion sont tous ceux présents dans les données, toutes Régions confondues. Un même nerf doit donc être écrit à l'identique partout (les accents et majuscules sont tolérés).
