// Example of fetching data from WordPress REST API
export async function getPages() {
  const response = await fetch(
    "https://opraxitservices.com/wp-json/wp/v2/pages"
  );
  const pages = await response.json();
  return pages;
}

export async function getPage(slug: string) {
  const response = await fetch(
    `https://opraxitservices.com/wp-json/wp/v2/pages?slug=${slug}`
  );
  const pages = await response.json();
  return pages[0];
}
