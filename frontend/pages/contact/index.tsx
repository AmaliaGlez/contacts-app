export const getStaticProps = () => {
  return {
    redirect: {
      destination: '/',
      permanent: true,
    },
  };
};
