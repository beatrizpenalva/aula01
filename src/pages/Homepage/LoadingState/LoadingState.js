import CardSkeleton from '../../molecules/CardProduct/CardSkeleton'

const LoadingState = () => (
    <main className="list-products-container">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
    </main>
)

export default LoadingState