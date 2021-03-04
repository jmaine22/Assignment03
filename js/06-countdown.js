let userCountDown = prompt('Set the countdown:' );
let result = parseInt(userCountDown);
do {
    alert(result);
    result -= 1;
} while (result > 0);