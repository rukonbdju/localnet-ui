const Container = ({ className, children }: { className?: string, children?: React.ReactNode }): React.ReactNode => {
    return <div className={"bg-white rounded p-4 shadow " + className}>{children}</div>
}

export default Container;