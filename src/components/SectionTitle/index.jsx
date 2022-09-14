const SectionTitle = ({title, children}) => {
    return <div>
        <h2 className="title">{title}</h2>
        {children}
    </div>
}

export default SectionTitle;