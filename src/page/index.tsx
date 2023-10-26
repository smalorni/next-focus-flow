import Layout from "../app/layout"

type HomeProps = {
    children: React.ReactNode
}

export default function Home({ children }: HomeProps) {
    return (
        <div>
            <Layout>
                {children}
            </Layout>
        </div>
    )
}
