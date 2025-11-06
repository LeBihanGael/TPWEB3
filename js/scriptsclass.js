function showStandings(type) {
    const driversStandings = document.getElementById('drivers-standings');
    const constructorsStandings = document.getElementById('constructors-standings');
    const buttons = document.querySelectorAll('.standings-nav button');

    if (type === 'drivers') {
        driversStandings.style.display = 'block';
        constructorsStandings.style.display = 'none';
        buttons[0].classList.add('active');
        buttons[1].classList.remove('active');
    } else {
        driversStandings.style.display = 'none';
        constructorsStandings.style.display = 'block';
        buttons[0].classList.remove('active');
        buttons[1].classList.add('active');
    }
}