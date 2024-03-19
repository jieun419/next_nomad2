const MovieDetail = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <h1>
      Movie Detail {id}!
    </h1>
  );
};

export default MovieDetail;