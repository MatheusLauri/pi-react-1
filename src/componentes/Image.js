function Image({ url, id }) {
    return <img src={url} alt={id.toString()} />
}

export default Image