<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction au PHP - TP 6</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f4f4f4; }
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        h1, h2 { color: #007bff; }
        .variable-section { margin-bottom: 20px; padding: 10px; border: 1px solid #ddd; border-left: 5px solid #28a745; border-radius: 4px; }
        .code { font-family: monospace; background-color: #eee; padding: 2px 5px; border-radius: 3px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Introduction au PHP</h1>

        <?php
            // Déclaration de variables PHP
            $etablissement = "Université Technique de Marrakesh";
            $module = "Développement Web Avancé";
            $annee = 2025;
            $pi = 3.14159;
            $nombre1 = 45;
            $nombre2 = 12;

            // Opérations simples
            $somme = $nombre1 + $nombre2;
            $produit = $nombre1 * $nombre2;
            $division_pi = $pi / 2;
        ?>

        <h2>Informations Générales</h2>
        <p><strong>Nom de l’établissement :</strong> <?php echo $etablissement; ?></p>
        <p><strong>Module :</strong> <?php echo $module; ?></p>
        <p><strong>Année :</strong> <?php echo $annee; ?></p>

        <hr>

        <h2>Affichage et Exemples de Variables</h2>

        <div class="variable-section">
            <h3>Variables Chaînes de Caractères et Entiers</h3>
            <p>La variable <span class="code">$etablissement</span> contient : <strong><?php echo $etablissement; ?></strong></p>
            <p>La variable <span class="code">$annee</span> contient : <strong><?php echo $annee; ?></strong> (Type : Entier)</p>
            <p>La variable <span class="code">$pi</span> contient : <strong><?php echo $pi; ?></strong> (Type : Flottant)</p>
        </div>

        <div class="variable-section">
            <h3>Résultats d'Opérations Simples</h3>
            <p>
                Opération : <span class="code">$nombre1 + $nombre2</span> (<?php echo $nombre1; ?> + <?php echo $nombre2; ?>)
                <br>
                Résultat d'addition (<span class="code">$somme</span>) : <strong><?php echo $somme; ?></strong>
            </p>
            <p>
                Opération : <span class="code">$nombre1 * $nombre2</span> (<?php echo $nombre1; ?> × <?php echo $nombre2; ?>)
                <br>
                Résultat de multiplication (<span class="code">$produit</span>) : <strong><?php echo $produit; ?></strong>
            </p>
            <p>
                Opération : <span class="code">$pi / 2</span> (<?php echo $pi; ?> / 2)
                <br>
                Résultat de division (<span class="code">$division_pi</span>) : <strong><?php echo $division_pi; ?></strong>
            </p>
        </div>
        
    </div>
</body>
</html>