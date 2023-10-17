let operators= ['+','-','*','/'];
			let formule_el = document.getElementById("formule");
			let result_el = document.getElementById("result");

			// Cliquer sur une touche
			function click_touch(value){		
				// si on a déjà fait un calcul précédemment
				if (result_el.textContent.length > 0)
				{
					// on réinitialise la case formule
					formule_el.value = "";

					// si on a cliqué sur un operator
					if(operators.indexOf(value) != -1){
						// On concate le résultat précédent
						formule_el.value = result_el.textContent;
					}
					
					// On vide le résultat
					result_el.textContent = "";
				}

				// On concate le chiffre/opérateur
				formule_el.value += value; 
			}
			
			//  Clic sur "="
			function egal(){
				var chiffre = formule_el.value;
				// Si la formule se termine par un operator
				if(operators.indexOf(chiffre.charAt(chiffre.length-1 )) !=-1 ){
					//Calculer le résultats avec le résultat donné par le dernier operator
					formule_el.value = formule_el.value + eval(chiffre.substring(0,chiffre.length-1));
				}
				result_el.textContent = eval(formule_el.value);
			}
			
		//  Vider champs formule et résultat
			function erase(){
				formule_el.value = "";
				result_el.textContent = "";
			}