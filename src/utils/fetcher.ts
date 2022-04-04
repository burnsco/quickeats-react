export const fetcher = (url: string) =>
  fetch(`http://localhost:3000${url}`).then(res => res.json())
