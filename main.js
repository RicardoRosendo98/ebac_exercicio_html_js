const submit = document.querySelector('button');

function validate(a, b) {
    if (!a || !b) {
        alert ("Campo A e B precisa conter algum valor.")
        return {
            validar: false,
            menssage: 'Preencha os números para A e B'
        }
    } else if  (b >= a) {
        return {
            validar: true,
            menssage: 'Parabéns este valor e igual ou mair que o Campo A'
        }
    }
    alert ("Digite um valor maior no campo B por favor!")
    return {
        validar: false,
        menssage: 'O Campo B precisa ser igual ou maior que o Campo A'
    }
}
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const feedback = document.querySelector('.feedback');

    const a = document.querySelector('#a').valueAsNumber;
    const b = document.querySelector('#b').valueAsNumber;

    const { validar, menssage } = validate(a, b);

    if (validar) {
        feedback.classList.add('valid');
        feedback.classList.remove('invalid');
    } else {
        feedback.classList.remove('valid');
        feedback.classList.add('invalid');
    }

    feedback.innerHTML = menssage;
})