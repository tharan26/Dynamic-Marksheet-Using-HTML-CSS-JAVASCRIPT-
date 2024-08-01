document.addEventListener("DOMContentLoaded", function() {
    const theoryInputs = document.querySelectorAll('input[id^="t"]');
    const practicalInputs = document.querySelectorAll('input[id^="p"]');
    const totalDisplays = document.querySelectorAll('p[id^="tl"]');
    const grandTotalDisplay = document.getElementById('gt');
    const resultDisplay = document.getElementById('res');
    const percentageDisplay = document.getElementById('perc');

    function calculateTotal() {
        let grandTotal = 0;

        theoryInputs.forEach((input, index) => {
            const theoryMark = parseFloat(input.value) || 0;
            const practicalMark = parseFloat(practicalInputs[index].value) || 0;
            const totalMark = theoryMark + practicalMark;

            totalDisplays[index].textContent = totalMark;

            grandTotal += totalMark;
        });

        grandTotalDisplay.textContent = grandTotal;

        if (grandTotal >= 500) {
            resultDisplay.textContent = 'PASS';
        } else {
            resultDisplay.textContent = 'FAIL';
        }

        const percentage = (grandTotal / 800) * 100;
        percentageDisplay.textContent = percentage.toFixed(2)+"%";
    }

    theoryInputs.forEach(input => {
        input.addEventListener('input', calculateTotal);
    });

    practicalInputs.forEach(input => {
        input.addEventListener('input', calculateTotal);
    });
});
