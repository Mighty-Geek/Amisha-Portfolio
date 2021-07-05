const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleClick(e) {
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });
    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false);
    });
    e.currentTarget.setAttribute('aria-selected', true);
    const { id } = e.currentTarget;

    const tabPanel = tabPanels.find(
        panel => panel.getAttribute('aria-labelledby') === id
    );
    tabPanel.hidden = false;
}

const heading = document.querySelector('.animated-heading');
heading.innerHTML = sparanWrap(heading.textContent);
function sparanWrap(letters) {
    return [...letters].map(letter => `<span>${letter}</span>`).join('');
}
tabButtons.forEach(button => button.addEventListener('click', handleClick));

