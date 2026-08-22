let count = 0;
const myCards = [10, 'J', 'Q', 'K', 'A'];

function cardCounter(card) {
    if (card > 1 && card < 7) {
        count++;
    }
    if (myCards.includes(card)) {
        count--;
    }

    return count > 0 ? `${count} Bet` : `${count} Hold`;
}
