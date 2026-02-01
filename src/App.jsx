import Card from "./Card";
import Button from "./Button";
import Name from "./Name";
import Counter from "./Counter";
import Input from "./Input";
import Color from "./Color";
import Update from "./Update";
import UpdateArray from "./UpdateArray";
import Todo from "./Todo";
import Effect from "./Effect";
import Resolution from "./Resolution";

function App() {
  return (
    <>
      <Resolution />
      <Effect/>
      <Todo />
      <UpdateArray />
      <Update />
      <Button />
      <Name />
      <Counter />
      <Input />
      <Color />
      <Card h2="MSTHA" p="Youtuber"/>
      <Card h2="Manish Shrestha" p="Engineer" />
      <Card h2="Manish Gaming" p="Gamer"/>
      <Card h2="Manish Dev" p="Developer"/>
      <Card h2="Manish Editz" p="Video Editor"/>
      </>
  );
}

export default App;
