import Skeleton from '../../atoms/Skeleton'
import './HomeLoadingState.styles.css'

const HomeLoadingState = () => (
    <main className='list-products-container-skeleton'>
        <Skeleton height='44px' styles={{ marginBottom: '16px' }} />
        <Skeleton height='80px' />
        <Skeleton height='80px' />
        <Skeleton height='80px' />
        <Skeleton height='80px' />
        <Skeleton height='80px' />
    </main>
)

export default HomeLoadingState