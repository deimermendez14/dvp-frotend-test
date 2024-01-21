import React, { Fragment } from 'react';
import { Button } from 'react-native';
import { useAppContext } from '../../context/app-context';
import { CustomTextInput } from '../atoms/custom-text-input';
import { ErrorMessage } from '../screens/error-message';
import { useFetchUsers } from '../../hooks/use-fetch-users';

export const UserSearchForm = () => {
  const { username, setUsername, error, setError, setUserData } =
    useAppContext();
  const { handleSearch } = useFetchUsers({ setError, setUserData, username });

  return (
    <Fragment>
      <CustomTextInput username={username} setUsername={setUsername} />
      <Button title="Buscar en GitHub" onPress={handleSearch} color="#007AFF" />
      {error && <ErrorMessage message={error} />}
    </Fragment>
  );
};
