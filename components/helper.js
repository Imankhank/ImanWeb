export function limitStringWithEllipsis(inputString, limit) {
  if (inputString.length > limit) {
    return inputString.slice(0, limit - 3) + "...";
  } else {
    return inputString;
  }
}
