function DropdownMenu(props) {
    return ( 
        <li  className="dropdown-item">
            <i class={props.icon}></i>
            <p onClick={props.click}>{props.text}</p>
        </li>
     );
}

export default DropdownMenu;