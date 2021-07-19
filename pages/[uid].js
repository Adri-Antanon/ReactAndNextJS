function UserId(props) {
  return <h1>{props.id}</h1>;
}

export default UserId;

export async function getServerSideProps(context) {
  const {
    params: { uid },
  } = context;

  return { props: { id: "userId-" + uid } };
}
