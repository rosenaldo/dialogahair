// FAQ Toggle 
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        // Toggle a classe 'active' no botão da pergunta
        question.classList.toggle('active');

        // Seleciona a resposta correspondente
        const answer = question.nextElementSibling;

        // Alterna entre mostrar e esconder a resposta
        answer.classList.toggle('open');
        answer.classList.toggle('hidden');

        // Fecha outras respostas abertas
        document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
            if (otherAnswer !== answer && otherAnswer.classList.contains('open')) {
                otherAnswer.classList.remove('open');
                otherAnswer.classList.add('hidden');
                otherAnswer.previousElementSibling.classList.remove('active');
            }
        });
    });
});

// Modal functionality
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const modalAction = document.getElementById('modal-action');

function showFeatureDetails(title, icon, description, benefits, imageUrl) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-icon').innerHTML = `<i class="${icon}"></i>`;
    document.getElementById('modal-content').textContent = description;

    const benefitsList = document.getElementById('benefits-list');
    benefitsList.innerHTML = '';
    benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });

    if (imageUrl) {
        const modalImage = document.getElementById('modal-image');
        modalImage.classList.remove('hidden');
        modalImage.querySelector('img').src = imageUrl;
        modalImage.querySelector('img').alt = title;
    } else {
        document.getElementById('modal-image').classList.add('hidden');
    }

    modal.classList.remove('hidden');
}

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

modalAction.addEventListener('click', () => {
    modal.classList.add('hidden');
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});