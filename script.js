var a = +prompt('Введите время');
if (a <= 12) {
    alert(a + " часа ночи");
}
else if (a >= 12 && a <= 24) {
    alert (a + " часа дня")
}