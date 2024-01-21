import React, { Fragment } from 'react';
import { Button } from 'react-native';
import { CustomTextInput } from '../atoms/custom-text-input';
import { ErrorMessage } from '../screens/error-message';

export const UserSearchForm = ({
  username,
  setUsername,
  handleSearch,
  error,
}) => {
  return (
    <Fragment>
      <CustomTextInput username={username} setUsername={setUsername} />
      <Button title="Buscar en GitHub" onPress={handleSearch} color="#007AFF" />
      {error && <ErrorMessage message={error} />}
    </Fragment>
  );
};
