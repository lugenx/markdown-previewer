export const Editor = (props) => {
  return (
    <div>
      <textarea
        className="left-box"
        id="editor"
        placeholder="This is a text inside editor"
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};
