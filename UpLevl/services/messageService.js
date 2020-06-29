import {getDummyMessageRoute, postMessageRoute} from './api-routes';

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

export const postMessage = async message => {
  delete message._id;
  const newParams = {
    message,
  };

  const reqBody = JSON.stringify(newParams);
  const res = await fetch(postMessageRoute, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      user_id: 1,
    },
    method: 'POST',
    body: reqBody,
  }).then(response => response.json());

  console.log(res);
  return res;
};
