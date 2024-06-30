import './Banner.css';

export default function Banner() {
  return (
    <div className="banner">
      <div className="gradient">
        <div>
          <button>FRONT END</button>
          <h1>Challenge React</h1>
          <p>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte
            en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en
            la formación React.
          </p>
        </div>
        <div>
          <img src="/img/imgBanner.jpg" alt="Banner Image" />
        </div>
      </div>
    </div>
  );
}
