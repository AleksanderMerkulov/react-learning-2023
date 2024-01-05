import './Button.css'

export default function Button({children, isActive, ...props}) {
    return(
        <button className={"btn " + (isActive?"btn-success":"btn-secondary")} {...props}>{children}</button>
    )
}