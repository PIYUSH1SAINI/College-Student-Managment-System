import React from "react";
function Adisplay(props) {
  return (
    <div>
      <table>
        <tr>
          <td>
            <h3>{props.name}</h3>
          </td>
          <td>
            <h3>{props.percentage}</h3>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Adisplay;
