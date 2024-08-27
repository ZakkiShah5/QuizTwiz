const form = document.querySelector('form');
const correctAnswers = ['23', 'pakistan', 'black', 'horse', 'js'];
const result = document.querySelector('.result');
const totalScore = document.querySelector('.resultTotal');
const formDiv = document.querySelectorAll('.radios');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.age.value, form.country.value, form.color.value, form.animal.value, form.lang.value];
    userAnswers.forEach((answer, index)=>{
        if(answer == correctAnswers[index]){
            score += 1;
            result.classList.remove('hide');
            totalScore.innerText = score;
            formDiv[index].classList.add('green');
        }else{
            formDiv[index].classList.add('red'); 
        }
    })
});

const reset = ()=>{
    location.reload();
}