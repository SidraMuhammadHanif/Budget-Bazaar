        // Basic interactivity for quantity buttons
        document.querySelector('.decrease').addEventListener('click', function() {
            var input = this.nextElementSibling;
            var value = parseInt(input.value, 10);
            if (value > 1) input.value = value - 1;
        });

        document.querySelector('.increase').addEventListener('click', function() {
            var input = this.previousElementSibling;
            var value = parseInt(input.value, 10);
            input.value = value + 1;
        });

        // Size selection
        document.querySelectorAll('.size-option').forEach(function(option) {
            option.addEventListener('click', function() {
                document.querySelectorAll('.size-option').forEach(function(opt) {
                    opt.classList.remove('selected');
                });
                this.classList.add('selected');
            });
        });