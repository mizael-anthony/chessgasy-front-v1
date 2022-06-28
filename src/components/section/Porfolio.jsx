import Joueur from "../../classes/Joueur"

export function Porfolio({ listJoueur = [] }) {
    if (!(listJoueur instanceof Array)) throw new Error("Tsy maintsy Array listJoueur")
    const listModal=[]
    const listJoueurRendu=listJoueur.map(j=>{
        listModal.push(<Modal joueur={j} key={j.id} ></Modal>)
        return <Card joueur={j} key={j.id} ></Card>
    })
    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {listJoueurRendu}
                </div>
            </div>



            {listModal}

        </section>
    )
}

function Card({joueur}) {

    if(!(joueur instanceof Joueur)) throw new Error("Tsy maintsy type Joueur le paramètre")

    return (
        <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href={"#"+joueur.id}>
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={joueur.profil} alt="..." />
                </a>
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{joueur.last_name}</div>
                    <div className="portfolio-caption-subheading text-muted">{joueur.first_name}</div>
                </div>
                <a href="#" className="btn btn-info" >Voir plus</a>
            </div>
        </div>
    )
}

function Modal({joueur}) {
    if(!(joueur instanceof Joueur)) throw new Error("Mila Joueur ilay paramètre")
    return (
        <div className="portfolio-modal modal fade" id={joueur.id} tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">

                                        <h2 className="text-uppercase">{joueur.name}</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." />
                                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                        <ul className="list-inline">
                                            <li>
                                                <strong>Client:</strong>
                                                Threads
                                            </li>
                                            <li>
                                                <strong>Category:</strong>
                                                Illustration
                                            </li>
                                        </ul>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-xmark me-1"></i>
                                            Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}