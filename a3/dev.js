function createRhombus() {
    const height = parseInt(document.getElementById('height').value);
    const oddColor = document.getElementById('oddColor').value;
    const evenColor = document.getElementById('evenColor').value;
    const symbol = document.getElementById('symbol').value;

    const rhombusContainer = document.getElementById('rhombusContainer');
    rhombusContainer.innerHTML = '';

    for (let i = 0; i < height; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        let spaces = ' '.repeat(height - i - 1);
        let symbols = '';
        for (let j = 0; j < 2 * i + 1; j++) {
            symbols += j % 2 === 0 ? `<span style="color: ${evenColor};">${symbol}</span>` : `<span style="color: ${oddColor};">${symbol}</span>`;
        }
        line.innerHTML = spaces + symbols + spaces;
        rhombusContainer.appendChild(line);
    }

    for (let i = height - 2; i >= 0; i--) {
        const line = document.createElement('div');
        line.classList.add('line');
        let spaces = ' '.repeat(height - i - 1);
        let symbols = '';
        for (let j = 0; j < 2 * i + 1; j++) {
            symbols += j % 2 === 0 ? `<span style="color: ${evenColor};">${symbol}</span>` : `<span style="color: ${oddColor};">${symbol}</span>`;
        }
        line.innerHTML = spaces + symbols + spaces;
        rhombusContainer.appendChild(line);
    }
}
