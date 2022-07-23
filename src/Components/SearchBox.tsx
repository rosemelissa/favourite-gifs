interface SearchBoxProps {
  // eslint-disable-next-line
  setSearchTerm: Function;
  searchTerm: string;
}

export default function SearchBox({
  setSearchTerm,
  searchTerm,
}: SearchBoxProps): JSX.Element {
  return (
    <input
      id="header-input"
      className="input"
      type="text"
      value={searchTerm}
      placeholder="Search"
      onChange={(event) => setSearchTerm(event.target.value)}
    ></input>
  );
}
