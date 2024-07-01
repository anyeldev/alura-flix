import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';

export default function Home() {
  return (
    <>
      <Banner>Hola Home</Banner>
      <main style={{ padding: '0 45px' }}>
        <Category />
      </main>
    </>
  );
}
