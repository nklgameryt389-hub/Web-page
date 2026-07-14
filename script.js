const RATE = 5;
function updateTerms() {
    const text = document.getElementById('termsText');
    if(!text) return;
    text.innerText = (document.getElementById('genType').value === 'BR') ? 
        "BR: Verified only if you achieve Top 10." : "CS: Verified on Win or Star gain✌🏻.";
}
function generate() {
    const c = document.getElementById('genCount').value;
    const t = document.getElementById('genType').value;
    document.getElementById('result').innerHTML = `CODE: <strong>${c.toString().padStart(3,'0')} ${t}</strong>`;
}
function verifySpecial() {
    const input = document.getElementById('specInput').value.toUpperCase();
    if (!input.startsWith("ESP")) return alert("Invalid Code");
    
    const count = parseInt(input.match(/\d+/)[0]);
    const type = input.replace("ESP", "").replace(count, "").trim();
    
    // Logic: Full price for first 20, 10% discount on rest
    const base = Math.min(count, 20);
    const extra = Math.max(0, count - 20);
    const total = (base * RATE) + (extra * RATE * 0.9);
    
    document.getElementById('specResult').innerHTML = `
        <p>Verified: ${count} ${type}</p>
        <p><strong>Pay: ₹${total.toFixed(0)}</strong></p>
        <img src="qr_code.png" style="width:100px; margin:10px;">
        <p>9755797842@fam</p>`;
}
window.onload = updateTerms;
