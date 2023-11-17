import Table from "../Table"

const Dashboard = () => {
    return(
        <div className="max-w-5xl w-full bg-white p-4 rounded-md">
            <h1 className="text-center text-2xl mb-4">Lista de items</h1>
            <Table/>
        </div>
    )
}

export default Dashboard