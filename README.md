# Frontend Template

Structure HTML / SCSS modulaire pensée pour les projets front-end, avec une architecture claire et responsive.

## Structure du projet

- `index.html`, `about.html`, `contact.html`
- Architecture SCSS :
  - `base/` : reset, responsive
  - `layout/` : header, footer
  - `components/` : boutons, inputs, nav, badge
  - `pages/` : styles spécifiques à chaque page
- `map.txt` : plan du projet et notes internes

## Compilation SCSS

Compilé via l’extension Live Sass Compiler (VS Code)  
Point d’entrée : `scss/main.scss`  
Sortie : `css/main.css`

```bash
Format : expanded  
Output : /css
