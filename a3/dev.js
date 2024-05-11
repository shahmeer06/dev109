function createRhombus() {
    const height1 = parseInt(document.getElementById('height1').value);
    const height2 = parseInt(document.getElementById('height2').value);
    const height3 = parseInt(document.getElementById('height3').value);
    const height4 = parseInt(document.getElementById('height4').value);
    const oddColor = document.getElementById('oddColor').value;
    const evenColor = document.getElementById('evenColor').value;
    const symbol = document.getElementById('symbol').value;

    const rhombusContainer = document.getElementById('rhombusContainer');
    rhombusContainer.innerHTML = '';

    // First part of the rhombus (upper-left)
    for (let i = 0; i < height1; i++) {
        const line = document.createElement('div');
        line.style.color = i % 2 === 0 ? evenColor : oddColor;
        line.textContent = ' '.repeat(height1 - i) + symbol.repeat(i + 1);
        rhombusContainer.appendChild(line);
    }

    // Second part of the rhombus (upper-right)
    for (let i = height2; i > 0; i--) {
        const line = document.createElement('div');
        line.style.color = (height2 - i) % 2 === 0 ? evenColor : oddColor;
        line.textContent = symbol.repeat(i);
        rhombusContainer.appendChild(line);
    }

    // Third part of the rhombus (lower-left)
    for (let i = 0; i < height3; i++) {
        const line = document.createElement('div');
        line.style.color = i % 2 === 0 ? evenColor : oddColor;
        line.textContent = symbol.repeat(i + 1);
        rhombusContainer.appendChild(line);
    }

    // Fourth part of the rhombus (lower-right)
    for (let i = height4; i > 0; i--) {
        const line = document.createElement('div');
        line.style.color = (height4 - i) % 2 === 0 ? evenColor : oddColor;
        line.textContent = ' '.repeat(height4 - i) + symbol.repeat(i);
        rhombusContainer.appendChild(line);
    }
}
