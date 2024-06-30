import './Category.css';
import Title from '../../common/Title';
import Card from '../Card/Card';

import img1 from '/img/image1.png';
import img2 from '/img/image2.png';
import img3 from '/img/image3.png';

export default function Category() {
  return (
    <>
      <section>
        <Title name="FRONT END" bgTitle="#6bd1ff" />
        <div className="card_content">
          <Card color="#6bd1ff" image={img1} />
          <Card color="#6bd1ff" image={img2} />
          <Card color="#6bd1ff" image={img3} />
        </div>
      </section>

      <section>
        <Title name="BACK END" bgTitle="#00c86f" />
        <div className="card_content">
          <Card color="#00c86f" image={img1} />
          <Card color="#00c86f" image={img2} />
          <Card color="#00c86f" image={img3} />
        </div>
      </section>

      <section>
        <Title name="INNOVACIÓN Y GESTIÓN" bgTitle="#ffba05" />
        <div className="card_content">
          <Card color="#ffba05" image={img1} />
          <Card color="#ffba05" image={img2} />
          <Card color="#ffba05" image={img3} />
        </div>
      </section>
    </>
  );
}
