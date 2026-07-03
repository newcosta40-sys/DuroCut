export async function loadToolDatabase() {
  const response = await fetch('../data/toolDatabase.json');
  if (!response.ok) {
    throw new Error(`Failed to load tool database: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

export async function loadJsonFile(filePath) {
  const response = await fetch(filePath);
  if (!response.ok) {
    throw new Error(`Failed to load JSON file: ${response.status} ${response.statusText}`);
  }
  return response.json();
}
