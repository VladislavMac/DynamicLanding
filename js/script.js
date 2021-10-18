"use strict"

const content = document.querySelector('.content');
const time    = document.querySelector('.time');
const desc    = document.querySelector('.desc');


const allQuotes = [
                    'Дойдя до конца, люди смеются над страхами, мучившими их вначале. Пауло Коэльо',
                    'Если ты не знаешь, чего хочешь, ты в итоге останешься с тем, чего точно не хочешь. Чак Паланик',
                    'Чтобы дойти до цели, надо идти. Оноре де Бальзак',
                    'Это своего рода забава, делать невозможное. Уолт Дисней',
                    'Если люди не смеются над вашими целями, значит ваши цели слишком мелкие. Азим Премжи',
                    'Пробуйте и терпите неудачу, но не прерывайте ваших стараний. Стивен Каггва',
                    'К черту все! Берись и делай! Ричард Брэнсон',
                    'Мы сами должны стать теми переменами, которые хотим видеть в мире. Махатма Ганди',
                    'Препятствия – это те страшные вещи, которые вы видите, когда отводите глаза от цели. Генри Форд',
                    'Постановка целей является первым шагом на пути превращения мечты в реальность. Тони Роббинс',
                    'Быть самым богатым человеком на кладбище для меня не важно… Ложиться спать и говорить себе, что сделал действительно нечто прекрасное, - вот что важно! Стив Джобс',
                    'Через осуществление великих целей человек обнаруживает в себе и великий характер, делающий его маяком для других. Георг Гегель',
                    'Мы должны вызывать, а не ждать вдохновения, чтобы начать дело. Действие всегда порождает вдохновение. Вдохновение редко порождает действие. Фрэнк Тиболт',
                    'Когда вы знаете, чего хотите, и вы хотите этого достаточно сильно, вы найдете способ получить это. Джим Рон',
                    'Я трачу почти все свое время на Facebook. У меня практически нет времени на новые увлечения. Поэтому я ставлю перед собой четкие цели. Марк Цукенберг',
                    'Чтобы достичь поставленных целей, нужны терпение и энтузиазм. Мыслите глобально – но будьте реалистами. Дональд Трамп',
                    'Самый опасный яд – чувство достижения цели. Противоядие к которому – каждый вечер думать, что можно завтра сделать лучше. Ингвар Кампрад',
                    'Вы не можете позволить себе ждать отличных состояний. Постановка целей – часто вопрос балансирования между временем и доступными ресурсами. Возможности легко потерять, ожидая подходящее время. Гэри Райан Блэр',
                    'Пуля, просвистевшая на дюйм от цели, так же бесполезна, как та, что не вылетала из дула. Фенимор Купер',
                    'Никогда, никогда не позволяйте другим убедить вас, что что-то сложно или невозможно. Дуглас Бадлер',
                    'Успех обычно приходит к тем, кто слишком занят, чтобы его просто ждать. Генри Девид Торо',
                    'Чтобы достичь успеха, перестаньте гнаться за деньгами, гонитесь за мечтой. Тони Шей',
                    'Секрет успешной жизни — это понять, что вам предназначено делать, и делать это. Генри Форд',
                    'Успех — это сумма небольших усилий, повторяющихся изо дня в день. Роберт Кольер',
                    'Я не знаю, что является ключом к успеху, но ключ к неудаче — это желание всем угодить. Билл Косби',
                    'Успешные люди делают то, что неуспешные не хотят делать. Не стремитесь, чтобы было легче, стремитесь, чтобы было лучше. Джим Рон',
                    'Стремитесь быть не просто успешным человеком, а ценным. Альберт Эйнштейн',
                    'Одна победа не ведет к успеху, в отличие от постоянного желания побеждать. Винс Ломбарди',
                    'Осуществляйте свои мечты, или кто-то наймет вас для осуществления своих. Фарра Грей',
                    'Рассчитывайте на худшее, надейтесь на лучшее. Владислав Макущенко',
                    'Свой успех я объясняю вот тем, что я никогда не оправдывалась и не слушала оправданий. Флоренс Найтингейл',
                    'Успех — это движение от неудачи к неудаче без потери энтузиазма. Уинстон Черчилль',
                    'Успех - это лестница, на нее не взобраться, держа руки в карманах. Пауль Баует',
                    'Успех - это успеть. Марина Цветаева',
                    'Успех - дело чистого случая. Это вам скажет любой неудачник. Эрл Уилсон',
                    'Успех – не ключ к счастью. Счастье – это ключ к успеху. Если вы любите то, что вы делаете, вы будете иметь успех. Герман Каин',
                    'Успех — это баланс. Успех — это когда вы являетесь тем, чем вы можете быть, не жертвуя ничем другим в вашей жизни. Ларри Уингет',
                    'Успех часто бывает единственной видимой разницей между гением и безумием. Пьер Клод Буаст',
                    'Секрет жизненного успеха: будь готов к возможности до того, как она возникнет. Бенджамин Дизраэли',
                    'Всякая работа трудна до времени, пока ее не полюбишь, а потом она возбуждает и становится легче. Максим Горький',
                    'Выбери профессию, которую ты любишь, — и тебе не придется работать ни дня в твоей жизни. Конфуций',
                    'Гениальность может оказаться лишь мимолетным шансом. Только работа и воля могут дать ей жизнь и обратить ее в славу. Альберт Камю',
                    'Жить — значит работать. Труд есть жизнь человека. Вольтер',
                    'Постарайтесь получить то, что любите, иначе придется полюбить то, что получили. Бернард Шоу',
                    'Работа, которую мы делаем охотно, исцеляет боли. Уильям Шекспир',
                    'Делай что можешь, с тем, что у тебя есть, там, где ты находишься. Теодор Рузвельт',
                    'Всегда помните о том, что ваша решимость преуспеть важнее всего остального. Авраам Линкольн',
                    'Кто хочет – ищет возможности. Кто не хочет – ищет причины. Сократ',
                    'Любовь и работа - единственные стоящие вещи в жизни. Работа - это своеобразная форма любви. Мэрилин Монро',
                    'Есть только один вид работы, который не вызывает депрессии, — это работа, которую ты не обязан делать. Жорж Элгози',
                    'Я твердо верю в удачу, и я заметил: чем больше я работаю, тем я удачливее. Томас Джефферсон',
                    'Вдохновение приходит только во время работы. Габриэль Маркес',
                    'Понуждай сам свою работу; не жди, чтобы она тебя понуждала. Бенджамин Франклин',
                    'Если вы будете работать для настоящего, то ваша работа выйдет ничтожной; надо работать имея в виду только будущее. Антон Чехов',
                    'Кто делает не больше того, за что ему платят, никогда не получит больше того, что он получает. Элберт Хаббард',
                    'Обычно те, кто лучше других умеет работать, лучше других умеют не работать. Жорж Элгози',
                    'Самая тяжелая часть работы — решиться приступить к ней. Габриэль Лауб',
                    'Самый несчастный из людей тот, для кого в мире не оказалось работы. Томас Карлейль',
                    'Лучше работать без определенной цели, чем ничего не делать. Сократ',
                    'Кто хочет сдвинуть мир, пусть сдвинет себя! Сократ',
                    'Мы находим в жизни только то, что сами вкладываем в нее. Ральф Уолдо Эмерсон',
                    'Пока у тебя есть попытка - ты не проиграл! Сергей Бубка'

                  ]

let countWeather   = 'day'
// const errorPhoneRu = 'Пожалуйста переверните ваше устройство';
// const errorPhoneEn = ''

function showDate(){
    const today = new Date();
     let hour = today.getHours();
     let min  = today.getMinutes();
     let sec  = today.getSeconds();

    const trueSec  = sec < 10 ? '0' + sec : sec;
    const trueMin  = min < 10 ? '0' + min : min;
    const trueHour = hour < 10 ? '0' + hour : hour;

    // Time
    time.innerHTML = `${trueHour}<span>:</span>${trueMin}<span>:</span>${trueSec}`

    // ifPhoneErr();

    if( hour < 7 && hour >= 5 ){
        content.style.backgroundImage = 'url(img/morning_3.jpg)'
    }else if( hour < 9 && hour >= 7 ){
        content.style.backgroundImage = 'url(img/morning_2.jpg)'
    }else if( hour < 12 && hour >= 9 ){
        content.style.backgroundImage = 'url(img/morning_1.jpg)'
    }
    else if( hour < 14 && hour >= 12 ){
        content.style.backgroundImage = 'url(img/day_3.jpg)';
    }else if( hour < 16 && hour >= 14 ){
        content.style.backgroundImage = 'url(img/day_2.jpg)';
    }else if( hour < 18 && hour >= 16 ){
        content.style.backgroundImage = 'url(img/day_1.jpg)';
    }
    else if( hour < 20 && hour >= 18 ){
        content.style.backgroundImage = 'url(img/evening_1.jpg)';
    }else if( hour < 22 && hour >= 20 ){
        content.style.backgroundImage = 'url(img/evening_2.jpg)';
    }else if( hour < 23 && hour >= 22 ){
        content.style.backgroundImage = 'url(img/evening_3.jpg)';
    }
    else{
        content.style.backgroundImage = 'url(img/night_2.jpg)'
    }

} 
setInterval(() => {
    showDate()
}, 1000);

// function ifPhoneErr(){
//     if( window.innerWidth < 700 && window.innerHeight > 800 || window.innerWidth < 700 && window.innerHeight < 800 || window.innerWidth < 500 && window.innerHeight > 350){
//         time.style.display = 'none';
//         desc.innerHTML = errorPhoneRu
//     }else{
//         time.style.display = 'block';
//         if( desc.textContent == errorPhoneRu ){
//             desc.innerHTML = allQuotes[Math.floor(Math.random() * allQuotes.length)];
//         }
//     }
// }

function quotes(weather){
    desc.style.color = 'transparent';
    setTimeout(() =>{
        desc.innerHTML = allQuotes[Math.floor(Math.random() * allQuotes.length)];
        desc.style.color = 'white'
        desc.style.textShadow = '#000 6px 5px 30px;';
    },1000)
    setTimeout(quotes, 60000);
}
quotes()
console.log('Music for it https://www.youtube.com/watch?v=zPNi78sVbio&ab_channel=MusicLab')
