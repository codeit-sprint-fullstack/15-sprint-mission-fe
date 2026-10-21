const SAMPLE_IMAGE_COUNT = 14;

export function getProductImage(id) {
  const hash = String(id)
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);

  return `/images/sample-${(hash % SAMPLE_IMAGE_COUNT) + 1}.png`;
}
