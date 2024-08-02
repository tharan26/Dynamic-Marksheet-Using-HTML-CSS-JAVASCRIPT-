document.addEventListener("DOMContentLoaded", function() {
    const theoryInputs = document.querySelectorAll('input[id^="t"]');
    const practicalInputs = document.querySelectorAll('input[id^="p"]');
    const totalDisplays = document.querySelectorAll('p[id^="tl"]');
    const grandTotalDisplay = document.getElementById('gt');
    const resultDisplay = document.getElementById('res');
    const percentageDisplay = document.getElementById('perc');

    function calculateTotal() {
        let grandTotal = 0;
        let totalSubjects = 0;

        // Calculate total for theory subjects
        theoryInputs.forEach((input, index) => {
            const theoryMark = parseFloat(input.value) || 0;
            const totalMark = theoryMark;

            totalDisplays[index].textContent = totalMark;
            grandTotal += totalMark;
            totalSubjects++;
        });

        // Calculate total for practical subjects
        practicalInputs.forEach((input, index) => {
            const practicalMark = parseFloat(input.value) || 0;
            const totalMark = practicalMark;

            totalDisplays[index + theoryInputs.length].textContent = totalMark;
            grandTotal += totalMark;
            totalSubjects++;
        });

        grandTotalDisplay.textContent = grandTotal;

        if (grandTotal >= 400) {
            resultDisplay.textContent = 'PASS';
        } else {
            resultDisplay.textContent = 'FAIL';
        }

        const percentage = (grandTotal / (totalSubjects * 100)) * 100;
        percentageDisplay.textContent = percentage.toFixed(2) + "%";
    }

    theoryInputs.forEach(input => {
        input.addEventListener('input', calculateTotal);
    });

    practicalInputs.forEach(input => {
        input.addEventListener('input', calculateTotal);
    });
});
