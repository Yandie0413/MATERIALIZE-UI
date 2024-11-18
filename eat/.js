document.addEventListener('DOMContentLoaded', function () {
  // Initialisation des fonctionnalités Materialize
  const selectElems = document.querySelectorAll('select');
  M.FormSelect.init(selectElems);

  const scrollSpyElems = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(scrollSpyElems, { scrollOffset: 50 });

  // Gestion du choix de nourriture
  document.getElementById('submitBtn').addEventListener('click', function () {
    const selectedValue = document.getElementById('foodSelect').value;
    const result = document.getElementById('result');
    const selectedFood = document.getElementById('selectedFood');
    
    if (selectedValue) {
      selectedFood.textContent = `Vous avez choisi : ${selectedValue}`;
      result.style.display = 'block';
    } else {
      alert('Veuillez sélectionner une nourriture.');
    }
  }); on
}); WE