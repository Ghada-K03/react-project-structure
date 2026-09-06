import Button from "./Button";
import Card from "./Card";
import Table from "./Table";
import "./Assignment2.css";
function Assignment2() {
  const columns = ["Name", "Age", "City"];

  const students = [
    {
      Name: "Ghada",
      Age: 24,
      City: "Gaza",
    },
    {
      Name: "Sara",
      Age: 22,
      City: "Cairo",
    },
    {
      Name: "Ahmad",
      Age: 25,
      City: "Amman",
    },
  ];

  return (
    <div className="assignment-container">
      <h1>Reusable Components in React</h1>

      <h2>Buttons</h2>

      <Button
        text="Save"
        variant="primary"
        onClick={() => alert("Saved successfully")}
      />

      <Button
        text="Delete"
        variant="danger"
        onClick={() => alert("Deleted successfully")}
      />

      <Button text="Disabled" variant="secondary" disabled={true} />

      <h2>Cards</h2>
      <div className="cards-container">
        <Card
          title="React"
          description="Learn how to build modern user interfaces using React."
          image="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
        />

        <Card
          title="Frontend Development"
          description="Learn HTML, CSS, JavaScript and React."
        >
          <Button
            text="Learn More"
            variant="primary"
            onClick={() => alert("Learn More")}
          />
        </Card>
      </div>

      <h2>Students Table</h2>

      <Table columns={columns} data={students} striped={true} />
    </div>
  );
}

export default Assignment2;
