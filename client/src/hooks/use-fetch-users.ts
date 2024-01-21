import { getUsersService } from '../services/get-users.service';

export const useFetchUsers = (username, setError, setUserData) => {
  const handleSearch = async () => {
    if (username.length < 4) {
      setError('Ingrese al menos 4 caracteres para la búsqueda.');
      return;
    }

    if (username.toLowerCase() === 'doublevpartners') {
      setError('No se permite la búsqueda de "doublevpartners".');
      return;
    }

    try {
      const { response } = await getUsersService();
      setUserData(response.data.items.slice(0, 10));
      setError(null); // Limpiar el mensaje de error en caso de éxito
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Hubo un error al recuperar la información de GitHub.');
    }
  };

  return { handleSearch };
};
