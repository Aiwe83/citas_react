const Error = ({ mensaje }) => {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-3 rounded relative">
            <p>{mensaje}</p>
        </div>
    )
}

export default Error