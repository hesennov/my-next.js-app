const page = ({ params }) => {
  console.log(params);
  return <div>Blog Sayfasi: {params.blog}</div>;
};
export default page;
