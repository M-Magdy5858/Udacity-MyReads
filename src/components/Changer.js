import './../App.css';

const Changer = ({currentShelf,selectShelf}) => {
  const options = [
    {value:'currentlyReading',name:'Currently Reading'},
    {value:'wantToRead',name:'Want to Read'},
    {value:'read',name:'Read'},
    {value:'none',name:'None'},
  ];
	return (
		<div className="book-shelf-changer">
			<select defaultValue={currentShelf} onChange={(e)=>selectShelf(e.target.value)}>
				<option value="title" disabled>
					Move to...
				</option>
        {options.map(option=> <option key={option.value} value={option.value} >{option.name}</option> )}
			</select>
		</div>
	);
};

export default Changer;
