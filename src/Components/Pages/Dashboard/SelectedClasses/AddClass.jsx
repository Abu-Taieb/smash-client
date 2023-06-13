
const AddClass = (classRow) => {
    const classCard = classRow.classRow;
    console.log(classRow);
  const { instructor, price, image, name, seats } = classCard;
  return (
      <tbody>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{name}</div>
              </div>
            </div>
          </td>
          <td>{instructor}</td>
          <td>{price}</td>
          <td>{seats}</td>
          <td>
            <button className="btn btn-info btn-xs">Payments</button>
          </td>
          <td>
            <button className="btn btn-error btn-xs">Delete</button>
          </td>
        </tr>
      </tbody>
  );
};

export default AddClass;
