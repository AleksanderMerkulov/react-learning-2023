import './Button.css'

export default function Button({children, onClick, isActive}) {
    return(
        <button className={"btn " + (isActive?"btn-success":"btn-secondary")} onClick={onClick}>{children}</button>
    )
}