var elStyle = document.querySelector('.style')
var cash = prompt('Budjetingizni kiriting');
var forHotel = 250;
var forTicket = 500;
var forMuseum = 120;
var dollar_to_sum = 11225;
var euro_to_sum = 11686;
var total = (forHotel + forTicket) * dollar_to_sum;
var euro = forMuseum * euro_to_sum;
var cost = dollar_to_sum + euro_to_sum;
if (cash >= cost) {
  elStyle.textContent = "Oq yo'l Alisher oka";
} else {
  elStyle.textContent = "Alisher, oka ozgina sabr qilish kerak bo'lar ekan 🏦";
}