document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', updateCartTotal);
});

function updateCartTotal() {
    let subtotal = 0;
    document.querySelectorAll('tbody tr').forEach(row => {
        const price = parseFloat(row.cells[1].textContent.replace('$', ''));
        const quantity = parseInt(row.querySelector('select').value);
        const rowTotal = price * quantity;
        row.cells[3].textContent = `$${rowTotal}`;
        subtotal += rowTotal;
    });
    document.querySelector('.summary-details span:nth-child(2)').textContent = `$${subtotal}`;
    document.querySelector('.summary-details.total span:nth-child(2)').textContent = `$${subtotal}`;
}
