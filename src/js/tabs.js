document.addEventListener('DOMContentLoaded', () => {
    'use strict'
    changeTab('.projects__tab', '.projects__items')
})

const changeTab = (button, contents ) => {
    const tabsHeaders = document.querySelectorAll(button);
    const tabsContents = document.querySelectorAll(contents);

    if (!tabsHeaders.length || !tabsContents.length) return

    tabsHeaders.forEach((tab, i, tabs) => {
        tab.addEventListener('click', () => {
            const id = tab.dataset.id

            if (!id || tab.classList.contains('active')) return

            tabs.forEach(tabsItem => tabsItem.classList.remove('active'))
            tab.classList.add('active')
            tabsContents.forEach(content => content.classList.remove('active'))
            document.querySelector(`${contents}[data-id="${ id }"]`).classList.add('active')
        })
    })
}


