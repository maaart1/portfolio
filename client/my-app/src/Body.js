import Api from "./Api"

function Body() {
  return (
      <div>
        {Api.get_pages("home")}
      </div>
  );
}

export default Body;
