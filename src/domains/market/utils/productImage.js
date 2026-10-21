export function getProductImage(product) {
  const id =
    typeof product === "object" ? product?.id : product;
  const images =
    typeof product === "object" ? product?.images : null;

  if (Array.isArray(images) && images.length > 0) {
    return resolveImageUrl(images[0]);
  }

  const SAMPLE_IMAGE_COUNT = 14;
  const hash = String(id ?? "")
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);

  return `/images/sample-${(hash % SAMPLE_IMAGE_COUNT) + 1}.png`;
}

export function resolveImageUrl(url) {
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url;
  const base = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5001/api";
  const prefix = base.replace(/\/api\/?$/, "");
  return `${prefix}${url.startsWith("/") ? url : "/" + url}`;
}
