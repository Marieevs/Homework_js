let age=prompt('Сколько Вам лет?');
let gender=confirm('Ваш пол мужской?');
if (gender===true){
    if (age>60){
        console.log('Вы дедушка');
    } else if ((age>20) & (age<60)){
        console.log('Вы мужчина');
    } else if ((age>12) & (age<20)){
        console.log('Вы юноша');
    } else if (age<12){
        console.log('Вы мальчик');
    }

} else if (gender===false){
    if (age>60){
        console.log('Вы бабушка');
    } else if ((age>20) & (age<60)){
        console.log('Вы женщина');
    } else if ((age>12) & (age<20)){
        console.log('Вы девушка');
    } else if (age<12){
        console.log('Вы девочка');
    }
}

