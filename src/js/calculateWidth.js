document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    calculateWidth()
})

const calculateWidth = () => {
    const skillBlocks = document.querySelectorAll('.about__skill')  // Находим все скиллы на странице с заданным классом

    if(!skillBlocks.length) return // Если элемента из его множества , не существует - прерываем функцию

    skillBlocks.forEach(skillBlock => {   // Проходимся по всем скиллам

        if(!skillBlock) return // Дополнительная проверка(если скилла нет - возврат)

        const skillBand = skillBlock.querySelector('.about__skill_band span') // Внутри скила находим спан.
        const dataPercent = parseInt(skillBand.dataset.percent, 10) // Извлекаем значение атрибута дата-персент.  С помощью парсинт преоразовываем полученное значение в число(десятичная система)
        const limitedWidth = Math.min(dataPercent, 100) // Ограничиваем ширину, она не может быть больше 100. Защиита от дурачка. Можно в дата персент написать хоть миллион, но ширина будет не больше 100
        skillBand.style.width = `${limitedWidth}%` // Применяем ширину , используя интерполяцию
    })
}