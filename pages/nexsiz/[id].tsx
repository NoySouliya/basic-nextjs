import React from 'react';
import axios from 'axios';

export const getStaticPaths = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  const nexsizs = res.data;
  interface Paths {
    params: { id: string };
  }
  const paths: Paths[] = nexsizs.map(
    (nexsiz: { id: { toString: () => number } }) => ({
      params: { id: nexsiz.id.toString() },
    })
  );

  //   const paths: Paths[] = nexsizs.map((nexsiz: any) => ({
  //     params: {
  //       id: nexsiz.id.toString(),
  //     },
  //   }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
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

interface Props {
  nexsiz: {
    id: number;
    name: string;
    email: string;
    website: string;
    address: { city: string };
  };
}

const Details = ({ nexsiz }: Props) => {
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
