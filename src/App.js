import "./styles.css";
import TagsInput from "./TagInput";
export default function App() {
  const selectedTags = (tags) => {
    console.log(tags);
  };
  return (
    <div className="App">
      <TagsInput selectedTags={selectedTags} tags={[]} />
    </div>
  );
}
