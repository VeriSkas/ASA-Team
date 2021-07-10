import { signUp } from '../../api/api-handlers';

export const signUpHandler = () => {
    const signUpForm = document.querySelector('.components__wrapper_signUp-form');
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const emailInput = document.getElementById('email');
    const password1Input = document.getElementById('password1');
    const password2Input = document.getElementById('password2');
    const man = document.getElementById('man');
    const birthInput = document.getElementById('birth');
    const signUpBtn = document.querySelector('.signUpBtn');
    const signUpFormFields = {
        name: {
            isValid: false
        },
        surname: {
            isValid: false
        },
        birth: {
            isValid: false
        },
        email: {
            isValid: false
        },
        password1: {
            isValid: false
        },
        password2: {
            isValid: false
        },
    }

    // signUpBtn.setAttribute('disabled', true);

    signUpForm.addEventListener('submit', event => {
        event.preventDefault();
        const name = nameInput.value;
        const surname = surnameInput.value;
        const email = emailInput.value;
        const password1 = password1Input.value;
        const gender = man.checked ? 'man' : 'woman';
        const birth = birthInput.value;
        console.log(name, surname, birth, gender, email, password1);
        signUp(name, surname, birth, gender, email, password1);
    });

};
