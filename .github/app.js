// Tableau pour stocker l'historique des opérations
let historique = [];

// Récupération des éléments DOM
const form = document.getElementById('calculator-form');
const inputA = document.getElementById('nombreA');
const inputB = document.getElementById('nombreB');
const selectOp = document.getElementById('operation');
const errorMessageDiv = document.getElementById('error-message');
const resultatDiv = document.getElementById('resultat');
const historiqueList = document.getElementById('historique-list');

// Événement de soumission du formulaire
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêcher le rechargement de la page
    calculer();
});

/**
 * Fonction de validation des données et de calcul.
 */
function calculer() {
    // 1. Récupération des valeurs
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const operation = selectOp.value;
    
    let erreur = '';

    // 2. Validation des données
    if (isNaN(a) || inputA.value.trim() === '' || isNaN(b) || inputB.value.trim() === '') {
        erreur = "Veuillez saisir des valeurs numériques pour A et B.";
    } else if (operation === 'diviser' && b === 0) {
        // Interdiction de la division par zéro
        erreur = "Erreur : Division par zéro impossible.";
    }

    // 3. Affichage dynamique des erreurs
    if (erreur) {
        errorMessageDiv.textContent = erreur;
        errorMessageDiv.style.display = 'block';
        resultatDiv.textContent = 'Erreur de calcul';
        resultatDiv.style.backgroundColor = '#f8d7da'; // Couleur pour erreur
        resultatDiv.style.borderColor = '#dc3545';
        return; // Arrêter la fonction en cas d'erreur
    } else {
        errorMessageDiv.style.display = 'none'; // Cacher la zone d'erreur
        resultatDiv.style.backgroundColor = '#e2f0fb'; // Couleur pour succès
        resultatDiv.style.borderColor = '#007bff';
    }
    
    // 4. Exécution du calcul
    let resultat;
    let symbole;
    
    switch (operation) {
        case 'plus':
            resultat = a + b;
            symbole = '+';
            break;
        case 'moins':
            resultat = a - b;
            symbole = '-';
            break;
        case 'multiplier':
            resultat = a * b;
            symbole = '×';
            break;
        case 'diviser':
            resultat = a / b;
            symbole = '÷';
            break;
        default:
            // Ne devrait pas arriver avec les options définies
            resultat = 'Opération invalide';
    }

    // Formatage du résultat pour l'affichage (limiter les décimales)
    const resultatFormate = (typeof resultat === 'number') ? resultat.toFixed(2) : resultat;

    // 5. Affichage du résultat
    resultatDiv.textContent = `${a} ${symbole} ${b} = ${resultatFormate}`;

    // 6. Ajout de l'opération dans le tableau JS
    const operationObj = {
        calcul: `${a} ${symbole} ${b}`,
        resultat: resultatFormate,
        timestamp: new Date().toLocaleTimeString(),
    };
    historique.push(operationObj);

    // Limiter l'historique aux 10 dernières opérations
    if (historique.length > 10) {
        historique.shift(); // Supprimer le plus ancien
    }

    // 7. Mise à jour de la section "Historique"
    mettreAJourHistorique();
}

/**
 * Fonction pour mettre à jour l'affichage de l'historique dans le DOM.
 */
function mettreAJourHistorique() {
    // Vider la liste existante
    historiqueList.innerHTML = ''; 

    // Parcourir le tableau historique (le plus récent en premier)
    historique.slice().reverse().forEach(item => {
        const li = document.createElement('li');
        li.textContent = `[${item.timestamp}] : ${item.calcul} = ${item.resultat}`;
        historiqueList.appendChild(li); // Ajout à la liste
    });
}