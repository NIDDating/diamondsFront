function pagination(page, totalPages) {
  let pagination = [];

  if (totalPages > 5) {
    let max;
    let min;

    if (totalPages <= 5) {
      max = 5;
      min = 0;
    } else {
      if (page - 3 < 0) {
        min = 0;
        max = 5;
      } else if (page + 2 > totalPages) {
        min = totalPages - 5;
        max = totalPages;
      } else {
        min = page - 3;
        max = page + 2;
      }
    }

    for (let i = min; i < max; i++) {
      pagination.push(i + 1);
    }
  } else {
    for (let i = 0; i < totalPages; i++) {
      pagination.push(i + 1);
    }
  }

  return pagination;
}

export default pagination;