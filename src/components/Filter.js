export default function Filter(props) {
  const { defaultOption, options } = props;
  return (
    <select>
      <option selected disabled value="">{defaultOption}</option>
      {options}
    </select>
  );
}