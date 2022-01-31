import React from 'react';

class SpotDetail extends React.Component {
  render() {
    const { spot } = this.props;
    return (
      <div className="spot-detail-container">
          <div className="spot-detail-info-container">
            <img src={spot.photoUrl} className="spot-photo" alt="" />
          </div>
        <div className="container">
          <div className="spot-detail-info">
            <h1>{spot.name}</h1>
            <p className="spot-detail-info-desc">{spot.description}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, inventore corrupti. Accusamus, consequuntur ipsa totam vitae distinctio dolorem omnis voluptatum veritatis non. Voluptate dolorum totam laudantium nemo magni placeat alias?
            Aut animi laudantium tempora quas dolorem impedit neque, exercitationem iste voluptatum, vero debitis suscipit? In mollitia labore eum perferendis porro amet natus esse vel omnis. Expedita repellendus consequatur aspernatur accusamus!
            Magni totam rerum cumque tempore fuga. Cupiditate officiis eius itaque reiciendis quod eaque sunt suscipit dolore alias, error quidem quo similique quibusdam, veniam temporibus doloremque necessitatibus explicabo accusamus. Debitis, tenetur!
            Necessitatibus est quos aliquam eos accusamus quia officiis dignissimos laboriosam omnis magni quae doloremque, unde autem dolorem, voluptas ut deleniti quidem ducimus, nesciunt velit temporibus. Sed ut earum saepe consectetur?
            Alias veniam, aspernatur facere assumenda sequi nihil incidunt velit illum earum animi unde non corrupti maxime a debitis inventore explicabo provident, atque sit reprehenderit fugit. Cupiditate, incidunt quia! Natus, exercitationem?
            Recusandae fuga debitis aspernatur, tempora saepe praesentium natus minima commodi eius, dicta repudiandae blanditiis corrupti eligendi excepturi vel exercitationem assumenda delectus molestiae iste, quia non magnam quae tenetur inventore! Eos?
            Excepturi officia explicabo, corrupti veniam temporibus culpa animi magnam maiores molestiae incidunt voluptates minus rem voluptas molestias quasi, sequi repellat! Quidem sunt iure, vel error quia harum. Sint, sapiente esse.
            Quis enim possimus voluptas molestiae eveniet quas, tempora at quos magnam omnis ipsam, similique culpa sed eius dolores consequatur natus, esse error. Culpa consequatur aspernatur laboriosam earum blanditiis nihil accusantium?
            Deleniti autem sit aspernatur atque, saepe obcaecati voluptatum repudiandae enim eveniet, laudantium neque dignissimos? Non dicta illo esse possimus saepe sunt autem nostrum iure. Officiis molestiae iure asperiores tempore molestias.
            Veniam fugit accusantium, deleniti rerum, porro, ea amet praesentium sit repudiandae ratione illum doloribus. Reprehenderit possimus dolorem nemo obcaecati, voluptates nihil quaerat expedita adipisci perferendis, laboriosam voluptas quam minus! Iste!
            Ex provident explicabo tempora laborum amet mollitia eos ab iure odit voluptatibus! Nostrum iusto, adipisci dolorem esse, quis minima accusamus aspernatur dicta fuga sequi tempore dolor atque deleniti, fugiat saepe.
            Veniam deleniti voluptatem, tempora quae doloribus officia ut iste laudantium, numquam et sapiente accusantium quos eaque veritatis nisi, officiis quibusdam. Est deleniti obcaecati reiciendis, suscipit eum corrupti eius dignissimos quos.
            Voluptas ducimus cum voluptatibus sint ex perferendis deserunt accusamus quidem aperiam, adipisci tempore iste consectetur beatae nulla voluptates veritatis incidunt nesciunt et aspernatur tempora repudiandae numquam sequi odio. Recusandae, exercitationem.
            Voluptatibus, quis? Voluptatum harum blanditiis, consectetur accusantium dolor, et esse aut cumque numquam molestiae maxime veritatis laudantium labore quo, cupiditate incidunt porro? Temporibus id eligendi pariatur obcaecati, facilis perspiciatis maiores?
            Possimus deleniti deserunt iure voluptatem consequatur error suscipit aspernatur doloremque, aliquam hic, ratione, reiciendis dicta voluptatibus maxime fugit aliquid. At illum velit magni aperiam? Esse nostrum error inventore accusantium totam.
            Fugiat aliquam temporibus et nostrum quod, officia nulla sed impedit! Atque quae quibusdam in illum, eius dolor molestiae maxime ea quaerat perspiciatis? Placeat ab enim reiciendis accusamus perspiciatis consequuntur dicta!
            Velit aspernatur delectus fugiat perferendis aut iure consequuntur reprehenderit natus aliquid reiciendis nisi vero esse quasi tempora est, pariatur saepe! Error eligendi quasi quis perspiciatis repellat! Similique quod odio quo.
            Quaerat ex temporibus laudantium debitis similique dolores voluptas fugiat, illo cupiditate omnis obcaecati quibusdam nihil voluptatum dignissimos. Nesciunt sit reprehenderit enim accusantium ducimus corrupti, quis tempora, beatae possimus officia repellat!
            Est neque omnis earum cumque? Officiis odio facere esse qui molestias. Minima officia illum, repellat praesentium eaque optio libero amet, magnam impedit molestias cumque officiis ullam odio explicabo rerum repudiandae?
            Eaque cupiditate error, voluptas sit quasi molestiae commodi consectetur dolorum odio numquam quas atque dolore libero consequatur eius rem quia animi. Officiis ipsum sequi distinctio a rem. At, esse id?</p>
          </div>
          <div className="booking-box">
            <h3 className="booking-box-info">${spot.price}</h3>
            <p className="booking-box-info">Average per night</p>
            <button>Request to book</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SpotDetail