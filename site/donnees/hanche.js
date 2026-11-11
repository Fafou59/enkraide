// Région : Hanche
// Source : tableau « Liste innervations - Muscles h… » (capture d'écran du 11/11/2026).
// Seule l'orthographe a été corrigée (« glutéale » → « glutéal », « médiale » → « médial »).
// Long adducteur et suivants : coupés sur la capture, à ajouter depuis l'export complet.

window.REGIONS = window.REGIONS || [];
window.REGIONS.push({
  region: 'Hanche',
  // Cases proposées dans la grille des Racines, dans cet ordre.
  racines: ['L1', 'L2', 'L3', 'L4', 'L5', 'S1', 'S2', 'S3', 'S4'],
  muscles: [
    { muscle: 'Grand fessier', nerfs: ['Nerf glutéal inférieur'], racines: ['L5', 'S1', 'S2'] },
    { muscle: 'Moyen fessier', nerfs: ['Nerf glutéal supérieur'], racines: ['L4', 'L5', 'S1'] },
    { muscle: 'Petit fessier', nerfs: ['Nerf glutéal supérieur'], racines: ['L4', 'L5', 'S1'] },
    { muscle: 'Piriforme', nerfs: ['Nerf du piriforme'], racines: ['S2'] },
    { muscle: 'Obturateur interne', nerfs: ["Nerf de l'obturateur interne & du jumeau supérieur"], racines: ['L5', 'S1', 'S2'] },
    { muscle: 'Obturateur externe', nerfs: ["Nerf de l'obturateur externe"], racines: ['L3', 'L4'] },
    { muscle: 'Jumeau supérieur', nerfs: ["Nerf de l'obturateur interne & du jumeau supérieur"], racines: ['L5', 'S1', 'S2'] },
    { muscle: 'Jumeau inférieur', nerfs: ['Nerf du jumeau inférieur & du carré fémoral'], racines: ['L4', 'L5', 'S1'] },
    { muscle: 'Carré fémoral', nerfs: ['Nerf du jumeau inférieur & du carré fémoral'], racines: ['L4', 'L5', 'S1'] },
    { muscle: 'Ilio-psoas', nerfs: ['Nerf du psoas'], racines: ['L1', 'L2', 'L3'] },
    { muscle: 'Tenseur du fascia lata', nerfs: ['Nerf glutéal supérieur'], racines: ['L4', 'L5', 'S1'] },
    { muscle: 'Quadriceps', nerfs: ['Nerf quadricipital'], racines: ['L2', 'L3', 'L4'] },
    { muscle: 'Sartorius', nerfs: ['Nerf musculo-cutané externe'], racines: ['L2', 'L3'] },
    { muscle: 'Pectiné', nerfs: ['Nerf obturateur', 'Nerf musculaire médial', 'Branche du nerf fémoral'], racines: ['L2', 'L3', 'L4'] },
  ],
});
