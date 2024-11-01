// Add basic JS for future functionality like carousel or interaction
console.log("Page loaded");

    // Function to animate counting numbers
    function animateNumbers() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-count'); // Convert to number
                const count = +counter.innerText;
                const speed = 200; // Adjust speed as needed
                
                const increment = target / speed; // Increment step

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 15); // Update every 15ms
                } else {
                    counter.innerText = target; // Set to final value
                }
            };

            // Trigger the counter animation after AOS has triggered the animation
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCount();
                        observer.unobserve(counter); // Only count once
                    }
                });
            });

            observer.observe(counter);
        });
    }

    animateNumbers();