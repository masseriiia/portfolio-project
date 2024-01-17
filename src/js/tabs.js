document.addEventListener('DOMContentLoaded', () => {
    'use strict'
    initTabs()
})

const initTabs = () => {
    const buttonElements = document.querySelectorAll('[data-js-tabs-button]');
    const groupElements = document.querySelectorAll('[data-js-tabs-group]')

    const onButtonClick = () => {
        buttonElements.forEach(button => {
            button.addEventListener('click', (event) => {
                const tabId = event.target.getAttribute('data-js-tabs-button');
                showTab(tabId)
            });
        });
    }

    const showTab = (tabId) => {
        groupElements.forEach(group => {
            const tabs = group.querySelectorAll('.projects__item');
            tabs.forEach(tab => {
                if (tabId === 'tab-1' || tab.getAttribute('data-js-tabs-item') === tabId) {
                    tab.style.display = 'block';
                } else {
                    tab.style.display = 'none';
                }
            });
        })
    }
    onButtonClick()
}

