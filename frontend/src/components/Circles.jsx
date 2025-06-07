function Circle({width, height, color, children, className=""}) {
    return <div
        className={className}
        style={{
            width: width,
            height: height,
            backgroundColor: color,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            borderRadius: '50%',
            fontSize: '24px',
            padding: '100px 100px',
        }}
        >{children}</div>
}

export default Circle;