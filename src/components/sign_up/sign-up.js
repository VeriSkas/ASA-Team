import { signUp } from '../../api/api-handlers';

export const signUpHandler = () => {
    const signUpForm = document.querySelector('.components__wrapper_signUp-form');
    console.log(signUpForm);
    signUpForm.addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const email = document.getElementById('email').value;
        const password1 = document.getElementById('password1').value;
        const man = document.getElementById('man');
        const gender = man.checked ? 'man' : 'woman';
        const birth = document.getElementById('birth').value;
        console.log(name, surname, email, password1, man, gender, birth);

        signUp(name, surname, birth, gender, email, password1);
    });
};
