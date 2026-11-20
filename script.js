(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        const rows = document.querySelectorAll('.agenda-row');

        // تأثير ظهور متتابع للعناصر
        rows.forEach(function (row, index) {
            setTimeout(function () {
                row.classList.add('visible');
            }, 80 * index);
        });

        // دعم prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            rows.forEach(function (row) {
                row.classList.add('visible');
            });
        }
    });
})();