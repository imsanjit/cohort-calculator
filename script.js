const body = document.body;
const result = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons button');



buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        if (buttonValue === '=') {
            try {
                result.value = eval(result.value);
            } catch (error) {
                result.value = 'Error';
            }
        } else if (buttonValue === 'C') {
            result.value = '';
        } else {
            result.value += buttonValue;
        }
    });
});