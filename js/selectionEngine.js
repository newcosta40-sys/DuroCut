export function selectTool(tools = [], criteria = {}) {
  return tools.find((tool) => {
    return Object.entries(criteria).every(([key, value]) => {
      if (value === undefined || value === null) {
        return true;
      }
      if (Array.isArray(tool[key])) {
        return tool[key].includes(value);
      }
      return tool[key] === value;
    });
  });
}

export function filterTools(tools = [], criteria = {}) {
  return tools.filter((tool) => {
    return Object.entries(criteria).every(([key, value]) => {
      if (value === undefined || value === null) {
        return true;
      }
      if (Array.isArray(tool[key])) {
        return tool[key].includes(value);
      }
      return tool[key] === value;
    });
  });
}
