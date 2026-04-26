let count = 0;

function cardCounter(card) {
  const increasedCount = [2, 3, 4, 5, 6];
  const unchangedCount = [7, 8, 9];
  const decreasedCount = [10, "J", "Q", "K", "A"];

  if (increasedCount.includes(card)) {
    count += 1;
  } else if (decreasedCount.includes(card)) {
    count -= 1;
  }

  if (count > 0) {
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }
}
