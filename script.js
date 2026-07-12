const supabaseUrl ="https://rgtcccfpzsdhrffdmnmm.supabase.co";
const supabaseKey ="sb_publishable_ODasp9PGk8ARh76lXULjkA__wbkT27i";
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);

function calculateOrderTotal(itemPrice, quantity, taxRate) {
  const subtotal = itemPrice * quantity;
  let discountedSubtotal;

  if (subtotal >= 20) {
    discountedSubtotal = subtotal - (subtotal * 0.10);
  } else {
    discountedSubtotal = subtotal;
  }

  const taxAmount = discountedSubtotal * taxRate;
  return discountedSubtotal + taxAmount;
}

const button = document.getElementById("calculateBtn");

button.addEventListener("click", function() {
  const itemPrice = Number(document.getElementById("itemPrice").value);
  const quantity = Number(document.getElementById("quantity").value);
  const taxRate = Number(document.getElementById("taxRate").value);

  const total = calculateOrderTotal(itemPrice, quantity, taxRate);

  supabaseClient
  .from("orders")
  .insert([{ item_price: itemPrice, quantity: quantity, tax_rate: taxRate, total: total }])
  .then(function(response) {
    console.log(response);
  });

  document.getElementById("result").textContent = `Total: $${total.toFixed(2)}`;
  
});