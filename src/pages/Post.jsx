import { useParams } from "react-router-dom";

function Post() {
  const parasms = useParams();

  return (
    <>
      <h1>Post (ID-{parasms.postID})</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aut!
        Sapiente ea rem eligendi laboriosam numquam modi nobis, quia saepe aut.
        Culpa quo eius enim laborum provident repellat sapiente ut, eos quas
        laudantium rerum velit reprehenderit animi magnam ullam iure illo
        nostrum consequuntur ab? Obcaecati pariatur officiis minus architecto
        numquam voluptatem id et, quasi ipsam? Reprehenderit mollitia qui
        beatae, odit optio magni aliquam deserunt officia voluptas! At inventore
        nemo ducimus. Eius quidem harum, earum quas esse eaque necessitatibus
        obcaecati! Dolore, consequuntur? Voluptatum omnis quaerat sint tempore
        obcaecati vitae asperiores, illo, perferendis porro odit magnam cum
        incidunt aliquid a vero quisquam!
      </div>
    </>
  );
}

export default Post;
