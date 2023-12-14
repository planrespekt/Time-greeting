function checkTime() {
    // Få gjeldende klokkeslett
    const currentHour = new Date().getHours();

    // Betingelser for å gi respons basert på klokkeslett
    let greeting;
    if (currentHour >= 5 && currentHour < 12) {
        greeting = 'God morning';
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = 'God dag';
    } else {
        greeting = 'God kveld';
    }

    // Vis responsen i konsollen
    console.log(greeting);
}
