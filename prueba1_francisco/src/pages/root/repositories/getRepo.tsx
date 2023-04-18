export function getRepositories() {
    const url = `https://api.github.com/users/chizk0/repos`;
  
    return fetch(url
      ).then((response) => {
       if (!response.ok) {
        throw new Error("Error al obtener la lista de repositorios.");
      }
  
      return response.json();
    });
  }