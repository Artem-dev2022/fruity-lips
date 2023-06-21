const tasteBtn = document.getElementById('taste');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const text = document.querySelector('.main__left');
const title = document.querySelector('.main__title');
const desription = document.querySelector('.main__text');
const img = document.querySelector('.main__img');

let current = localStorage.getItem('current');

if (!localStorage.getItem('current')) {
    localStorage.setItem('current', 'banana')
    current = localStorage.getItem('current')
}

const NEXT_IMG = {
    'banana': 'coconut',
    'coconut': 'strawberry',
    'strawberry': 'blackberry',
    'blackberry': 'kiwi',
    'kiwi': 'banana',
}

const PREV_IMG = {
    'banana': 'kiwi',
    'coconut': 'banana',
    'strawberry': 'coconut',
    'blackberry': 'strawberry',
    'kiwi': 'blackberry',
}

const DESCRIPTION = {
    'banana': 'Bananas are a popular tropical fruit known for their distinctive yellow color and sweet taste. They are botanically classified as berries and grow in clusters on large herbaceous plants. Bananas are rich in essential nutrients such as potassium, vitamin C, and dietary fiber, making them a convenient and healthy snack option for athletes and individuals of all ages.',
    'coconut': 'Coconuts are tropical fruits with a hard outer husk, a tough shell, and a deliciously sweet, creamy flesh inside. They are widely known for their versatility, providing coconut water, milk, oil, and grated coconut for culinary use. Coconuts are a rich source of healthy fats, fiber, and essential minerals, making them a nutritious addition to various dishes and beverages.',
    'strawberry': 'Strawberries are vibrant red fruits with a sweet and slightly tart flavor. They are a member of the rose family and are known for their juicy texture and small seeds that cover their surface. Packed with antioxidants, vitamins, and dietary fiber, strawberries are not only delicious but also offer numerous health benefits, including promoting heart health and boosting the immune system.',
    'blackberry': 'Blackberry are vibrant red fruits with a sweet and slightly tart flavor. They are a member of the rose family and are known for their juicy texture and small seeds that cover their surface. Packed with antioxidants, vitamins, and dietary fiber, strawberries are not only delicious but also offer numerous health benefits, including promoting heart health and boosting the immune system.',
    'kiwi': 'Kiwi are vibrant red fruits with a sweet and slightly tart flavor. They are a member of the rose family and are known for their juicy texture and small seeds that cover their surface. Packed with antioxidants, vitamins, and dietary fiber, strawberries are not only delicious but also offer numerous health benefits, including promoting heart health and boosting the immune system.',
}

title.textContent = current
desription.textContent = DESCRIPTION[current]
img.src = `img/${current}.png`;

tasteBtn.addEventListener('click', () => {
    document.body.style.background = 'linear-gradient(225.35deg, red 0%, blue 97.53%)'
})

nextBtn.addEventListener('click', () => {
    render(NEXT_IMG)
})

prevBtn.addEventListener('click', () => {
    render(PREV_IMG)
})

function render(obj){
    let current = obj[localStorage.getItem('current')];
    console.log(current)
    text.style.animation = 'hide 0.5s ease-in-out forwards'
    img.style.animation = 'disappear 0.5s ease-in-out forwards'
    setTimeout(() => {
        img.src = `img/${current}.png`;
        title.textContent = current
        desription.textContent = DESCRIPTION[current]
        localStorage.setItem('current', current);
        text.style.animation = 'show 0.5s ease-in-out forwards'
        img.style.animation = 'appear 0.5s ease-in-out forwards'
    }, 500);
}