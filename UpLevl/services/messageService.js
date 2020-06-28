import {getDummyMessageRoute} from './api-routes';

export const getDummyMessage = async () => {
  const res = await fetch(getDummyMessageRoute, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'GET',
  }).then(response => response.json());

  // console.log(res);
  return res;
};
