import React from 'react';
import axios from 'axios';

export const getStaticPaths = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  const nexsizs = res.data;
  const paths = nexsizs.map((nexsiz) => ({
    params: {
      id: nexsiz.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = res.data;
  return {
    props: {
      nexsiz: data,
    },
  };
};

const Details = ({ nexsiz }) => {
  return (
    <div>
      <h1>{nexsiz.name}</h1>
      <p>{nexsiz.email}</p>
      <p>{nexsiz.website}</p>
      <p>{nexsiz.address.city}</p>
    </div>
  );
};

export default Details;
