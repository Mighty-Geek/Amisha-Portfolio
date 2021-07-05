const heading = document.querySelector('.animated-heading');
heading.innerHTML = sparanWrap(heading.textContent);
function sparanWrap(letters) {
    return [...letters].map(letter => `<span>${letter}</span>`).join('');
}