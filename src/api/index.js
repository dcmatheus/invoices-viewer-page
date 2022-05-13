const url = import.meta.VUE_APP_API_URL || 'http://localhost:3001';

async function getInvoices() {
  console.log(url);
  const response = await fetch(`${url}/orders`);
  const json = await response.json();
  return json;
}

export default {
  getInvoices,
};
