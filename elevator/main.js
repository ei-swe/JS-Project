function createNewElement() {
    const totalFloor = 5;
    const floorStep = document.getElementById('floor-step');
    const controls = document.getElementById('controls');

    for (let i = 0; i < totalFloor; i++) {
        const floorLine = document.createElement('div');
        floorLine.className = "floor-line";
        floorLine.style.bottom = `${i * 100}px`;
        floorStep.appendChild(floorLine);

        const button = document.createElement('button');
        button.textContent = `${i + 1}`;
        controls.appendChild(button);

        button.onclick = () => moveElevator(i);
    }

    function moveElevator(floor) {
        const elevator = document.getElementById("elevator");
        elevator.style.bottom = `${floor * 100}px`;
        
    }
}

window.onload = createNewElement;