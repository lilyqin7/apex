function Circle({width, height, color, children, className=""}) {
    const defaultClasses = "text-[15px] md:text-[24px] p-[50px] md:p-[100px]";
    return <div
        className={`${defaultClasses} ${className}`}
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
        }}
        >{children}</div>
}

export default Circle;