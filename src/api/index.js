const url = import.meta.env.VITE_API_URL || 'http://localhost:3001/';

async function getInvoices() {
  try {
    const response = await fetch(`${url}orders`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default {
  getInvoices,
};
