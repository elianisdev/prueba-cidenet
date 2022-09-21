const request = async (method, path, data) => {
  const url = `https://ops.enerbit.dev/learning/api/v1/${path}`;
  return (await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })).json();
};

const InventoryApi = {
  getItems: async (params) => {
    return await request('GET', 'meters?' + new URLSearchParams(params));
  },
  addItem: async (data) => {
    return await request('POST', 'meters', data)
  },
  editItem: async (data) => {
    return await request('PATCH', `meters/${data.id}`, data)
  },
  deleteItem: async (id) => {
    return await request('DELETE', `meters/${id}`)
  },
};

export default InventoryApi;
