const SectionTitle = ({title, className, children}) => {
    return <div className={className}>
        <h2 className="title">{title}</h2>
        {children}
    </div>
}

export default SectionTitle;