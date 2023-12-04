'use client'
import PageHeader from '@/layout/pageHeader/page'

export default function Site({ children }: { children: React.ReactNode }) {

    return (
        <div>
            <div className="relative">
                <div>
                        <div className="wrapper">
                            <PageHeader />
                        </div>
                        {children}
                </div>
            </div>
        </div>
    )
}