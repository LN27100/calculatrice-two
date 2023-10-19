const operators = ['+', '-', '*', '/'];
let formule_el = document.getElementById("formule");
let result_el = document.getElementById("result");

// Cliquer sur une touche
function click_touch(value) {
	// si on a déjà fait un calcul précédemment
	if (result_el.textContent.length > 0) {
		// on réinitialise la case formule
		formule_el.value = "";

		// si on a cliqué sur un operator
		if (operators.indexOf(value) != -1) {  // Savoir si une chaîne de caractères contient un caractère rechercher et le renvoie avec sa position, Si il n'est pas trouvé, la valeur de retour sera -1.

			// On concate le résultat précédent
			formule_el.value = result_el.textContent;
		}

		// On vide le résultat
		result_el.textContent = "";
	}


	// Ajouter un zéro automatiquement avant un point s'il n'y a pas de chiffre avant
	if (value === '.' && formule_el.value === "") {
		formule_el.value = '0';
	}
	
	// On concate le chiffre/opérateur
	formule_el.value += value;
}




//  Clic sur "="
function egal() {
	let chiffre = formule_el.value;
	// Si la formule se termine par un operator
	if (operators.indexOf(chiffre.charAt(chiffre.length - 1)) != -1) {
		//Calculer le résultats avec le résultat donné par le dernier operator
		formule_el.value = formule_el.value + eval(chiffre.substring(0, chiffre.length - 1));
	}

	result_el.textContent = eval(formule_el.value);

	if (result_el.textContent === "Infinity") {
		result_el.textContent = "erreur"
	}

}

//  Vider champs formule et résultat
function erase() {
	formule_el.value = "";
	result_el.textContent = "";
}