import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  nickname: yup.string(),
  hostIp: yup.string().required('Required'),
  queryPort: yup.number().required('Required'),
  notes: yup.string(),
});

function AddServerForm() {
  const { handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return <form onSubmit={handleSubmit(onSubmit)} />;
}

export default AddServerForm;
