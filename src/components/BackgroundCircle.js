function BackgroundCircle(props) {
    return (
        <>
            <div
                style={{
                position: "absolute",
                overflow: "visible",
                background: props.color,
                left: "0%",
                top: "0%",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
                width: props.size,
                height: props.size
                }}
            />
        </>
    )
}

export default BackgroundCircle;