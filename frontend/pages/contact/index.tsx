export default function init() {
  return <div />
}

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};
