
'use client'

export default function PageAlign(props: { left: any, right: any }) {

    const { left, right } = props;

    return (
        <div className="flex justify-center w-full">
                {left}
                {right}
        </div>
    )

}