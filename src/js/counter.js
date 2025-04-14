document.addEventListener("DOMContentLoaded", function () {
    const speed = 200;
    const counters = document.querySelectorAll('.counter');
    const animateNumbers = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetNumber = +target.getAttribute('data-target');
                let count = 0;
                const increment = targetNumber / speed;
                const animate = () => {
                    count += increment;
                    if (count < targetNumber) {
                        target.innerText = Math.floor(count);
                        requestAnimationFrame(animate);
                    } else {
                        target.innerText = targetNumber;
                    }
                };
                animate();

                observer.unobserve(target);
            }
        });
    };

    const observer = new IntersectionObserver(animateNumbers, {
        threshold: 1.0
    });
    counters.forEach(counter => {
        observer.observe(counter);
    });
});
